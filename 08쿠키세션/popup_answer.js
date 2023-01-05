
var mainPopup = "mainPopup";
var subPopup = "subPopup"; //다양한 매개변수 사용가능

function createCookie() { //쿠키생성

   var date = new Date();
   date.setDate( date.getDate() + 1); //날짜가 하루 늘어남
   date.setHours(0);
   date.setMinutes(0);
   date.setSeconds(0);

   var cookie = "";
   cookie += mainPopup + "=true;";
   cookie += " path=/;";
   cookie += " expires=" + date.toUTCString();

   document.cookie = cookie;
}


function getCookie(x) { //쿠키 찾기(얻어오기) 쿠키값이 여러개 일 수 있으니까 배열로 확인

   var arr = document.cookie.split("; ");

   for(var i = 0; i < arr.length; i++) {
      if(arr[i].indexOf(x) != -1) {
         return true;
      }
   }
}