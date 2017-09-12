angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/Search.html',
  bindings: {
    action: '<'
  }
});
