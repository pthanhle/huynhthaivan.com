const ALERT_EMAIL = 'huynhthaivan0901@gmail.com';
const SHEET_NAME = 'Leads_HuynhThaiVan_2026';

function initSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  const headers = [
    'Mã Lead (ID)',
    'Thời Gian (ISO)',
    'Họ & Tên',
    'Tổ Chức / Công Ty',
    'Email Liên Hệ',
    'Số Điện Thoại',
    'Mục Đích Hợp Tác',
    'Nội Dung Lời Nhắn',
    'Ngôn Ngữ',
    'Nguồn Trang',
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setBackground('#4D0F13')
    .setFontColor('#EDEBE8')
    .setFontWeight('bold');
  sheet.setFrozenRows(1);
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      initSheet();
      sheet = ss.getSheetByName(SHEET_NAME);
    }

    sheet.appendRow([
      body.id || '',
      body.createdAtIso || new Date().toISOString(),
      body.fullName || '',
      body.organization || '',
      body.email || '',
      body.phone || '',
      body.inquiryType || '',
      body.message || '',
      body.locale || 'vi',
      body.sourceUrl || 'https://huynhthaivan.com',
    ]);

    if (ALERT_EMAIL) {
      MailApp.sendEmail({
        to: ALERT_EMAIL,
        subject: '[huynhthaivan.com] Liên hệ mới từ ' + (body.fullName || 'Đối tác') + ' (' + (body.organization || 'HR/Partner') + ')',
        htmlBody:
          '<div style="font-family:sans-serif;max-width:600px;border:1px solid #4D0F13;border-radius:12px;overflow:hidden;">' +
          '<div style="background:#4D0F13;color:#EDEBE8;padding:16px 24px;">' +
          '<h2 style="margin:0;font-size:18px;">Liên Hệ Mới Từ Portfolio huynhthaivan.com</h2>' +
          '</div>' +
          '<div style="padding:20px 24px;background:#EDEBE8;color:#1A090B;line-height:1.6;">' +
          '<p><b>Họ và tên:</b> ' + (body.fullName || '') + '</p>' +
          '<p><b>Công ty / Tổ chức:</b> ' + (body.organization || '') + '</p>' +
          '<p><b>Email:</b> <a href="mailto:' + (body.email || '') + '">' + (body.email || '') + '</a></p>' +
          '<p><b>Số điện thoại:</b> <a href="tel:' + (body.phone || '') + '">' + (body.phone || '') + '</a></p>' +
          '<p><b>Hạng mục:</b> ' + (body.inquiryType || '') + '</p>' +
          '<p><b>Nội dung:</b><br/>' + (body.message || '') + '</p>' +
          '</div></div>',
      });
    }

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
