var aviaoApp = angular.module('AviaoApp', ['ngMaterial', 'ngMessages'])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('indigo');
})

.controller('IndexCtrl', function($scope, Console, AviaoService, Aviao) {
    Console.push('Radar iniciado');

    var a = new Aviao();
    a.setX(0);
    a.setY(100);
    a.setDirecao(0);
    a.setVelocidade(0);

    var b = new Aviao();
    b.setX(114);
    b.setY(5);
    // b.inverterSelecao();

    var c = new Aviao();
    c.setX(123);
    c.setY(5);

    var d = new Aviao();
    d.setX(132);
    d.setY(5);

    var e = new Aviao();
    e.setX(141);
    e.setY(5);

    var f = new Aviao();
    f.setX(150);
    f.setY(5);

    AviaoService.addAviao(a);
    // AviaoService.addAviao(b);
    // AviaoService.addAviao(c);
    // AviaoService.addAviao(d);
    // AviaoService.addAviao(e);
    // AviaoService.addAviao(f);
});
