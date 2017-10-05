'use strict'

fitnessTracker.directive('pressHoldStart', function ($interval) {
    return {
        restrict: 'A',
        scope: {
            execute: '&'
        }
    }
    link: function(scope, element, attrs, controller) {


        var promise;
        scope.mouseDown = function () {
            if (promise) {
                $interval.cancel(promise);
            }
            promise = $interval(scope.execute, 100);
        };

        scope.mouseUp = function () {
            $interval.cancel(promise);
            promise.null;
        };

    };
});