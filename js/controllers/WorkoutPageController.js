'use strict'

//this controller will control the page that will display and store 
//the current workout session
fitnessTracker.controller('WorkoutPageContoller', function ($scope, $window, $cookies, $interval, workoutService) {
    $scope.newActivity = workoutService.newActivity;
    $scope.workout = workoutService.workout;
    $scope.activities = workoutService.activities;

    $scope.changeWeight = function (set, string) {
        if (string == '-') {
            set.weight--;
        }
        else {
            set.weight++;
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
                set.weight--;
            }
            else {
                set.weight++;
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

    }

    var promise;
    $scope.mouseDown = function (set, opp, data) {
        promise = $interval(function () {
            $scope.changeValue(set, opp, data);
        }, 100);

    };

    $scope.mouseUp = function (set, opp, data) {
        $interval.cancel(promise);

    };



    $scope.addNewActivity = function () {
        if ($scope.newActivity == 'Custom') {
            $window.location.href = '#!/customActivity';
        } else {
            workoutService.addNewActivity($scope.newActivity);
        }
       
    }



    

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