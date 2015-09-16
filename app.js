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

app.controller("PingPong", function($scope) {

  $scope.players = [
    {player: "Player 1", score: 0, serving: true, servingCounter: 0, win: undefined},
    {player: "Player 2", score: 0, serving: false, servingCounter: 0, win: undefined}
  ];

  $scope.serveCounter = 0;

  $scope.addScore = function(player) {
    console.log('clicked!', player);
    if (player.score <= 10 && player.win !== false) {
      $scope.serveCounter++;
      player.score++;
      if (player.score === 11) {
        player.win = true;
        if (player.player === "Player 1") {
          $scope.players[1].win = false;
        } else {
          $scope.players[0].win = false;
        }
        console.log('winner!', player.player);
        return;
      }
      console.log('score!', player.score, $scope.serveCounter);
      if ($scope.serveCounter === 2){ // check if it is time to switch servers
        // switch servers
        if (player.player === "Player 1" && player.serving === false) {
          $scope.players[0].serving = true;
          $scope.players[1].serving = false;
        } else {
          $scope.players[0].serving = false;
          $scope.players[1].serving = true;
        }
        $scope.serveCounter = 0;
        console.log('switch server', player[0], player[1]);
      }
    }
  };

  $scope.resetGame = function (){
    $scope.players = [
      {player: "Player 1", score: 0, serving: true, servingCounter: 0, win: undefined},
      {player: "Player 2", score: 0, serving: false, servingCounter: 0, win: undefined}
    ];
  };
});

app.controller("Contacts", function($scope) {
  $scope.contacts = [];

  $scope.addContact = function () {
    $scope.newContact = {
    name: $scope.name1,
    email: $scope.email,
    phone: $scope.phone
  };

    $scope.contacts.push($scope.newContact);
  console.log($scope.contacts);
  console.log('test');
    $scope.name1 = '';
    $scope.email = '';
    $scope.phone = '';

  };
});







