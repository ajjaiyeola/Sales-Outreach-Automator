  function getMail(){
  var thread = GmailApp.getInboxThreads(0,100);
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 1;  
  var numRows = 15;   // Number of rows to process
  var dataRange = sheet.getRange(startRow, 1, numRows, 10); /
  var data = dataRange.getValues();  
  for (var i = 0; i < thread.length; ++i){  
     var message = thread[i].getMessages();
     var lastOf = message.length - 1;
     var currentMessage = message[lastOf];
     var subject = currentMessage.getSubject();
     var target = "Radius Networks Proximity Solutions"
     if(subject.indexOf(target) !== -1) {
        var sender = currentMessage.getFrom().replace(/^.+<([^>]+)>$/, "$1");
          //if(sender !== "aj@radiusnetworks.com"){        
            for(var b = 0; b < data.length; ++b){
              var row = data[b];
              if(row[4] == sender){
                sheet.getRange(b + 1, 6).setValue("yes");   
            }  
            }       
         // }   
     }
   }
  }  
   
