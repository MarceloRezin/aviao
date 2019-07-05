'use strict';

/**
 * Service responsável por gerenciar os histórico do console.
 */
aviaoApp.factory('Console', function () {

    function Console() {

        var historico = [];

        /**
         * Método para registro de informações no console
         * @param text
         * @private
         */
        function _push(text) {
            let now = new Date();

            let dia = now.getDate().toString();
            let diaFmt = dia.length < 2 ? '0' + dia : dia;

            let mes = (now.getMonth() + 1).toString();
            let mesFmt = mes.length < 2 ? '0' + mes : mes;

            let hora = now.getHours().toString();
            let horaFmt = hora.length < 2 ? '0' + hora : hora;

            let minuto = now.getMinutes().toString();
            let minutoFmt = minuto.length < 2 ? '0' + minuto : minuto;

            let segundo = now.getSeconds().toString();
            let segundoFmt = segundo.length < 2 ? '0' + segundo : segundo;

            let nowFmt = '[' + diaFmt + '/' + mesFmt + '/' + now.getFullYear() + ' ' + horaFmt + ':' + minutoFmt + ':' + segundoFmt + '] ';

            historico.push(nowFmt + text);
        }

        /**
         * Retorna o registro do console
         * @returns {Array}
         * @private
         */
        function _getHistorico() {
            return historico;
        }

        function _limpar() {
            historico = [];
        }

        return {
            push: _push,
            getHistorico: _getHistorico,
            limpar: _limpar
        };
    }

    return new Console();
});
