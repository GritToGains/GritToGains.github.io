'use strict'

fitnessTracker.controller('viewWorkoutsController', function ($scope, $window, $location, anchorSmoothScroll, workoutService, storageService) {

    storageService.loadUser();
    $scope.user = storageService.user;

    $scope.selectedWorkout;
    $scope.selectedWorkoutID;

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

    $scope.isToday = function (date) {
        var today = new Date();
        var workoutDate = new Date(date);

        if (workoutDate.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0)) {
            //console.log("Its today");
            return true;
        }
        return false;
    }

    $scope.continueWorkout = function (workout) {

        $window.location.href = '#!/workout';
    }

    $scope.getHash = function (date, time) {
        var prime = 79;
        var tempDate = new Date(date);
        var timeInt = parseInt(time.replace(/\D+/g, ''));

        var hash = prime * tempDate.getMonth() * tempDate.getDay() * tempDate.getFullYear() * timeInt;
        return hash;
    };

    $scope.deleteWorkout = function(workout) {
        //delete the workout
        var result = confirm("Are you sure you want to delete some Gains?");
        if (result) {
            var key = workout.date + workout.time;

            delete $scope.user.workouts[key];
            storageService.saveUser();
            console.log("Deleted Workout", workout);
            console.log("All workouts", $scope.user.workouts); 
        }

        
    }

    $scope.selectWorkout = function(workout) {
        //the user clicked this workout

        $scope.selectedWorkout = workout;
        $scope.selectedWorkoutID = $scope.getHash(workout.date, workout.time);

        $location.hash("info")
        anchorSmoothScroll.scrollTo("info");
    }

});