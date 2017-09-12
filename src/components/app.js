angular.module('video-player')

.component('app', {
  controller: function($scope, youTube) {
    this.videos = exampleVideoData;
    this.index = 0;
    this.video = this.videos[this.index];
    this.selectVideo = (index) => {
      this.index = index;
      this.video = this.videos[this.index];
    };
    youTube.search((data) => {
      this.videos = data;
      this.video = this.videos[0];
    });
  },
  templateUrl: '/src/templates/app.html'
});
