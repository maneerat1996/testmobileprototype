var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

btn.onclick = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
 if(password==""){
    alert('กรุณกรอกข้อมูลให้ครบ');
 }else{
    if(username=="01"){
        modal.style.display = "block";
        console.log("[Username:"+ username + "] [Password:" + password +"]");
        return false;
    }else{
        modal2.style.display = "block";
        console.log('t1 err');
        return false;
      }
    }
}


span.onclick = function() {
modal.style.display = "none";
// modal2.style.display = "none";
console.log('t2');
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    // modal2.style.display = "none";
    console.log('t3');
    }
}

span2.onclick = function() {
  // modal.style.display = "none";
  modal2.style.display = "none";
  console.log('t2');
  }
  
  window.onclick = function(event) {
      if (event.target == modal2) {
      // modal.style.display = "none";
      modal2.style.display = "none";
      console.log('t3');
      }
  }

btn.addEventListener('click', function(e) {
  e.preventDefault();
  var icons = [
    document.querySelector('.svg-icon-success'),
    document.querySelector('.svg-icon-error')
  ];
  
  icons.forEach(function(el) {
    el.classList.remove('is-animated');
  setTimeout(function() {
    el.classList.add('is-animated');    
  }, 5);
  });
});