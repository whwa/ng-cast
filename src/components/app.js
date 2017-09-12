angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = exampleVideoData;
    this.video = exampleVideoData[0];
    // console.log(this)
  },
  // bindings: {
  //   videos: '<'
  // },
  templateUrl: '/src/templates/app.html'
});
