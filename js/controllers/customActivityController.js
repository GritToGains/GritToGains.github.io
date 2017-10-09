'use strict'

fitnessTracker.controller('customActivityController', function ($scope, $window, workoutService) {
    $scope.activities = workoutService.activities;
    $scope.actName;

    $scope.submit = function () {
        if ($scope.actName && workoutService) {
            console.log("Length ", Object.keys($scope.activities).length);

            //adds the custom activity to the activitis drop down
            var nextKey = Object.keys($scope.activities).length + 1;
            $scope.activities[nextKey] = $scope.actName;

            //adds the custom activity to the workout
            console.log("Added Key ", $scope.activities);
            workoutService.addNewActivity($scope.actName);

            //go back to workout page
            $window.location.href = "#!/workout";
        }
    }



});