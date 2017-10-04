'use strict'

//this is the welcome page
//will display welcome back if the user has been here alrealy
//will display Welcome to Grit To gains if they havent been here

fitnessTracker.controller('WelcomePageController', function ($scope, $cookies, $window) {
    $scope.showFirstWelcome;

    $scope.StartWorkout = function () {
        $cookies.put('visit', true);
        $window.location.href = '#!/workout';
    }

    $scope.deleteAllCookies = function () {
        $cookies.remove('visit');
    }

    $scope.$on('$viewContentLoaded', function () {
        var hasVisitCookie = $cookies.get('visit');
        if (hasVisitCookie) {
            $scope.showFirstWelcome = false;
        }
        else {
            $scope.showFirstWelcome = true;
        }
    });

});