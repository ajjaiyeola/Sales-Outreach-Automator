function getMail(){
  var senders = [],
      threads = GmailApp.getInboxThreads(0,300),
      target = "Radius Networks";

  for (var i = 0; i < threads.length; ++i) {
    var messages = threads[i].getMessages();
    for(var j = 0; j < messages.length; j++) {
      var currentMessage = messages[j],
          subject = currentMessage.getSubject(),
          sender = currentMessage.getFrom().replace(/^.+<([^>]+)>$/, "$1");
      if(subject.indexOf(target) !== -1) senders[sender] = true;
    }
  }

  var sheet = SpreadsheetApp.getActiveSheet(),
      startRow = 2,
      numRows = 7110,
      dataRange = sheet.getRange(startRow, 1, numRows, 10),
      data = dataRange.getValues();

  for (var b = 0; b < data.length; ++b) {
    var row = data[b],
        leadEmail = row[4];

    if(senders[leadEmail]) {
      sheet.getRange(startRow + b, 6).setValue("yes");
    } 
  }
}
    
