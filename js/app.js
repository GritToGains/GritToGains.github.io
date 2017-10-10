'use strict'

var fitnessTracker = angular.module('fitnessTracker', ['ngRoute', 'ngCookies', 'ngTouch'])
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
            })
        $routeProvider.when('/customActivity',
            {
                templateUrl: 'templates/customActivity.html',
                controller: 'customActivityController'
            });
    });