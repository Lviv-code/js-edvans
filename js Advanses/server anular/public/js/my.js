const app = angular.module('app', ['ngRoute']);
const socket = io.connect();

//Забирає %2F та # з url сайту
app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
}]);

app.config(function ($routeProvider) {
    $routeProvider
        .otherwise({
            redirectTo: '/'
        });
});


app.controller('MyCtrl', function ($scope) {
    $(document).ready(function () {

        //chat
        if ($scope.firstName == undefined) $scope.firstName = 'Unknown';
        $scope.Send = function () {
            $scope.date = new Date();
            socket.emit('sendMessage', {
                name: $scope.firstName,
                data: $scope.date,
                text: $scope.text
            });
        }
        socket.on('getMessage', function (data) {
            $scope.arrchat = data;
            $scope.$digest();
        });
        //SignIn
        $scope.SignIn = function () {
            socket.emit('signIn', {
                name: $scope.login,
                password: $scope.password
            });
            socket.on('enter', function (data) {
                $scope.userStatus = data;
                $scope.$digest();
            });
            socket.on('addUser', function (data) {
                $scope.firstName = data;
                $scope.$digest();
            });
        }

        //New User
        $scope.createNewUser = function () {
            socket.emit('signUp', {
                name: $scope.newLogin,
                password: $scope.newPassword
            });
            socket.on('newUser', function (data) {
                alert(data);
                $scope.$digest();
            });

        }


        //SignUp
        $('#SignUp').click(function () {
            $('#Overlay').css('display', 'block');
            $('#RegistrBlock').css('display', 'block');
        });

        $('#CloseRegBlock').click(function () {
            $('#Overlay').css('display', 'none');
            $('#RegistrBlock').css('display', 'none');
        });
    });

});