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

        return {
            addAviao: _addAviao,
            getAvioes: _getAvioes,
            getAvioesSelecionados: _getAvioesSelecionados
        };
    }

    return new AviaoService();
});
