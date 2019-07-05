aviaoApp.controller('TransformacaoCtrl', function($scope, AviaoService, Aviao) {

    $scope.xRotacionar= 0;
    $scope.yRotacionar=0;
    $scope.translandar = function() {

        var lis = AviaoService.getAvioesSelecionados();
        for(var i = 0; i < lis.length; i++){
            lis[i].translandar($scope.xTranslandar, $scope.yTranslandar);
        }

    }

    $scope.escalonar = function() {

        var lis = AviaoService.getAvioesSelecionados();
        for(var i = 0; i < lis.length; i++){
            lis[i].escalonar($scope.xEscalonar, $scope.yEscalonar);
        }

    }

    $scope.rotacionar = function() {

        var lis = AviaoService.getAvioesSelecionados();
        for(var i = 0; i < lis.length; i++){
            lis[i].rotacionar($scope.xRotacionar, $scope.yRotacionar, $scope.anguloRotacionar);
        }

    }

});
