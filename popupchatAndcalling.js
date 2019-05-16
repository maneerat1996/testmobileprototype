var buttonCall = document.getElementById("buttonCall");

/* Animation */
var PopUpCalling = document.getElementById('PopUpCalling');

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function calling(){
  PopUpCalling.style.display = "block";
  console.log('test calling');
}

function VDOcall(){
  alert('VDOcall');
  console.log('VDOcall');
}

function EndCall(){
  alert('EndCall');
  console.log('EndCall');
}

window.onclick = function(event) {
  if (event.target == PopUpCalling) {
    PopUpCalling.style.display = "none";
  console.log('outside popup');
  }
}