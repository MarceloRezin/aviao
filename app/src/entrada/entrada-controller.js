aviaoApp.controller('EntradaCtrl', function($scope, AviaoService, Aviao) {
    $scope.cb1 = false;

    $scope.limpaCampos = function(){
      $scope.raio="";
      $scope.angulo="";
      $scope.x="";
      $scope.y="";
      $scope.formEntrada.$setUntouched();
      $scope.formEntrada.$setPristine();
    }

    $scope.addAv = function() {
        var aviao = new Aviao();
        if($scope.switchPolar == true){
            aviao.setRaio($scope.raio);
            aviao.setAngulo($scope.angulo);

        }
        else{
            aviao.setX($scope.x);
            aviao.setY($scope.y);
        }
        aviao.setVelocidade($scope.velocidade);
        aviao.setDirecao($scope.direcao);

        AviaoService.addAviao(aviao);
        $scope.raio="";
        $scope.angulo="";
        $scope.x="";
        $scope.y="";
        $scope.velocidade="";
        $scope.direcao="";
        $scope.formEntrada.$setUntouched();
        $scope.formEntrada.$setPristine();
    };

    $scope.$on('EDITAR_AVIAO', function(event, aviao) {
        console.log(aviao);
        // aviao.setDirecao(90);

        $scope.x = aviao.getX();
        $scope.y = aviao.getY();
        $scope.velocidade = aviao.getVelocidade();
        $scope.direcao = aviao.getDirecao();

    });
});
