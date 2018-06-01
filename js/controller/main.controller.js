(function () {
    'use strict';
    angular.module('mockjs_app').controller('mainController',
        ['$scope', '$timeout', 'httpService', mainController]);

    function mainController($scope, $timeout, httpService) {
        $scope.data = 'loading...';


        /*  httpService.getUsers()
              .then(function (value) {
                  console.log(JSON.stringify(value.data));
                  $scope.data = value.data;

              }, function (reason) {
                  console.error(reason);
              })*/


        httpService.getStudent(2)
            .then(function (value) {
                console.log(JSON.stringify(value.data));
                $scope.data = value.data;

            }, function (reason) {
                console.error(reason);
            })

    }
})();