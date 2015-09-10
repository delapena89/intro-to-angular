var app = angular.module("myApp", []);
app.controller("MyFirstController", function($scope){
  // $scope.name = "Severus Snape";
  $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
});


app.controller("ExercisesController", function($scope){
  $scope.FavColor = "Red";
  $scope.rightNow = new Date();
  $scope.number = 5;
  $scope.pickRandomNumber = function() {
    $scope.number = Math.floor(Math.random() * 10) + 1;
  };
  $scope.reverse = function () {
  $scope.text = $scope.text.split('').reverse().join('');
  };
});


app.controller("CameraShop", function($scope) {
  $scope.cameras = [
  {
    title: "Nikon D3100 DSLR",
    image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
    rating: 3.4,
    price: 369.99,
    onSale: true
  },
  {
    title: "Canon EOS 70D",
    image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
    rating: 2.0,
    price: 1099.0,
    onSale: false
  },
  {
    title: "Nikon D810A",
    image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
    rating: 4.2,
    price: 3796.95,
    onSale: true
  }
];
});
