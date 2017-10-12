'use strict'

fitnessTracker.controller('workoutSideBarController', function ($scope, workoutService) {
    $scope.activities = workoutService.activities;
    $scope.customAct;
    $scope.isWorkoutPageOpen = true;

    $scope.addActivity = function (act) {
        workoutService.addNewActivity(act);
        $scope.closeNav();
    }

    $scope.addCustomActivity = function () {
        if ($scope.customAct) {
            console.log("Length ", Object.keys($scope.activities).length);

            //adds the custom activity to the activitis drop down
            var nextKey = Object.keys($scope.activities).length + 1;
            $scope.activities[nextKey] = $scope.customAct;

            //adds the custom activity to the workout
            console.log("Added Key ", $scope.activities);
            workoutService.addNewActivity($scope.customAct);

            $scope.closeNav();
            $scope.customAct = ""
        }
    }

});