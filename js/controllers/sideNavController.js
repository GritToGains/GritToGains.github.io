('use strict')

fitnessTracker.controller('sideNavController', function ($scope, $window, $location, workoutService) {
    $scope.workout = $location.path() === '/workout';
    $scope.welcome = $location.path() === '/welcome';

    $scope.closeNav = function () {
        document.getElementById("sideNav").style.width = "0";
    }

    $scope.openNav = function () {
        document.getElementById("sideNav").style.width = "250px";
    }

    $scope.newWorkout = function () {
        workoutService.newWorkout();
        $window.location.href = '#!/workout';
    }
});