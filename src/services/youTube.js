angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(query, cb) {
    
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: query,
        maxResults: 5,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true',
        key: YOUTUBE_API_KEY
      }
      
    }).then(function successCallback(response) {
      cb(response.data.items);
    }, function error(response) {
      console.log('fail', response);
    });
    
  };
});