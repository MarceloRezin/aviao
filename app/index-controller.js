var aviaoApp = angular.module('AviaoApp', ['ngMaterial', 'ngMessages'])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo');
})

.controller('IndexCtrl', function($scope) {
    $scope.alert = 'ABC';

});
