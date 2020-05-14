<h1>Outreach Automation Tool & Inbox Scanner</h1>


<h3>Problem 1 </h3>

With no email automation budget at the time, I was manually sending hundreds of emails weekly. This cost the company plenty of money in manual labor.


<h3>Solution:</h3>
I took three steps to fix the problem:

<ul>
  <li>Created email templates.</li>
  <li>Created an automation using Zapier to add new leads to a google sheet.</li>
  <li>Created a google script to automatically kick off the correct email template to email addresses in the google sheet that have not gotten an email in the last 3 weeks. The script can be found <a href="https://github.com/ajjaiyeola/Lead-Outreach-Automator/blob/Master/automator.gs">here</a>
</li>
</ul>


<h3>Problem 2</h3>

Having built a tool to automate my emails, I needed a way to automatically update the google sheet when a prospect responds to my email.

<h3>Solution:</h3>

I created a script that scanned my inbox and checks to see if any of the prospects I have previously emailed haved responded.

I built this solution in collaboration with a stranger on <a href="https://stackoverflow.com/questions/47167981/google-script-to-scan-gmail-inbox-and-write-to-spreadsheet-too-slow"> Stack Overflow</a>, who helped me to improve the speed of my script.

You can find the script <a href= "https://github.com/ajjaiyeola/Lead-Outreach-Automator/blob/Master/inboxscanner.gs"> here.</a>

