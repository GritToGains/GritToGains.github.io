'use strict'

//this is the welcome page
//will display welcome back if the user has been here alrealy
//will display Welcome to Grit To gains if they havent been here

fitnessTracker.controller('WelcomePageController', function ($scope, $window, storageService) {
    $scope.showFirstWelcome;
    $scope.showCreateButton;
    $scope.userName;

    $scope.createUser = function () {
        storageService.createUser($scope.userName);
        $window.location.href = '#!/viewWorkouts';
    }

    $scope.showWorkouts = function () {
        $window.location.href = '#!/viewWorkouts';
    }

    $scope.loadUser = function () {
        if (storageService.loadUser()) {
            $scope.showCreateButton = false;
            $scope.showFirstWelcome = false;
        }
        else {
            $scope.showCreateButton = true;
            $scope.showFirstWelcome = true
        }
            
    }

    $scope.loadUser();

});