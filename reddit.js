var app = angular.module("Reddit", []);


app.controller("RedditController", function($scope){
     $scope.posts = [];
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
