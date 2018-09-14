/*
var Clock = document.querySelector(".dial");
var ClockWidth = Clock.clientWidth;
var ClockHeight = Clock.clientHeight;


var sClock = Snap("#Clock");

var dialRadius = 0;

if (ClockWidth < ClockHeight) {
    dialRadius = ClockWidth/2;
} else {
    dialRadius = ClockHeight/2
};

secondsX = (ClockWidth/2);
secondsY = (ClockHeight/2);

var dial = sClock.circle((ClockWidth/2), (ClockHeight/2), dialRadius);

dial.attr({
    fill: '#ECFFF8',

});

var secondsHand = sClock.line (secondsX, secondsY, (secondsX+(dialRadius*0.95)), secondsY);

secondsHand.attr({
    strokeWidth: 2,
    stroke: "red",
    strokeLinecap: "round",
});

secondsHand.hover(function(){
    secondsHand.animate({transform: "r30,"+ secondsX + ","+secondsY}, 1000)
})

*/

/*
var Clock = document.getElementById("Clock");
var ClockHeight = Clock.clientHeight;

document.getElementById("Clock").style.width = ClockHeight + "px";
*/

var Clock = document.getElementById('Clock');

var Date = new Date();
var Time = Date.getTime();
var Hours = Date.getHours();

var Minutes = Date.getMinutes();

var Seconds = Date.getSeconds();



var HoursHandAngle = 0.5 * (60 * Hours + Minutes);
var MinutesHandAngle = 6 * Minutes;
var SecondsHandAngle = Seconds;

document.getElementById('SecondsHand').style.transform = "rotate(" + SecondsHandAngle + "deg)";
document.getElementById('MinutesHand').style.transform = "rotate(" + MinutesHandAngle + "deg)";
document.getElementById("HoursHand").style.transform = "rotate("+HoursHandAngle+"deg)";
