'use strict'

fitnessTracker.service('workoutService', function () {

    this.workout = {
        "date": '10/4/17',
        "time": '3:30pm',
        "exercises": {


        }
    }

    this.activities = {
        "1": "Curl",
        "2": "BenchPress",
        "3": "Dead Lift"
    }

    //this.newActivity;

    this.addNewActivity = function (newActivity) {
        var newAct;
        
        if (newActivity != "" && !this.doesContainActivity(newActivity)) {
            console.log("does it contain act ", this.doesContainActivity(newActivity));
            newAct =
                [
                    {
                        "exerciseName": newActivity,
                        "set": 1,
                        "weight": 0,
                        "reps": 0,
                        "canEdit": true
                    }
                ];
        }
        if (newAct) {
            this.workout.exercises[newAct[0].exerciseName] = newAct;
        }

        console.log("new activity", newAct);
        console.log("all exercises", this.workout.exercises);
    }

    this.doesContainActivity = function (newAct) {
        if (this.workout.exercises.hasOwnProperty(newAct)) {
            return true;
        }
        else {
            return false;
        }

    };

    return {
        addNewActivity: this.addNewActivity,
        doesContainActivity: this.doesContainActivity,
        //newActivity: this.newActivity,
        workout: this.workout,
        activities: this.activities
    };



});