!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";function o(){var e=document.getElementById("addToCalendarDropdown");e.parentElement.removeChild(e)}var r=n(314),i=document.getElementsByClassName("cal_option");document.addEventListener("touchstart",function(){document.getElementById("calendarOptions").className=""},null);for(var u=0;u<i.length;u++)i[u].addEventListener("focus",function(){document.getElementById("calendarOptions").className="show-menu"},null),i[u].addEventListener("blur",function(){document.getElementById("calendarOptions").className=""},null);r().setTimeoutEvent(o),document.getElementById("print-page").addEventListener("click",function(){window.print()},null),document.getElementById("print-page").style.display="inline"},314:function(e,t){"use strict";var n=1799e3,o=1679e3;e.exports=function(){return{setTimeoutEvent:function(e){return setTimeout(e,n)},setNotificationBeforeExpiry:function(e){setTimeout(e,o)}}}}});
//# sourceMappingURL=confirmation.js.map