aviaoApp.controller('GridCtrl', function($scope, AviaoService, $mdDialog) {

    $scope.getAvioes = function () {
        return AviaoService.getAvioes();
    };

    $scope.removerAviao = function (index) {
        var confirm = $mdDialog.confirm()
            .title('Você realmente quer remover o avião?')
            .textContent('Ao remover o avião ele não poderá mais ser monitorado.')
            .ariaLabel('Remover avião')
            .ok('Remover')
            .cancel('Cancelar');

        $mdDialog.show(confirm).then(function() {
            AviaoService.removeAviao(index);
        }, function() {
            //Não faz nada ao cancelar
        });
    };
});
