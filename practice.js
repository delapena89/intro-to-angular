angular.module('myApp', []);

var mainControllerFunction = function ($scope) {
  // controller code
  $scope.greeting = 'Hello, Class!';
  $scope.excitement = 0;
  $scope.excite = function() {
    $scope.excitement++;
    if($scope.excitement>5) {
$scope.greeting = "class is excited!";
     // do something
    }
  };
};

var secondaryControllerFunction = function ($scope) {
  $scope.greet = "Hello, World!";

  var roadhouseMovie = {
    'title': 'Roadhouse',
    'genre': 'Comedy-Drama',
    'lead' : 'Patrick'
  };
  var jurassicMovie = {
    'title': 'Jurassic Park 16',
    'genre': 'Comedy',
    'lead' : 'Yusef'
  };
  var  theNotebook = {
    'title': 'The Notebook',
    'genre': 'Romance',
    'lead' : 'Ryan Gosling'
  };

$scope.movies = [roadhouseMovie, jurassicMovie, theNotebook];

$scope.students = ['Johnny', 'Alex', 'Billy'];
};

angular.module('myApp').controller('mainController', ['$scope', mainControllerFunction]);

angular.module('myApp').controller('secondaryController', ['$scope', secondaryControllerFunction]);
