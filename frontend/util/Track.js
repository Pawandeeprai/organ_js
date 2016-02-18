var TONES = require('../constants/Tones');
var Note = require('./Note');

var Track = function(attr){
  this.name = attr.name;
  this.roll = attr.roll;
  this.currentNotes = [];
};

Track.prototype.startRecording  = function () {
  this.roll = [];
  this.startTime = new Date();
};

Track.prototype.addNotes = function (notes) {
  var notesObj = {
    notes: notes,
    timeSlice: new Date() - this.startTime
  };

  this.roll.push(notesObj);
};

Track.prototype.stopRecording = function() {
  this.addNotes([]);
};


Track.prototype.play = function () {
  var that = this;
  var playbackStartTime = new Date();
  var playbackCallback = function(){
    var currentTime = new Date();
    var elapsedTime = currentTime - playbackStartTime;
    var roll = that.roll.slice();
    if (roll[0].timeSlice <= elapsedTime){
      that.currentNotes.forEach(function(note) {
        note.stop();
      });

      that.currentNotes = roll[0].notes.map(function(note) {
        return new Note(TONES[note]);
      });

      that.currentNotes.forEach(function(note) {
        note.start();

      });
      that.roll.shift();
    }
    if (roll.length === 0) {
      clearInterval(that.interval);
    }

  };
  this.interval = setInterval(playbackCallback, 10);
};

module.exports = Track;
