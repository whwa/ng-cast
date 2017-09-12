angular.module('video-player')
.component('videoList', {
  controller: function() {
    this.onClick = function() { 
      return function() {
        alert('clicked');
      };
    };
  },
  bindings: {
    videos: '<',
    video: '<',
  },
  templateUrl: 'src/templates/videoList.html',
  
});
