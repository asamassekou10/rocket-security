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

## Git Deployment From cPanel

The repository includes `.cpanel.yml` for cPanel Git Version Control deployments.

Current cPanel paths:

```text
Repository: /home/r6zrkkmzadg5/rocket-security
Deploy path: /home/r6zrkkmzadg5/public_html
```

The cPanel **Deploy HEAD Commit** button runs:

```bash
npm install
npm run build:cpanel
cp -R out/. /home/r6zrkkmzadg5/public_html/
```

After future changes:

1. Commit and push to GitHub.
2. Open cPanel → Git Version Control → `rocket-security`.
3. Click **Update from Remote**.
4. Click **Deploy HEAD Commit**.
5. Test `/fr/`, `/en/`, and the forms.

If deployment fails with `npm: command not found`, this cPanel account does not expose Node/npm to Git deployment tasks. In that case, build locally and upload the refreshed `release/rocket-security-cpanel-production.zip`, or use a static deploy branch that commits the generated `out/` files.
