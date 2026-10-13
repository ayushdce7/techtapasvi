/**
 * TechTapasvi — lead storage (Google Sheet, downloadable as Excel .xlsx)
 *
 * SETUP (about 3 minutes)
 * 1. Go to https://sheets.google.com and create a blank sheet named "TechTapasvi Leads".
 * 2. In that sheet: Extensions > Apps Script. Delete any code and paste this whole file. Save.
 * 3. Click Deploy > New deployment > type "Web app".
 *      - Execute as:      Me
 *      - Who has access:  Anyone
 *    Click Deploy and authorise when asked.
 * 4. Copy the Web app URL (ends with /exec).
 * 5. In index.html, replace PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE with that URL.
 * 6. To get Excel: in the sheet, File > Download > Microsoft Excel (.xlsx).
 *
 * If you edit this script later, use Deploy > Manage deployments > Edit > New version.
 */

var SHEET_NAME   = 'Leads';
var NOTIFY_EMAIL = 'techtapasvi@gmail.com'; // new-lead email alert; set to '' to turn off

var HEADERS = [
  'Timestamp (IST)', 'Form', 'Name', 'Email', 'Phone',
  'Engagement Type', 'Budget Range', 'Message',
  'Page URL', 'Referrer', 'User Agent'
];

// Stops text like =SUM(...) from being run as a formula in the sheet
function safe(v) {
  v = (v === undefined || v === null) ? '' : String(v);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var p  = (e && e.parameter) ? e.parameter : {};
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
      sh.setFrozenRows(1);
      sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#f6f3ec');
      sh.getRange('E:E').setNumberFormat('@'); // keep phone numbers as text
    }

    var ts = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss');
    sh.appendRow([
      ts,
      safe(p.form),
      safe(p.name),
      safe(p.email),
      safe(p.phone),
      safe(p.engagement),
      safe(p.budget),
      safe(p.message),
      safe(p.page_url),
      safe(p.referrer),
      safe(p.user_agent)
    ]);

    if (NOTIFY_EMAIL) {
      try {
        MailApp.sendEmail(
          NOTIFY_EMAIL,
          'New lead: ' + (p.name || 'Unknown') + ' (' + (p.form || 'Form') + ')',
          'Name: '    + (p.name || '')       + '\n' +
          'Email: '   + (p.email || '')      + '\n' +
          'Phone: '   + (p.phone || '')      + '\n' +
          'Type: '    + (p.engagement || '') + '\n' +
          'Budget: '  + (p.budget || '')     + '\n' +
          'Message: ' + (p.message || '')    + '\n' +
          'Form: '    + (p.form || '')       + '\n' +
          'Time: '    + ts
        );
      } catch (mailErr) { /* a mail failure must never block saving the lead */ }
    }

    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Open the /exec URL in a browser to confirm the deployment is live
function doGet() {
  return ContentService.createTextOutput('TechTapasvi lead endpoint is live.');
}
