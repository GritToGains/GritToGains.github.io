'use strict'

//this controller will control the page that will display and store 
//the current workout session
fitnessTracker.controller('WorkoutPageContoller', function ($scope, $cookies, $interval) {

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

    $scope.editSet = function (exercise, currentSet) {
        for (var set in exercise) {
            if (exercise[set].canEdit) {
                exercise[set].canEdit = false;
            }
        }

        currentSet.canEdit = true;
    }

    $scope.addSet = function (exercise) {
        exercise.push(
            {
                "exerciseName": 'Curl',
                "set": exercise.length + 1,
                "weight": 0,
                "reps": 0,
                "canEdit": true
            });

        $scope.editSet(exercise, exercise[exercise.length - 1]);
        
    }

    var promise;
    $scope.mouseDown = function (set, opp, data) {
        promise = $interval(function () {
            $scope.changeValue(set, opp, data);
        }, 200);

    };

    $scope.mouseUp = function (set, opp, data) {
        $interval.cancel(promise);
       
    };

    $scope.workout =
        {
            "date": '10/4/17',
            "time": '3:30pm',
            "exercises":
            {
                "curl": [
                    {
                        "exerciseName": 'Curl',
                        "set": 1,
                        "weight": 20,
                        "reps": 10,
                        "canEdit": false
                    },
                    {
                        "exerciseName": 'Curl',
                        "set": 2,
                        "weight": 15,
                        "reps": 10,
                        "canEdit": true
                    }
                ],
                "BenchPress": [
                    {
                        "exerciseName": 'Benchpress',
                        "set": 1,
                        "weight": 100,
                        "reps": 8,
                        "canEdit": true
                    }
                ],
                "Triceps": [
                    {
                        "exerciseName": 'Triceps',
                        "set": 1,
                        "weight": 40,
                        "reps": 5,
                        "canEdit": false
                    },
                    {
                        "exerciseName": 'Triceps',
                        "set": 2,
                        "weight": 40,
                        "reps": 3,
                        "canEdit": true
                    }
                ]

            }
        }
});