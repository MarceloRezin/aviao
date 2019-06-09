aviaoApp.controller('EntradaCtrl', function($scope, AviaoService, Aviao) {
    $scope.cb1 = false

    $scope.addAv = function() {
        var aviao = new Aviao();
        aviao.setX($scope.x);
        aviao.setY($scope.y);
        AviaoService.addAviao(aviao);
    };

});
