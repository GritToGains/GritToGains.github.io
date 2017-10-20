'use strict'

fitnessTracker.service('workoutService', function (storageService) {

    this.data = {};
    this.data.showMessage = true;

    this.activities = {
        "1": "Curl",
        "2": "BenchPress",
        "3": "Dead Lift"
    }

    this.currentWorkout = {
        "date": "",
        "time": "",
        "exercises": {


        }
    };

    this.newWorkout = function () {
        //this.resetWorkout();
        console.log("Currentworkout", this.currentWorkout);

        if (this.currentWorkout.time !== "") {
            console.log("Saving workout " + this.currentWorkout.date + this.currentWorkout.time + " from new workout");
            storageService.saveWorkout(this.currentWorkout);
        }

         var newWorkout = {
            "date": getDate(),
            "time": getTime(),
            "exercises": {


            }
        }

         this.currentWorkout = newWorkout;
         console.log("Created new workout: ", this.currentWorkout);
         return this.currentWorkout;

    };

    this.continueWorkout = function () {
        if (storageService.getWorkout(-1) !== -1) {
            this.currentWorkout = storageService.getWorkout(-1);
            return this.currentWorkout;
        }
        else {
            console.log("ERROR: COULDNT CONTINUE WORKOUT");
            return this.currentWorkout;
        }
        
    };

    this.resetWorkout = function() {
        this.currentWorkout = {
            "date": "",
            "time": "",
            "exercises": {


            }
        };
    }



    function getDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = mm + '/' + dd + '/' + yyyy;

        return today
    }

    function getTime() {
        var d = new Date(); // for now
        var hours = d.getHours();
        var min = d.getMinutes();

        var t = ""; 
        var apm = "";

        if (hours >= 12) {
            apm = "pm";
        }
        else if (hours < 12) {
            apm = "am";
        }

        if (hours > 12) {
            t = t + (hours - 12);
        }
        else {
            t = t + hours;
        }

        if (min < 10) {
            t = t + ":0" + min;
        }
        else {
            t = t + ":" + min;
        }

        t = t + apm;

        return t;
    }

 

    this.hideMessage = function () {
        this.data.showMessage = false;
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
            this.currentWorkout.exercises[newAct[0].exerciseName] = newAct;
            this.saveWorkout();
        }

        console.log("new activity", newAct);
        console.log("all exercises", this.currentWorkout.exercises);

    }

    this.addCustomActivity = function(customAct) {
        console.log("custom act in fun ", customAct);
        if (customAct) {
            console.log('adding activity');
            console.log("Length ", Object.keys(this.activities).length);

            //adds the custom activity to the activitis drop down
            var nextKey = Object.keys(this.activities).length + 1;
            if (!this.doesHaveCustomActivity(customAct)) {
                this.activities[nextKey] = customAct;
            }
            
            //adds the custom activity to the workout
            console.log("Added Key ", this.activities);
            this.addNewActivity(customAct);
            this.saveWorkout();
            }
    };

    this.doesHaveCustomActivity = function (customAct) {
        var found = false;
        for (var i = 1; i <= Object.keys(this.activities).length; i++) {
            if (this.activities[i] == customAct)
                found = true; 
        }

        return found; 
    }

    this.doesContainActivity = function (newAct) {
        if (this.currentWorkout.exercises.hasOwnProperty(newAct)) {
            return true;
        }
        else {
            return false;
        }

    };

    this.saveWorkout = function () {
        storageService.saveWorkout(this.currentWorkout);
    }

    return {
        addNewActivity: this.addNewActivity,
        doesContainActivity: this.doesContainActivity,
        hideMessage: this.hideMessage,
        newWorkout: this.newWorkout,
        continueWorkout: this.continueWorkout,
        resetWorkout: this.resetWorkout,
        addCustomActivity: this.addCustomActivity, 
        doesHaveCustomActivity: this.doesHaveCustomActivity,
        saveWorkout: this.saveWorkout,
        //newActivity: this.newActivity,
       currentWorkout: this.currentWorkout,
        activities: this.activities,
        data: this.data
    };



});