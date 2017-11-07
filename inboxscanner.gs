
function getMail(){
  var thread = GmailApp.getInboxThreads(0,100);
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;  
  var numRows = 300;   // Number of rows to process
  var dataRange = sheet.getRange(startRow, 1, numRows, 10); // 
  var data = dataRange.getValues();  
  var target = "Radius Networks"
  for (var b = 0; b < data.length; ++b){
     var row = data[b];
     var leadEmail = row[4];
     for (var i = 0; i < thread.length; ++i){  
       var message = thread[i].getMessages();
       for(var c = 0; c < message.length; ++c){
         var currentMessage = message[c];
         var subject = currentMessage.getSubject();
         if(subject.indexOf(target) !== -1) {        
           var sender = currentMessage.getFrom().replace(/^.+<([^>]+)>$/, "$1");
           if(sender == leadEmail){
             sheet.getRange(startRow + b, 7).setValue("yes");
             SpreadsheetApp.flush();
             break;
             
           } 
        }
        
      }
    
    }
    }
  }

   
