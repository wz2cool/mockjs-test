(function () {
    'use strict';
    angular.module('mockjs_app').factory('httpService', ['$http', httpService]);

    function httpService($http) {
        return {
            getUsers: _getUsers,
            getStudent: _getStudent
        };

        function _getUsers() {
            var url = 'http://baidu.com';
            return $http({
                url: url,
                method: 'GET'
            });
        }

        function _getStudent(id) {
            var url = 'http://api/students/' + id;
            return $http({
                url: url,
                method: 'GET'
            });
        }
    }
})();