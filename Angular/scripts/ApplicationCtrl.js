(function() {
  'use strict';

  angular
    .module('app')
    .controller('ApplicationController', ApplicationController);

  ApplicationController.$inject = ['RevenuePerformances', '$http'];

  function ApplicationController(RevenuePerformances, $http) {
    var vm = this;

    vm.revenuePerformances = [];

    RevenuePerformances.get('data.json').then(function(response) {
      vm.revenuePerformances = response.revenue_performances;
    });
  }
})();
