function sendEmails(begin) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var firstRowtoProcess = begin;
  var numberOfRowstoProcess = 50;
  var dataRange = sheet.getRange(firstRowtoProcess, 1, numberOfRowstoProcess, 15)
  var data = dataRange.getValues();
  var todaysDate = new Date();
  for (var i = 0; i < data.length; ++i) {
    var row = data[i];
    var emailAddress = row[2]; // First column
    var numberOfEmailsSent = row[4];
    var specificMessageToSend = row[numberOfEmailsSent];
    var responseReceived = row[3];
    var dateOfLastEmail = row[5];

    //calculate number of days since the last email was sent to prospect
    if (dateOfLastEmail != "") {
      var timeDiff = Math.abs(dateOfLastEmail.getTime() - todaysDate.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    }

    //Process email if the prospect has not responded to a previous email  and if 21 days have elapsed since the last email
    if ((responseReceived != "yes") && ((diffDays > 21) || (dateOfLastEmail == ""))) {
      var prospectName = row[0];

      //Change first name to "Customer" if prospect did not provide a name
      if (prospectName == "") {
        prospectName = "Customer";
      }

      var subject = "Radius Networks Proximity Solutions";
      MailApp.sendEmail({
        name: "AJ Jaiyeola",
        to: "" + emailAddress + "",
        subject: "" + subject + "",
        htmlBody: "Dear " + prospectName + "," + "<br><br>" + specificMessageToSend + "<br><br>" + "AJ Jaiyeola" + "<br>" + "Director, E-Commerce" +
          "<br>" + "<a href='www.radiusnetworks.com'>www.radiusnetworks.com</a>"
      });
      sheet.getRange(firstRowtoProcess + i, 5).setValue(numberOfEmailsSent + 1);
      sheet.getRange(firstRowtoProcess + i, 6).setValue(todaysDate);
      sheet.getRange(firstRowtoProcess + i, 4).setValue("no");
      SpreadsheetApp.flush();
    }
  }
}
