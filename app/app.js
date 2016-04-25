<<<<<<< HEAD
var smokifyApp = angular.module('smokifyApp', ['ngRoute', 'ngAnimate']);
smokifyApp.config(function($routeProvider){
    $routeProvider
        .when('/',
            {
                controller: 'HomeController',
                templateUrl: 'app/home/home.html'
            })
        .when('/cache/',
            {
                controller: 'MapController',
                templateUrl: 'app/maps/cache.html'
            })
        .when('/cobblestone/',
            {
                controller: 'MapController',
                templateUrl: 'app/maps/cobblestone.html'
            })
        .when('/dust2/',
            {
                controller: 'MapController',
                templateUrl: 'app/maps/dust2.html'
            })
        .when('/inferno/',
            {
                controller: 'MapController',
                templateUrl: 'app/maps/inferno.html'
            })
        .when('/mirage/',
            {
                controller: 'MapController',
                templateUrl: 'app/maps/mirage.html'
            })
        .when('/overpass/',
            {
                controller: 'MapController',
                templateUrl: 'app/maps/overpass.html'
            })
        .when('/train/',
            {
                controller: 'MapController',
                templateUrl: 'app/maps/train.html'
            })
        .otherwise({ redirectTo: '/' });
});
=======
var smokifyApp = angular.module('smokifyApp', ['ngRoute', 'ngAnimate']);
smokifyApp.config(function($routeProvider){
    $routeProvider
        .when('/',
            {
                controller: 'HomeController',
                templateUrl: 'app/home/home.html'
            })
        .when('/cache/',
            {
                controller: 'MapController',
                templateUrl: 'app/maps/cache.html'
            })
        .when('/cobblestone/',
            {
                controller: 'MapController',
                templateUrl: 'app/maps/cobblestone.html'
            })
        .when('/dust2/',
            {
                controller: 'MapController',
                templateUrl: 'app/maps/dust2.html'
            })
        .when('/inferno/',
            {
                controller: 'MapController',
                templateUrl: 'app/maps/inferno.html'
            })
        .when('/mirage/',
            {
                controller: 'MapController',
                templateUrl: 'app/maps/mirage.html'
            })
        .when('/overpass/',
            {
                controller: 'MapController',
                templateUrl: 'app/maps/overpass.html'
            })
        .when('/train/',
            {
                controller: 'MapController',
                templateUrl: 'app/maps/train.html'
            })
        .otherwise({ redirectTo: '/' });
});
>>>>>>> anthnd-github/master
