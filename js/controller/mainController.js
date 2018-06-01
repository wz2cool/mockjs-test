(function () {
    'use strict';
    angular.module('mockjs_app').controller('mainController', ['$scope', mainController]);

    function mainController($scope) {
        $scope.test = 'test';
    }
})();