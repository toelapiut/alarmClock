(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function AlarmSet(hour, minute, second, meridiem) {
  this.hour = hour;
  this.min = minute;
  this.sec = second;
  this.md = meridiem;

}

AlarmSet.prototype.alarmFormat = function() {
  return (this.hour + ":" + this.min + ":" + this.sec + " " + this.md);
};


exports.alarmModule = AlarmSet;

},{}],2:[function(require,module,exports){
var AlarmSet = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  var inputtedAlarm = [];
  var str;

  var displayTime = function() {
    var currentTime = moment().format('h:mm:ss a');
    var timeStr = $('#time').text(currentTime.toString());

    $('form#blank').submit(function(event) {
      event.preventDefault();

      alarms = [];
      var hour = ($('input#hour').val()).toString();
      var min = ($('input#min').val()).toString();
      var sec = ($('input#sec').val()).toString();
      var ampm = ($('select#meridiem').val()).toString();

      var alarm = new AlarmSet(hour, min, sec, ampm);
      inputtedAlarm.push(alarm);

    });


    if ((inputtedAlarm[0].alarmFormat()) == currentTime) {


      $("div#audio").append(`
        <audio loop autoplay>
        <source src="alarm2.mp3" type="audio/mpeg">

        Your browser does not support the audio tag.
        </audio>
        `);
    }

  };
  setInterval(displayTime, 1000);



  $("button#stop").click(function() {
    $("div#audio").text("");
  });

});

},{"./../js/alarm.js":1}]},{},[2]);
