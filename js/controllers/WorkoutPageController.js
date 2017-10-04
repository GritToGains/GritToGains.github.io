'use strict'

//this controller will control the page that will display and store 
//the current workout session
fitnessTracker.controller('WorkoutPageContoller', function ($scope, $cookies, $log) {

    $scope.subWeight = function (set) {
        set.weight--;
    }

    $scope.addWeight = function (set) {
        set.weight++;
    }

    $scope.subRep = function (set) {
        set.reps--;
    }

    $scope.addRep = function (set) {
        set.reps++;
    }

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
                        "reps": 10
                    },
                    {
                        "exerciseName": 'Curl',
                        "set": 2,
                        "weight": 15,
                        "reps": 10
                    }
                ],
                "BenchPress": [
                    {
                        "exerciseName": 'Benchpress',
                        "set": 1,
                        "weight": 100,
                        "reps":8
                    }
                ],
                "Triceps": [
                    {
                        "exerciseName": 'Triceps',
                        "set": 1,
                        "weight": 40,
                        "reps": 5
                    },
                    {
                        "exerciseName": 'Triceps',
                        "set": 2,
                        "weight": 40,
                        "reps": 3
                    }
                ]

            }
        }
});