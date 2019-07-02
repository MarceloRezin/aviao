var aviaoApp = angular.module('AviaoApp', ['ngMaterial', 'ngMessages'])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('indigo');
})

.controller('IndexCtrl', function($scope, Console, AviaoService, Aviao) {
    Console.push('Radar iniciado');
});
