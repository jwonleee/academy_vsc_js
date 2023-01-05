

var check = document.getElementById("check");

check.onclick = function(e) {

   var date = new Date();
   date.setHours ( date.getHours + 24 ); //지금 시간으로부터 24시간

   document.cookie = "popupCookie=done; expires=" + date.toUTCString();

}