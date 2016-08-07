var request = require('request');

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
    var currentDate = days[today.getDay()]+', '+months[today.getMonth()]+' '+today.getDate()+' '+today.getFullYear();
    var currentTime = h + ":" + m + ":" + s;
    document.getElementById('current-date').innerHTML = currentDate;
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
document.getElementById('header-num').innerHTML = '\n' + wave + '-' + week;
startTime();

var x = 0;
var myVar = setInterval(changeScreen, 5000);

var tabs = ['home','string','dev','ask', 'back-log'];

function changeScreen(){
    
    x++;

    x = x%5;

    for(var i = 0; i < 5 ; i++){
        if(i == x){
            if(i == 0){

                options = {
                    url: 'https://lightwave.atlassian.net/rest/api/2/search?jql=project%20%3D%20LIG%20AND%20fixVersion%20%3D%20"Version%202.0"',
                    headers: {
                    'Authorization': 'Basic amVubnkuc29uZzAxOlRlc3QxMjM='
                    }   
                }

                request(options, function (error, response, body) {
                 if (!error && response.statusCode == 200) {
                   document.getElementById('back-log-num').innerHTML = JSON.parse(body).total;
                 }
                })
                   document.getElementById('back-log-num').innerHTML = "Loading...";

            }

            document.getElementById(tabs[x]).style.display = 'block';
            document.getElementById(tabs[x]).className = "animated slideInRight";
        }else{
            document.getElementById(tabs[i]).style.display = 'none';
            document.getElementById(tabs[i]).className = "";
        }
    }
}


    


var today = new Date();
var stringFreeze = week === 1 ? 11 - today.getDay() : 4 - today.getDay();
if (today.getDay() == 0)
    stringFreeze -= 7;
var devClose = stringFreeze + 1;
var askMode = stringFreeze + 4;
document.getElementById('string-freeze').innerHTML = 'in ' + stringFreeze + ' days';
document.getElementById('dev-close').innerHTML = 'in ' + devClose + ' days';
document.getElementById('ask-mode').innerHTML = 'in ' + askMode + ' days';

var backlogItem;



document.getElementById("demo").onclick = function() {
    showGarriet();
};

function showGarriet() {
    console.log("show");
    document.getElementById('demo').style.background = "url('garriet.png')";
    document.getElementById('demo').style.backgroundSize = "cover";
    document.getElementById(tabs[x]).style.display = 'none';
    setTimeout(function() {
        document.getElementById('demo').style.backgroundSize= "0 0";
        document.getElementById('demo').style.backgroundColor= "black";
        document.getElementById(tabs[x]).style.display = 'block';
    }, 2000);
}



