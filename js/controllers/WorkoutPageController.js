'use strict'

//this controller will control the page that will display and store 
//the current workout session
fitnessTracker.controller('WorkoutPageContoller', function ($scope, $window, $interval, workoutService, storageService) {
    $scope.newActivity;
    $scope.workout = workoutService.currentWorkout;
    $scope.activities = workoutService.activities;
    $scope.data = workoutService.data;

    $scope.onPageLoad = function () {
        storageService.loadUser();
        $scope.workout = workoutService.continueWorkout();
        //$scope.workout = workoutService.newWorkout();
    };

    $scope.$watch('workout', function (newVal, oldVal) {
        //console.log("Changed", Object.keys($scope.workout.exercises).length);
        if (Object.keys($scope.workout.exercises).length > 0)
            workoutService.hideMessage();
    }, true);

    $scope.changeWeight = function (set, string) {
        if (string == '-') {
            set.weight -= 5;
        }
        else {
            set.weight +=5;
        }

    }

    $scope.changeRep = function (set, string) {
        if (string == '-') {
            set.reps--;
        }
        else {
            set.reps++;
        }
    }

    $scope.changeValue = function (set, opp, data) {
        if (data == 'weight') {
            if (opp == '-') {
                set.weight -=5;
            }
            else {
                set.weight += 5;
            }
        }
        else {
            if (opp == '-') {
                set.reps--;
            }
            else {
                set.reps++;
            }
        }
    }


    //allows the selected set to be editied and disables all others. 
    $scope.editSet = function (exercise, currentSet) {
        for (var set in exercise) {
            if (exercise[set].canEdit) {
                exercise[set].canEdit = false;
            }
        }
        if (currentSet.canEdit == false) {
            currentSet.canEdit = true;
        }

        $scope.saveWorkout();
    }

    $scope.addSet = function (exercise) {
        exercise.push(
            {
                "exerciseName": exercise[0].exerciseName,
                "set": exercise.length + 1,
                "weight": exercise[exercise.length - 1].weight,
                "reps": 0,
                "canEdit": true
            });

        $scope.editSet(exercise, exercise[exercise.length - 1]);
        $scope.saveWorkout();
    }

    $scope.delSet = function (exercise) {
        if (exercise.length > 1) {
            exercise.pop();
        }
        else {
            delete $scope.workout.exercises[exercise[0].exerciseName];
        }
        $scope.saveWorkout();
    }

    $scope.saveWorkout = function() {
        workoutService.saveWorkout();
    }


    var promise;
    $scope.mouseDown = function (set, opp, data) {
        promise = $interval(function () {
            $scope.changeValue(set, opp, data);
        }, 100);
        
    };

    $scope.mouseUp = function (set, opp, data) {
        $interval.cancel(promise);
        $scope.saveWorkout();
    };

    $scope.getExerciseName = function(exercise) {
       return exercise[0].exerciseName.replace(/\s+/g, '');
        console.log("exercise naem", exercise[0].exerciseName.replace(/\s+/g, ''));

    }

    $scope.onPageLoad();

    //$scope.newWorkout = function () {
    //    $scope.workout = workoutService.newWorkout();
    //    //console.log("What is returned", workoutService.newWorkout());
    //    //console.log("Controller workout: ", $scope.workout);
    //};

    //$scope.continueWorkout = function () {
    //    $scope.workout = workoutService.continueWorkout();
    //    console.log("Continuing Workout: ", $scope.workout);

    //};



    ////*************************************************************************************************************************************************************888

    //$scope.saveState = function () {
    //    //save the workout
    //    console.log("Saving...");

    //    $window.localStorage.setItem("workout", JSON.stringify($scope.workout));
    //}

    //$scope.restoreState = function () {
    //    //restore the workout
    //    console.log("Restoring...");

    //    workoutService.currentWorkout = ($window.localStorage.getItem("workout") !== null) ? JSON.parse($window.localStorage.getItem("workout")) : [];
    //    $scope.workout = workoutService.currentWorkout;

    //    console.log("Restored", workoutService.currentWorkout);
    //}

    //$scope.deleteState = function () {
    //    //delete the saved state
    //    console.log("Deleting...");

    //    $window.localStorage.removeItem("workout");
    //}

    ////testing code from storage Service
    //$scope.saveWorkout = function () {
    //    storageService.saveWorkout(workoutService.currentWorkout);
    //};

    //$scope.saveUser = function() {
    //    storageService.saveUser();
    //};

    //$scope.loadUser = function () {
    //    storageService.loadUser();
    //};

    //$scope.loadWorkout = function () {
    //    var test = storageService.getWorkout(-1);
    //    console.log("Loadeed workout", test);
    //    workoutService.currentWorkout = test;
    //    $scope.workout = workoutService.currentWorkout;
        
    //}


    //$scope.testFunc = function () {
    //    console.log("Workout date", workoutService.currentWorkout);

    //    console.log("Workout time", workoutService.currentWorkout);

    //    console.log("Controller workout", $scope.workout);

    //}

   

    //depreciated code. This is now in the workoutservice. 
    //$scope.addNewActivity = function () {
    //    if ($scope.newActivity == 'Custom') {
    //        $window.location.href = '#!/customActivity';
    //    } else {
    //        workoutService.addNewActivity($scope.newActivity);
    //    }

    //    if (!$scope.showMessage)
    //        $scope.showMessage = true;

    //    console.log("Changed showMessage", $scope.showMessage);
       
    //}



    

    //$scope.workout =
    //    {
    //        "date": '10/4/17',
    //        "time": '3:30pm',
    //        "exercises":
    //        {
    //            "Curl": [
    //                {
    //                    "exerciseName": 'Curl',
    //                    "set": 1,
    //                    "weight": 20,
    //                    "reps": 10,
    //                    "canEdit": false
    //                },
    //                {
    //                    "exerciseName": 'Curl',
    //                    "set": 2,
    //                    "weight": 15,
    //                    "reps": 10,
    //                    "canEdit": true
    //                }
    //            ],
    //            "BenchPress": [
    //                {
    //                    "exerciseName": 'Benchpress',
    //                    "set": 1,
    //                    "weight": 100,
    //                    "reps": 8,
    //                    "canEdit": true
    //                }
    //            ],
    //            "Triceps": [
    //                {
    //                    "exerciseName": 'Triceps',
    //                    "set": 1,
    //                    "weight": 40,
    //                    "reps": 5,
    //                    "canEdit": false
    //                },
    //                {
    //                    "exerciseName": 'Triceps',
    //                    "set": 2,
    //                    "weight": 40,
    //                    "reps": 3,
    //                    "canEdit": true
    //                }
    //            ]

    //        }
    //    }
});