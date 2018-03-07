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

app.directive('sliderBlock', function () {
            return {
                replace: true,
                templateUrl: 'template/slider.html',
                controller: function ($scope) {

                    $(document).ready(function ($) {

                        $('#checkbox').change(function () {
                            setInterval(function () {
                                moveRight();
                            }, 3000);
                        });

                        var slideCount = $('#slider ul li').length;
                        var slideWidth = $('#slider ul li').width();
                        var slideHeight = $('#slider ul li').height();
                        var sliderUlWidth = slideCount * slideWidth;

                        $('#slider').css({
                            width: slideWidth,
                            height: slideHeight
                        });

                        $('#slider ul').css({
                            width: sliderUlWidth,
                            marginLeft: -slideWidth
                        });

                        $('#slider ul li:last-child').prependTo('#slider ul');

                        function moveLeft() {
                            $('#slider ul').animate({
                                left: +slideWidth
                            }, 200, function () {
                                $('#slider ul li:last-child').prependTo('#slider ul');
                                $('#slider ul').css('left', '');
                            });
                        };

                        function moveRight() {
                            $('#slider ul').animate({
                                left: -slideWidth
                            }, 200, function () {
                                $('#slider ul li:first-child').appendTo('#slider ul');
                                $('#slider ul').css('left', '');
                            });
                        };

                        $('a.control_prev').click(function () {
                            moveLeft();
                        });

                        $('a.control_next').click(function () {
                            moveRight();
                        });

                    });

                }
            }
})
app.directive('chatBlock', function () {
            return {
                replace: true,
                templateUrl: 'template/chat.html',
                controller: function ($scope) {
                    //chat

$scope.Send = function(){
    socket.emit('sendmess',
               $scope.EnterText)
}

}}})