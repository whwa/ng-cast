angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = exampleVideoData;
    this.index = 0;
    this.video = exampleVideoData[this.index];
    this.selectVideo = (index) => {
      this.index = index;
      this.video = exampleVideoData[this.index];
    };
  },
  templateUrl: '/src/templates/app.html'
});
