/**
 * Created by Robert on 2016-09-11.
 */
(function () {
    'use strict';

    angular.module('noAnShopClient').controller('ToolbarController', ToolbarController);

    ToolbarController.$inject = ['$scope'];

    function  ToolbarController($scope) {
        $scope.title = 'Aplikacja NoAnShop';
    }
})();
