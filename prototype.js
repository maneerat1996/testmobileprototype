var ModalLoading = document.getElementById('ModalLoading');
var ModalSuccess = document.getElementById('ModalSuccess');
var btn = document.getElementById("myBtn");
var closeLoading = document.getElementsByClassName("close")[0];
var closeSuccess = document.getElementsByClassName("close2")[0];

btn.onclick = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

 if(password==""){
    alert('กรุณกรอกข้อมูลให้ครบ');
 }else{
    if(username=="01"){
        ModalLoading.style.display = "block";
        console.log('loading ..');
        return false;
    }else{
        ModalSuccess.style.display = "block";
        console.log("[Username:"+ username + "] [Password:" + password +"]");
        return false;
      }
    }
}

closeLoading.onclick = function() {
  ModalLoading.style.display = "none";
  console.log('close pop-up page loading');
}

window.onclick = function(event) {
    if (event.target == ModalLoading) {
    ModalLoading.style.display = "none";
    console.log('outside load');
    }
}

closeSuccess.onclick = function() {
  ModalSuccess.style.display = "none";
  console.log('close pop-up page success');
}
  
window.onclick = function(event) {
    if (event.target == ModalSuccess) {
    ModalSuccess.style.display = "none";
    console.log('outside success');
    }
}

btn.addEventListener('click', function(e) {
  e.preventDefault();
  var icons = [
    document.querySelector('.svg-icon-success')
  ];
  
  icons.forEach(function(el) {
    el.classList.remove('is-animated');
  setTimeout(function() {
    el.classList.add('is-animated');    
  }, 5);
  });
});