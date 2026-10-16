(() => {
  // Deployed Google Apps Script email sender (see README.md).
  const endpoint = 'https://script.google.com/macros/s/AKfycbwipMsB_AWqIZE34jHhbEm2peuyFyJevDwO2Voxs72Aqt9Uuu9zO1CS1h7RO-AUGp_B2Q/exec';
  if (!endpoint || location.hostname !== 'prince-musonda.github.io') return;

  const key = 'visit-notification-sent';
  try {
    if (sessionStorage.getItem(key)) return;
  } catch (_) {
    // Notifications still work when browser storage is unavailable.
  }

  fetch(endpoint, {
    method: 'POST',
    mode: 'no-cors',
    credentials: 'omit',
    headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
    body: JSON.stringify({ page: location.origin + location.pathname }),
    keepalive: true,
  }).then(() => {
    // An opaque response confirms dispatch, not email delivery.
    try { sessionStorage.setItem(key, '1'); } catch (_) {}
  }).catch(() => {
    // A notification failure must not interrupt the website.
  });
})();
