<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

function respond(int $status, string $message): void
{
    http_response_code($status);
    echo json_encode(['message' => $message]);
    exit;
}

function field(string $key): string
{
    $value = $_POST[$key] ?? '';
    if (!is_string($value)) {
        return '';
    }

    return trim(str_replace(["\r", "\0"], '', $value));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, 'Method not allowed.');
}

// Hidden honeypot field: bots often fill it, human visitors do not.
if (field('website') !== '') {
    respond(200, 'Message received.');
}

$formType = field('form_type');
$name = field('name');
$email = filter_var(field('email'), FILTER_VALIDATE_EMAIL);
$phone = field('phone');
$message = field('message');

if (!in_array($formType, ['contact', 'recruitment'], true) || $name === '' || !$email) {
    respond(422, 'Required information is missing or invalid.');
}

if ($formType === 'contact' && $message === '') {
    respond(422, 'A message is required.');
}

$recipient = 'alhassane.samassekou@gmail.com';
$safeName = substr($name, 0, 150);
$safePhone = substr($phone, 0, 60);
$safeMessage = substr($message, 0, 5000);
$subjectLabel = $formType === 'recruitment' ? 'Candidature' : 'Demande contact';
$subject = '[Rocket Security] ' . $subjectLabel . ' - ' . $safeName;

$body = [
    'Type: ' . $subjectLabel,
    'Nom: ' . $safeName,
    'Email: ' . $email,
    'Telephone: ' . $safePhone,
];

if ($formType === 'contact') {
    $body[] = 'Sujet: ' . substr(field('subject'), 0, 80);
} else {
    $body[] = 'Poste: ' . substr(field('position'), 0, 80);
}

$body[] = '';
$body[] = 'Message:';
$body[] = $safeMessage;
$bodyText = implode("\r\n", $body);

$boundary = 'rocket_' . bin2hex(random_bytes(12));
$headers = [
    'From: Rocket Security Website <no-reply@rocketsecurity.net>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
];

$emailBody = '--' . $boundary . "\r\n";
$emailBody .= "Content-Type: text/plain; charset=UTF-8\r\n";
$emailBody .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$emailBody .= $bodyText . "\r\n";

if ($formType === 'recruitment') {
    if (!isset($_FILES['cv']) || $_FILES['cv']['error'] !== UPLOAD_ERR_OK) {
        respond(422, 'A PDF resume is required.');
    }

    $cv = $_FILES['cv'];
    if ($cv['size'] > 5 * 1024 * 1024) {
        respond(422, 'The PDF resume exceeds 5 MB.');
    }

    $extension = strtolower(pathinfo($cv['name'], PATHINFO_EXTENSION));
    $mime = (new finfo(FILEINFO_MIME_TYPE))->file($cv['tmp_name']);
    if ($extension !== 'pdf' || $mime !== 'application/pdf') {
        respond(422, 'Only PDF resumes are accepted.');
    }

    $attachment = chunk_split(base64_encode((string) file_get_contents($cv['tmp_name'])));
    $fileName = preg_replace('/[^A-Za-z0-9._-]/', '_', basename($cv['name']));
    $emailBody .= '--' . $boundary . "\r\n";
    $emailBody .= "Content-Type: application/pdf; name=\"" . $fileName . "\"\r\n";
    $emailBody .= "Content-Disposition: attachment; filename=\"" . $fileName . "\"\r\n";
    $emailBody .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $emailBody .= $attachment . "\r\n";
}

$emailBody .= '--' . $boundary . "--\r\n";

if (!mail($recipient, $subject, $emailBody, implode("\r\n", $headers))) {
    respond(500, 'Unable to send message.');
}

respond(200, 'Message sent.');
