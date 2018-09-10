

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



//--------------
/*
var seconds = sClock.rect((ClockWidth/2), (ClockHeight/2), (dialRadius-5), (dialRadius*0.02), 5);
seconds.attr({
    fill: 'red'
})
*/
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

/*
var Mat=new Snap.Matrix();
Mat.rotate(30, secondsX, secondsY);
*/
/*
seconds.hover(function(){

    seconds.animate({transform: "r30,"+ secondsX + ","+secondsY}, 1000);
})
*/
/*
var updateTime = function(){
    seconds.animate({transform: "r30,"+ secondsX + ","+secondsY}, 500);

};
setInterval(updateTime(), 1000);
*/



//--------------

//--------------
//var minutes = sClock.rect((ClockWidth/2), (ClockHeight/2), (dialRadius-5), (dialRadius*0.05), 5);

//--------------
//var hours = sClock.rect((ClockWidth/2), (ClockHeight/2), (dialRadius/1.5), (dialRadius*0.07), 5);

//--------------
/*
minutes.hover(function(){
    minutes.animate({ transform: 'r360,150,150' }, 1000, mina.bounce );
});
*/
/*
var updateTime = function() {
    var currentTime, data, hour, minute, second;
    currentTime = new Date();
    second = currentTime.getSeconds();
    minute = currentTime.getMinutes();
    hour = currentTime.getHours();
    hour = (hour > 12)? hour -12 : hour;
    hour = (hour == '00')? 12 : hour;
    hour = hour + minute / 60;
    hours.animate({transform: "r" + hour * 30 + "," + 32 + "," + 32}, 200, mina.elastic);
  minutes.animate({transform: "r" + minute * 6 + "," + 32 + "," + 32}, 200, mina.elastic);
  seconds.animate({transform: "r" + second * 6 + "," + 32 + "," + 32}, 500, mina.elastic);
  }
  
  setInterval(updateTime, 1000)
  */