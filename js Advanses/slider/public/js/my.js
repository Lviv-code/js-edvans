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

app.controller('MyCtrl', function ($scope) {


});

app.directive('menuBlock', function () {
    return {
        replace: true,
        templateUrl: 'template/menu.html',
        controller: function ($scope) {
            $scope.homePage = true;
            $scope.signInPage = false;
            $scope.signupPage = false;

            $scope.home = function () {
                $scope.homePage = true;
                $scope.signInPage = false;
                $scope.signupPage = false;
            }
            $scope.signIn = function () {
                $scope.homePage = false;
                $scope.signInPage = true;
                $scope.signupPage = false;
            }
            $scope.signup = function () {
                $scope.homePage = false;
                $scope.signInPage = false;
                $scope.signupPage = true;
            }
            $scope.slider1Page = true;
            $scope.slider2Page = false;
            $scope.slider3Page = false;
            $scope.slider4Page = false;

            $scope.slider1 = function () {
                $scope.slider1Page = true;
                $scope.slider2Page = false;
                $scope.slider3Page = false;
                $scope.slider4Page = false;
            }
            $scope.slider2 = function () {
                $scope.slider1Page = false;
                $scope.slider2Page = true;
                $scope.slider3Page = false;
                $scope.slider4Page = false;
            }
            $scope.slider3 = function () {
                $scope.slider1Page = false;
                $scope.slider2Page = false;
                $scope.slider3Page = true;
                $scope.slider4Page = false;
            }
            $scope.slider4 = function () {
                $scope.slider1Page = false;
                $scope.slider2Page = false;
                $scope.slider3Page = false;
                $scope.slider4Page = true;
            }


        }
    }
})

app.directive('pageBlock', function () {
    return {
        replace: true,
        templateUrl: 'template/page.html',
        controller: function ($scope) {
            //chat
            if ($scope.firstName == undefined) $scope.firstName = 'Unknown';
            $scope.canSend = false;
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
                socket.on('validUser', function (data) {
                    $scope.canSend = data;
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
            // $('#SignUp').click(function () {
            //     $('#Overlay').css('display', 'block');
            //     $('#RegistrBlock').css('display', 'block');
            // });

            // $('#CloseRegBlock').click(function () {
            //     $('#Overlay').css('display', 'none');
            //     $('#RegistrBlock').css('display', 'none');
            // });

        }
    }
})

app.directive('signupBlock', function () {
    return {
        replace: true,
        templateUrl: 'template/signup.html',
        controller: function ($scope) {

        }
    }
})