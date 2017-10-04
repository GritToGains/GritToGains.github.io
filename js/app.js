'use strict'

var fitnessTracker = angular.module('fitnessTracker',['ngRoute', 'ngCookies'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/welcome',
            {
                templateUrl: 'templates/WelcomePage.html',
                controller: 'WelcomePageController'
            })
        $routeProvider.when('/workout',
            {
                templateUrl: 'templates/WorkoutPage.html',
                controller: 'WorkoutPageContoller'
            });
    });