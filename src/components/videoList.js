angular.module('video-player')
.component('videoList', {
  controller: function() {
    this.onClick = (index) => { 
      this.action(index);
    };
  },
  bindings: {
    videos: '<',
    video: '<',
    index: '<',
    action: '<'
  },
  templateUrl: 'src/templates/videoList.html',
  
});
