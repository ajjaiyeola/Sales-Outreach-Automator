# Lead-Outreach-Automator<br>
Productivity Tools/Script <br>
I wrote this tool because I had been spending 2 hours daily combing through leads to figure out who I need to reach out to.
I intend to eventually build a fully automated system that is smart enough to understand which of my leads need to get a note and then automatically kick of the email.
As a MVP however, I have built a lite weight tool that basically looks at the two details below and then kicks off an email depending on their values:
1.) Whether the recipient has responded to any of my previous emails<br>
2.) Whether my previous email was sent less than 3 weeks ago
This if-statement guides that logic : ``` if ((responded != "yes") && ((diffDays > 21) || (date2 == "")))```

In order for this tool to work at all, you need to:<br>
1.) Create a google spreadsheet with these columns in this order : First Name,	Last Name,	Email Address,	Responded?,	Email_Sent,	Last Email Date,	Email 1,	Email 2,	Email 3
Responded: Yes or No
Email_Sent: 6 is the default value. As each person receives an email, the value is automatically incremented by 1, so that the next time the script is run and the email address
is among the set to be reached out to, the email message sent is the second email content, as opposed to the first. This way you don't sent duplicate messages to the same person.
Last Email Date: As soon as an email is kicked out, the current date is inputed into the row, so that you have a sense for the last time an email was sent to the lead
Email 1,2,3: Email Content. The first time a lead gets an email, he gets email 1. The next time, he gets email 2. Etc.<br>

2.)Click "tools", and select "script editor"<br>

3.) Copy and paste the code into the script editor<br>

4.) Update/configure the code as necessary to match your purposes<br>

Note: The way I have setup this system on my machine, the "Responded" field is automatically updated whenever a lead replies to one of my emails.
I utilized Zapier and Pipedrive to make this happen. Since every lead that comes through our sources is automatically imported into a tool called
"PipeDrive" that I currently use, I have instituted a process of manually creating an "Email Activity" whenever a lead emails me back.
This activity in turn causes Zapier to scroll through the spreadsheet I run this script from to check for the email address that responded, and then
changed the "responded?" value to "Yes". As you can see in the code, if responded = "yes", the email does not send.


Configuration Details<br>
The ```sendEmails(begin)```function runs the code. The "begin" parameter simply tells the code which row of your spreadsheet you want it to start at.
By default, begin is set to 2. You can however update the value as you wish. E.g, if you change sendEmails(2) to sendEmails(5), the first 4 rows would be ignored
and the code would start running from row 5.<br>

By default, the script is configured to process 50 rows of data each time it is run. Please note that you can update this value as you wish.
Simply change the integer value of the "numRows" variable from 50 to whatever suits you (might be a good idea to review googles rules before going too crazy).<br>

Configurable Values:<br>
Beginning Row<br>
Number of Rows to Process<br>
Subject<br>
Signature/Email Content<br>

