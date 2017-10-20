'use strict'

fitnessTracker.controller('workoutSideBarController', function ($scope, workoutService) {
    $scope.activities = workoutService.activities;
    $scope.data = {};
    $scope.isWorkoutPageOpen = true;

    $scope.addActivity = function (act) {
        workoutService.addNewActivity(act);
        $scope.closeNav();
       // workoutService.hideMessage();

    }

    //this code needs to be moved to the workoutService. 
    $scope.addCustomActivity = function () {
        workoutService.addCustomActivity($scope.data.customAct);
        $scope.closeNav();
        $scope.data.customAct = "";
    }

});