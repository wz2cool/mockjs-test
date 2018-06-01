(function () {
    'use strict';
    angular.module('mockjs_app').factory('httpService', ['$http', httpService]);

    function httpService($http) {
        return {
            getUsers: _getUsers
        };

        function _getUsers() {
            var url = 'http://baidu.com';
            return $http({
                url: url,
                method: 'GET'
            });
        }
    }
})();