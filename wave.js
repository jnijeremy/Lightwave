Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

function startTime() {
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var currentTime = days[today.getDay()]+', '+months[today.getMonth()]+' '+today.getDate()+' '+today.getFullYear() + ', ' + h + ":" + m + ":" + s;
    document.getElementById('current-time').innerHTML = currentTime;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var weekNumber = (new Date()).getWeek();
var wave = Math.round(weekNumber/2);
var week = weekNumber % 2 ? 1 : 2;
document.getElementById('current-wave').innerHTML = 'Wave ' + wave;
document.getElementById('current-week').innerHTML = 'Week ' + week;
startTime();

var today = new Date();
var stringFreeze = week === 1 ? 11 - today.getDay() : 4 - today.getDay();
var devClose = stringFreeze + 1;
var askMode = stringFreeze + 4;
document.getElementById('string-freeze').innerHTML = 'stringFreeze ' + stringFreeze;
document.getElementById('dev-close').innerHTML = 'devClose ' + devClose;
document.getElementById('ask-mode').innerHTML = 'askMode ' + askMode;

var backlogItem;