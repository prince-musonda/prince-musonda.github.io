# prince-musonda.github.io

## Visitor email notifications

The browser script is installed but inactive until you configure an endpoint.
No email passwords or API keys belong in this repository.

1. Sign into Google at https://script.google.com and create a new project.
2. Replace the contents of `Code.gs` with `scripts/visitor-email.gs` and save.
3. Choose **Deploy → New deployment → Web app**. Set **Execute as** to
   **Me** and **Who has access** to **Anyone** so visitors need not sign in.
4. Deploy and authorize the script to send email from your account. Copy the
   deployed URL ending in `/exec`.
5. Paste that URL between the quotes for `endpoint` in
   `scripts/visit-notification.js`, then commit and push the website changes.
6. Open the published site in a new private browser session and check
   `princemusonda2024@gmail.com` (including Spam). Apps Script's **Executions**
   panel shows server errors. Local previews intentionally do not send alerts.

The script sends at most one notification per browser tab session when browser
storage is available. It reports only the page URL without query parameters or
fragments and the server time; it cannot identify the visitor. Browser blocking,
network failures, or email quotas can prevent notifications. The browser cannot
confirm delivery because the cross-origin response is opaque.

The public endpoint can receive fake visits; its URL is not a secret. The sender
caps emails at 90 per UTC day to bound abuse, and also checks Google's remaining
mail quota. Visits beyond that cap are skipped. To stop alerts, remove the web
app deployment. After changing the server code, update its deployment version.

Google documentation: https://developers.google.com/apps-script/guides/web
and https://developers.google.com/apps-script/guides/services/quotas
