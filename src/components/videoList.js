angular.module('video-player')
.component('videoList', {
  controller: function() {
    this.onClick = function(index) { 
      // return function() {
      //   alert('clicked');
      // };
      console.log('clickeddd', index, this);
    };
  },
  bindings: {
    videos: '<',
    video: '<',
    index: '='
  },
  templateUrl: 'src/templates/videoList.html',
  
});
