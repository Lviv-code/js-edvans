const app = angular.module('app', ['ngRoute']);
const socket = io.connect();


//Забираєм %2F та # з url сайту
app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
}]);

//Створюєм адреси
app.config(function ($routeProvider) {
    $routeProvider
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('MyCtrl', function($scope){
   
   $scope.SignLogin = function(){
       let obj = {
           login: $scope.login
       };
       socket.emit('sendLogin', obj);
   };
    
    $scope.SignPassword = function(){
       let obj = {
           password: $scope.password
       };
       socket.emit('sendPassword', obj);
   };
    
    
    socket.on('userLogin', function(data) {
        console.log(data);
    })
    
    socket.on('userPassword', function(data) {
        console.log(data);
    })
               
})







