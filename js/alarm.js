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
