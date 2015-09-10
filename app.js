var app = angular.module("myApp", []);
app.controller("MyFirstController", function($scope){
  // $scope.name = "Severus Snape";
  $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
});


app.controller("ExercisesController", function($scope){
  $scope.FavColor = "Red";
  $scope.rightNow = new Date();
});
