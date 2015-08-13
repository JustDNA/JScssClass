<%
Dim strXML

Set objConn = Server.CreateObject("ADODB.Connection")
Set objCmd = Server.CreateObject("ADODB.Command")
Set objRS = Server.CreateObject ("ADODB.Recordset")

objConn.Open  "Ajax"

objCmd.ActiveConnection = objConn
objCmd.Commandtext = "Select * from CustomerInfo where CustomerID = '" & Request.QueryString("custid") & "'"
objRs.Open objcmd,,2,2
strXML = "<CustomerInfo>"
strXML = strXML + "<CustomerName>"  + objRS(1).Value + "</CustomerName>"
strXML = strXML + "<CustomerAddress>"  + objRS(2).Value + "</CustomerAddress>"
strXML = strXML + "<CustomerPhone>"  + objRS(3).Value + "</CustomerPhone>"

strXML = strXML + "</CustomerInfo>"
objRS.Close
objconn.Close

Set objRS = Nothing
Set objConn = Nothing
Response.ContentType = "text/xml"
Response.Write(strXML)
'Response.End 
%>