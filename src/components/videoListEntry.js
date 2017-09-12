angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    videos: '<',
    video: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
});


// this needs to take in a sinngle video from videoList