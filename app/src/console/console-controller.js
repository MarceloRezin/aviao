aviaoApp.controller('ConsoleCtrl', function($scope, Console) {
    $scope.getHistorico = function () {
        return Console.getHistorico();
    };
    $scope.limpar = function(){
      Console.limpar();
    };
});
