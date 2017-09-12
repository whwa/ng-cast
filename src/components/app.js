angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = exampleVideoData;
    this.index = 0;
    this.video = exampleVideoData[this.index];
    // console.log(this)
    this.selectVideo = function() {
      //changes selected video by changing index
    };
  },
  // bindings: {
  //   videos: '<'
  // },
  templateUrl: '/src/templates/app.html'
});
