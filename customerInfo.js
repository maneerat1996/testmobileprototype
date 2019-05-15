console.log("test1-->customerInfo");

//box show detail
var FirstNameCustomer = document.getElementById('NameCustomer');
var LastNameCustomer = document.getElementById('LastNameCustomer');
var EmailAddress = document.getElementById('EmailAddress');
var Address = document.getElementById('Address');
var NetworkCustomer = document.getElementById('NetworkCustomer');
var BrowserCustomer = document.getElementById('BrowserCustomer');
var selectPicture = document.getElementById('selectPicture');

//botton
var bottonPicture = document.getElementById('bottonPicture');
var bottonSave = document.getElementById('bottonSave');
var bottonAprove = document.getElementById('bottonAprove');
var bottonChat = document.getElementById('bottonChat');
var bottonVDOcall = document.getElementById('bottonVDOcall');


document.getElementById("NameCustomer").placeholder = 'Firstname';
var txt = document.getElementById("NameCustomer").placeholder
document.getElementById("NameCustomer").innerHTML = txt;


document.getElementById("LastNameCustomer").placeholder = 'LastNameCustomer';
var txt = document.getElementById("LastNameCustomer").placeholder
document.getElementById("LastNameCustomer").innerHTML = txt;

document.getElementById("EmailAddress").placeholder = '1234@ais.co.th';
var txt = document.getElementById("EmailAddress").placeholder
document.getElementById("EmailAddress").innerHTML = txt;

document.getElementById("Address").placeholder = 'Address';
var txt = document.getElementById("Address").placeholder
document.getElementById("Address").innerHTML = txt;

document.getElementById("NetworkCustomer").placeholder = '1,000 Mbps';
var txt = document.getElementById("NetworkCustomer").placeholder
document.getElementById("NetworkCustomer").innerHTML = txt;

document.getElementById("BrowserCustomer").placeholder = 'Firefox';
var txt = document.getElementById("BrowserCustomer").placeholder
document.getElementById("BrowserCustomer").innerHTML = txt;

document.getElementById("selectPicture").placeholder = 'picture.png';
var txt = document.getElementById("selectPicture").placeholder
document.getElementById("selectPicture").innerHTML = txt;