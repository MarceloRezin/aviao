aviaoApp.controller('RastreamentoCtrl', function($scope,AviaoService,Console) {

    $scope.verificarDistAero = function() {
        if($scope.distanciaAeroporto == null || $scope.distanciaAeroporto === "undefined"){
            $scope.distanciaAeroportoErro = true;
        }else{
          var av =  AviaoService.getAvioesSelecionados();
          var avioesDistMin = []
          av.forEach(function(element) {
            if(element.getRaio() <= $scope.distanciaAeroporto){
              avioesDistMin.push(element);
              Console.push('Avião '+ element.getMatricula() +', está a '+ Math.ceil(element.getRaio()) +' KM da base.');
            }
          });
            alert("Distancia Minima da Base: " + $scope.distanciaAeroporto)
            return avioesDistMin;
        }
    }

    $scope.verificarDistAv = function() {
        if($scope.distanciaAvioes == null || $scope.distanciaAvioes === "undefined"){
            $scope.distanciaAvioesErro = true;
        }else{
            alert("Distancia Minima Entre Aviões: " + $scope.distanciaAvioes)
        }
    }

    $scope.verificarTempoColisao = function() {
        if($scope.tempoColisao == null || $scope.tempoColisao === "undefined"){
            $scope.tempoColisaoErro = true;
        }else{
            alert("Tempo Minimo para Colisão: " + $scope.tempoColisao)
        }
    }

    $scope.zeraCampos = function() {
        $scope.distanciaAeroportoErro = false;
        $scope.distanciaAvioesErro = false;
        $scope.tempoColisaoErro = false;
    }
});
