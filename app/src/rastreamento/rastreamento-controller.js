aviaoApp.controller('RastreamentoCtrl', function($scope,AviaoService,Console) {

    $scope.verificarDistAero = function() {
        if($scope.distanciaAeroporto == null || $scope.distanciaAeroporto === "undefined"){
            $scope.distanciaAeroportoErro = true;
        }else{
          var avioesSelecionados =  AviaoService.getAvioesSelecionados();
          var avioesDistMin = []
          avioesSelecionados.forEach(function(element) {
            if(element.getRaio() <= $scope.distanciaAeroporto){
              avioesDistMin.push(element);
              Console.push('Avião '+ element.getMatricula() +', está a '+ Math.ceil(element.getRaio()*100) +' metros da base.');
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
          var avioesProx = []
          var avioesSelecionados =  AviaoService.getAvioesSelecionados();
          var todosAvioes = AviaoService.getAvioes().slice();
          avioesSelecionados.forEach(function(avSelecionados) {
            todosAvioes.forEach(function(avTodos) {
              if(avSelecionados.getMatricula() == avTodos.getMatricula()){
                var index = todosAvioes.indexOf(avTodos);
                todosAvioes.splice(index, 1);
              }
            });
            todosAvioes.forEach(function(avTodos) {

              result = Math.sqrt(Math.pow(avSelecionados.getX() - avTodos.getX(),2) + Math.pow(avSelecionados.getY() - avTodos.getY(),2));
              if(result <= $scope.distanciaAvioes){
                  avioesProx.push(avSelecionados, avTodos);
                  Console.push('Os aviões '+ avSelecionados.getMatricula() +' - '+ avTodos.getMatricula() + ', estão a '+ Math.ceil(result*100) +' metros.');
              }
            });
          });
          alert("Distancia Minima Entre Aviões: " + $scope.distanciaAvioes)
          return avioesProx;
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
