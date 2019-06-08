var aviaoApp = angular.module('AviaoApp', ['ngMaterial', 'ngMessages'])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo');
})

.controller('IndexCtrl', function($scope, Console, AviaoService, Aviao) {
    Console.push('Radar iniciado');

    var a = new Aviao();
    a.setX(10);
    a.setY(10);

    var b = new Aviao();
    b.setX(14);
    b.setY(14);
    b.inverterSelecao();

    var c = new Aviao();
    c.setX(19);
    c.setY(14);

    AviaoService.addAviao(a);
    AviaoService.addAviao(b);
    AviaoService.addAviao(c);
});
