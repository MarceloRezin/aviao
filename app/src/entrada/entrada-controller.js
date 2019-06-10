aviaoApp.controller('EntradaCtrl', function($scope, AviaoService, Aviao) {
    $scope.cb1 = false;

    $scope.addAv = function() {
        var aviao = new Aviao();
        if($scope.cb1 == true){
            aviao.setRaio($scope.raio);
            aviao.setAngulo($scope.angulo);
            aviao.setVelocidade($scope.velocidade);
            aviao.setDirecao($scope.direcao);
        }
        else{
            aviao.setX($scope.x);
            aviao.setY($scope.y);
            aviao.setVelocidade($scope.velocidade);
            aviao.setDirecao($scope.direcao);
        }
        AviaoService.addAviao(aviao);
    };

});
