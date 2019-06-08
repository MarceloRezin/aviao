aviaoApp.factory('Utils', function() {

    function Utils() {

        var POSSIBILIDADES_MATRICULA_BR = ['P', 'R', 'T', 'U'];

        function _getRandomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        }

        function _getRandomLetra() {
            return String.fromCharCode(_getRandomInteger(65, 90)); // A - Z
        }

        function _getRandomMatricula() {
            return 'P' + POSSIBILIDADES_MATRICULA_BR[_getRandomInteger(0,3)] + '-' + _getRandomLetra() + _getRandomLetra() + _getRandomLetra();
        }

        return {
            getRandomMatricula: _getRandomMatricula
        }

    }

    return new Utils();
});
