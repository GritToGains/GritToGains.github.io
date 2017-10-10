'use strict'

fitnessTracker.controller('workoutSideBarController', function ($scope, workoutService) {
    $scope.activities = workoutService.activities;

    $scope.closeNav = function () {
        document.getElementById("workoutSideBar").style.width = "0";
    }

    $scope.openNav = function () {
        document.getElementById("workoutSideBar").style.width = "250px";
    }

});