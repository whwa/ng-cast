angular.module('video-player')
.service('youTube', function(cb) {
  $http({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    params: {
      q: 'tiny animals eating',
      maxResults: 5,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',
      key: YOUTUBE_API_KEY
    }
    
    
  }).then(function successCallback(response) {
    console.log('success', response);
    //call cb
  }, function error(response) {
    console.log('fail');
  });
});