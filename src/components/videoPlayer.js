angular.module('video-player')
.component('videoPlayer', {
  bindings: {
    video: '<',
    index: '='
  },
  templateUrl: 'src/templates/videoPlayer.html',
});
