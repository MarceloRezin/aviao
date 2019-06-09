var aviaoApp = angular.module('AviaoApp', ['ngMaterial', 'ngMessages'])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('indigo');
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

    var d = new Aviao();
    var e = new Aviao();
    var f = new Aviao();
    var g = new Aviao();
    var h = new Aviao();
    var i = new Aviao();
    var j = new Aviao();


    AviaoService.addAviao(a);
    AviaoService.addAviao(b);
    AviaoService.addAviao(c);
    AviaoService.addAviao(d);
    AviaoService.addAviao(e);
    AviaoService.addAviao(f);
    AviaoService.addAviao(g);
    AviaoService.addAviao(h);
    AviaoService.addAviao(i);
    AviaoService.addAviao(j);
});
