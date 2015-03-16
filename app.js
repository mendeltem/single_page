var app=angular.module('single-page-app',['ngRoute']);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
          .when('/second',{
                templateUrl: 'second.html'
          });


});


app.controller('cfgController',function($scope){

      $scope.name="Hello world";

});