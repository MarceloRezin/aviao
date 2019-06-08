'use strict';

/**
 * Service responsável por gerenciar os aviões.
 */
aviaoApp.factory('AviaoService', function (Console) {

    function AviaoService() {

        var avioes = [];

        function _addAviao(aviao) {
            if(!aviao || !aviao.getMatricula()){
                throw 'Não foi possível adicionar o avião informado!';
            }

            avioes.push(aviao);
            Console.push('Avião ' + aviao.getMatricula() + ' adicionado;')
        }

        function _getAvioes() {
            return avioes;
        }

        function _filterAviaoSelecionado(aviao) {
            return aviao.isSelecionado();
        }

        function _getAvioesSelecionados() {
            return avioes.filter(_filterAviaoSelecionado);
        }

        function _removeAviao(index) {
            if(!index == null || index < 0){
                throw 'Não foi informado um índice válido!';
            }

            var removido = avioes.splice(index, 1);
            Console.push('Avião ' + removido[0].getMatricula() + ' removido;')
        }

        return {
            addAviao: _addAviao,
            getAvioes: _getAvioes,
            getAvioesSelecionados: _getAvioesSelecionados,
            removeAviao: _removeAviao
        };
    }

    return new AviaoService();
});
