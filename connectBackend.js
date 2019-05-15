var btn = document.getElementById("myBtn");
var closeLoading = document.getElementsByClassName("close")[0];
var closeSuccess = document.getElementsByClassName("close2")[0];
var user_error = document.getElementById('user_error');
var password_error = document.getElementById('password_error');

function getBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return "OPERA";
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        return "CHROME";
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        return "SAFARI";
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return "FIREFOX";
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        return "IE";
    } else {
        return "unknown";
    }
}
console.log(getBrowser());

function sipRegister() {

    /* Button */
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    /* Animation */
    var ModalLoading = document.getElementById('ModalLoading');
    var ModalSuccess = document.getElementById('ModalSuccess');

    console.log(username+  ':' + password);

    if(username=="" ){
        console.log('123user');
        user_error.style.display = 'block';
        user_error.textContent = "ชื่อผู้ใช้ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง";
    }

    if( password==""){
        console.log('123user');
        password_error.style.display = 'block';
        password_error.textContent = "รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง";
    }
    
    if(username!="" && password!=""){

    var socket = new PhoneJs.WebSocketInterface('ws://entro-lab.com:10080');

    socket.onconnect = function() {
        console.log('wss connect');
    };

    var configuration = {
        sockets: [socket],
        uri: 'sip:'+username+'@entro-lab.com:5060',
        password: password,
        display_name: 'HumMean',
        authorization_user: password,
        // user_agent: 'TanTest',
        register: false, // dont't automatic register
        trace_sip: true
    };

    var ua = new PhoneJs.UA(configuration);
    ua.start();


    ua.on('connecting', function() {
        console.log('UA "connecting" event');
    });

    ua.on('connected', function() {
        console.log('UA "connected" event');
        console.log(username);
        console.log(password);
        ModalLoading.style.display = "block";
        endAndStartTimer();
        ua.register();
    });

    ua.on('registered', function() {
        console.log('UA "registered" event');
        // txtRegStatus.innerHTML = '<i>Registered</i>';
        console.log(e);
        console.log(e.response.call_id);
        console.log(e.response.status_code);
        if ("200" == e.response.status_code) {
            // window.alert(e.response.status_code + " OK");
            // console.log('sip:'+username+'@entro-lab.com:5060')
            ModalLoading.style.display = "none";
            ModalSuccess.style.display = "block";
            // return false;
           
        //    var siteStatus ='http://127.0.0.1:5502/customerStatus.html?'+username+'?'+getBrowser();

        // setTimeout("location.href = "+ "'" + siteStatus + "'" +";",3000);
        }


    });

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

var timer;
function endAndStartTimer() {
  window.clearTimeout(timer);
  timer = window.setTimeout(function(){ModalLoading.style.display = "none",
  alert('ลงทะเบียนไม่สำเร็จ กรุณาตรวจสอบชื่อผู้ใช้และรหัสผ่านอีกครั้ง')},3000); 
}