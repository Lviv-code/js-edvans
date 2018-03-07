const app = angular.module('app',['ngRoute']);
const socket = io.connect();

//Забирає %2F та # з url сайту
app.config(['$locationProvider', function
           ($locationProvider){
               $locationProvider.hashPrefix('');
               $locationProvider.html5Mode(true);
           }]);

app.config(function($routeProvider){
    $routeProvider
    .otherwise({
        redirectTo:'/'
    });
});



app.controller('MyCtrl', function($scope){
    
    
})