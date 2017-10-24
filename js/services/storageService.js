'use strict'

//service to handle storing and retreving data from local storage
fitnessTracker.factory('storageService', function ($window) {
    var scope = {};
    scope.user = {
        "name": "",
        "version": "0.1",
        "workouts": {

        }, 
        "activities": {

        }
    };


    scope.saveWorkout = function (workout) {
        //code to add the workout to the user object and then save
        scope.user.workouts[workout.date + workout.time] = workout;
        console.log("Saved new workout: ", scope.user);
        scope.saveUser();
    };

    scope.saveUser = function () {
        //code to save the user object to the localStorage;

        $window.localStorage.setItem("user", JSON.stringify(scope.user));
        console.log("Saved User");
    };

    scope.createUser = function (name) {
        scope.user.name = name;
        scope.saveUser();
    }

    scope.loadUser = function () {
        //code to load the user object.

            console.log("Pre-load User", scope.user);
        if ($window.localStorage.getItem("user") !== null) {
            scope.user = JSON.parse($window.localStorage.getItem("user"));
            console.log("Loaded User", scope.user);
            return true;
        }
        else {
            console.log("ERROR: USER OBJECT NOT FOUND");
            return false;
        }
    };

    scope.getWorkout = function (key) {
        //code to load the workout from the user with the provided key.
        //will return -1 if error
        //if -1 is the key, return the last workout
        if (scope.isUserLoaded()) {
            if (key < 0) {
                //console.log("Returning last Workout: ", scope.user.workouts[Object.keys(scope.user.workouts)[Object.keys(scope.user.workouts).length - 1]]);
                return scope.user.workouts[Object.keys(scope.user.workouts)[Object.keys(scope.user.workouts).length - 1]];
            }
            else {
                if (scope.user.workouts[key] !== undefined) {
                    console.log("Getting Workout: ", scope.user.workouts[key]);
                    return scope.user.workouts[key];
                }
                else {
                    console.log("ERROR: WORKOUT WITH KEY: " + key + " DOES NOT EXIST")
                    return -1;
                }
            }
        }
    };

    scope.isUserLoaded = function() {
        if (scope.user.name !== "") {
            return true;    
        }
        else {
            console.log("ERROR: USER NOT LOADED");
            return false;
        }
    }

    return scope;

});