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
