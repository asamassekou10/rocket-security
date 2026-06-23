# cPanel Deployment

This project is configured for a static cPanel deployment.

## Build

```bash
npm install
npm run build:cpanel
```

The deployable site is generated in:

```text
out/
```

## Upload To cPanel

1. Open cPanel File Manager.
2. Go to `public_html`.
3. Upload the contents of the `out/` folder, not the folder itself.
4. Make sure hidden files are included, especially `.htaccess`.
5. Visit your domain. The root URL redirects to `/fr/`.

## Notes

- This is a static export, so no Node.js process is required on cPanel.
- Enable cPanel AutoSSL for the domain before launch; `.htaccess` redirects all requests to HTTPS.
- Contact and recruitment forms submit through `api/submit.php`, which uses cPanel/PHP mail delivery to `contact@rocketsecurity.net`.
- Before launch, confirm that the `contact@rocketsecurity.net` mailbox exists and submit one contact message and one PDF application from the live site.
- If your cPanel account disables PHP `mail()`, configure mail delivery with your host before accepting live submissions.
- The English site is available at `/en/`; French is available at `/fr/`.
- If you replace images later, rebuild before uploading again.
- The `_redirects` file is used by Netlify previews and is harmless on cPanel; `.htaccess` controls cPanel redirects.

## Launch Checklist

1. Confirm AutoSSL is active for the domain or subdomain.
2. Upload the contents of `out/` and keep `.htaccess`.
3. Open `/fr/` and `/en/` and test navigation.
4. Submit the contact form and confirm receipt of the email.
5. Submit a recruitment form with a PDF and confirm the attachment arrives.
