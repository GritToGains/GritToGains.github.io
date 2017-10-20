'use strict'

fitnessTracker.controller('viewWorkoutsController', function ($scope, storageService) {

    storageService.loadUser();
    $scope.user = storageService.user;

    $scope.dayOfWeek = function (date) {
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var tempDate = new Date(date);

        return weekday[tempDate.getDay()];

    }

    $scope.getHash = function (date, time) {
        var prime = 79;
        var tempDate = new Date(date);
        var timeInt = parseInt(time.replace(/\D+/g, ''));

        var hash = prime * tempDate.getMonth() * tempDate.getDay() * tempDate.getFullYear() * timeInt;
        return hash;
    }

});