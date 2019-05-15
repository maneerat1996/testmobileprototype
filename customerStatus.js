console.log("test1-->customerStatus");

var image = document.getElementById('img');
var Name = document.getElementById('NameCustomer');
var boxOnline = document.getElementById('boxOnline');
var boxWating = document.getElementById('boxWating');
var bottonAnswer = document.getElementById('bottonAnswer');
var User = document.getElementById('textUser');
var Browser = document.getElementById('textBrowser');


function LinkCustomerVer1() {
    window.location.href = 'http://127.0.0.1:5502/customerInfo.html';
}

function LinkCustomerVer2() {
    window.location.href = 'http://127.0.0.1:5502/customerInfoV2.html';
}


// Get USER and BROWSER from URI
var URIcustomerStatus = window.location.href;
console.log('test' + URIcustomerStatus);

URIcustomerStatusSpilt = URIcustomerStatus.split('?');
console.log(URIcustomerStatusSpilt[0] + ' ///// ' + URIcustomerStatusSpilt[1] + '/////' + URIcustomerStatusSpilt[2]);

document.getElementById("textUser").placeholder = URIcustomerStatusSpilt[1];
var txt = document.getElementById("textUser").placeholder
document.getElementById("textUser").innerHTML = txt;

console.log('USER : ' + txt);

document.getElementById("textBrowser").placeholder = URIcustomerStatusSpilt[2];
var txt = document.getElementById("textBrowser").placeholder
document.getElementById("textBrowser").innerHTML = txt;

console.log('Browser : ' + txt);


//get Speed Network