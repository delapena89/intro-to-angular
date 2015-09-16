var app = angular.module("Reddit", []);


app.controller("RedditController", function($scope){
     $scope.posts = [
     {
      'title': "PUPPIES",
       'author': "ME",
       'imageURL': 'http://images.nationalgeographic.com/wpf/media-live/photos/000/347/cache/puppy-fun_34713_990x742.jpg',
       'description': "Puppies having fun!"
     },
     {
      'title': "CARS",
       'author': "YOU",
       'imageURL': "https://thedrivenblog.files.wordpress.com/2012/02/mp4-27_front-3-41.jpg",
       'description': "Cool cars!"
     }
     ];
     $scope.addPosts = function(){
       var payload = {
       'title': $scope.title,
       'author':$scope.author,
       'imageURL': $scope.imageURL,
       'description':$scope.description
     };
       $scope.posts.push(payload);
       $scope.title = '';
       $scope.author = '';
       $scope.imageURL = '';
       $scope.description = '';
       console.log(payload);
     };
});
