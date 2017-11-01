function sendEmails(begin) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = begin;  // First row of data to process
  var numRows = 50;   // Number of rows to process
  // Fetch the range of cells
  var dataRange = sheet.getRange(startRow, 1, numRows, 15)
  var data = dataRange.getValues();
  var date1 = new Date();
  for (var i = 0; i < data.length; ++i) {
    var row = data[i];
    var emailAddress = row[2];  // First column
    var emailSent = row[4];     
    var message = row[emailSent];
    var responded = row[3]; 
    //check if the current date is atleast 21 days from last email date before sending email
    var date2 = row[5];
    
    if (date2 != ""){
      var timeDiff = Math.abs(date2.getTime() - date1.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    }
    
    if ((responded != "yes") && ((diffDays > 21) || (date2 == ""))) { 
      
      var name = row[0];
      
      //determine receiver name based on availability of data in first name cell
      if(name == ""){
        name = "Customer"; 
      }
      var subject = "Radius Networks Proximity Solutions";
      MailApp.sendEmail({name:"AJ Jaiyeola",to: ""+emailAddress+"", subject: ""+subject+"", 
                         
                         htmlBody:"Dear " + name + "," + "<br><br>" + message + "<br><br>" + "AJ Jaiyeola"+"<br>" + "Director, E-Commerce" + 
                         "<br>" + "<a href='www.radiusnetworks.com'>www.radiusnetworks.com</a>"
                        });
      
      sheet.getRange(startRow + i, 5).setValue(emailSent + 1);
      sheet.getRange(startRow + i, 6).setValue(date1);
      sheet.getRange(startRow + i, 4).setValue("no");
      // Make sure the cell is updated right away in case the script is interrupted
      SpreadsheetApp.flush();
    }
  }
}
sendEmails(2);