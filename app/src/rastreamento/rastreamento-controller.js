aviaoApp.controller('RastreamentoCtrl', function($scope) {

    $scope.verificarDistAero = function() {
        if($scope.distanciaAeroporto == null || $scope.distanciaAeroporto === "undefined"){
            $scope.distanciaAeroportoErro = true;
        }else{
            alert("Distancia Minima da Base: " + $scope.distanciaAeroporto)
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
