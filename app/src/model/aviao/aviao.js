aviaoApp.factory('Aviao', function(Utils) {

    /**
     * Classe que representa a modelagem de um aviao com todos os seu atributos
     * @constructor
     */
    function Aviao() {
        this.matricula = Utils.getRandomMatricula();
        this.selecionado = true;
    }

    Aviao.prototype.getX = function () {
        return this.x;
    };

    Aviao.prototype.setX = function (x) {
        this.x = x;
    };

    Aviao.prototype.getY = function () {
        return this.y;
    };

    Aviao.prototype.setY = function (y) {
        this.y = y;
    };

    Aviao.prototype.getRaio = function () {
        return this.raio;
    };

    Aviao.prototype.setRaio = function (raio) {
        this.raio = raio;
    };

    Aviao.prototype.getAngulo = function () {
        return this.angulo;
    };

    Aviao.prototype.setAngulo = function (angulo) {
        this.angulo = angulo;
    };

    Aviao.prototype.getVelocidade = function () {
        return this.velocidade
    };

    Aviao.prototype.setVelocidade = function (velocidade) {
        this.velocidade = velocidade;
    };

    Aviao.prototype.getDirecao = function () {
        return this.direcao
    };

    Aviao.prototype.setDirecao = function (direcao) {
        this.direcao = direcao;
    };

    Aviao.prototype.getMatricula = function () {
        return this.matricula;
    };

    Aviao.prototype.getAltura = function () {

        if(this.altura == null){
            this.altura = 10;
        }

        return this.altura;
    };

    Aviao.prototype.setAltura = function (altura) {
        this.altura = altura;
    };

    Aviao.prototype.getLargura = function () {

        if(this.largura == null){
            this.largura = 10;
        }

        return this.largura;
    };

    Aviao.prototype.setLargura = function (largura) {
        this.largura = largura;
    };

    Aviao.prototype.isSelecionado = function () {
        return this.selecionado;
    };

    Aviao.prototype.inverterSelecao = function () {
        return this.selecionado = !this.selecionado;
    };

    Aviao.prototype.translandar = function (x, y) {
        this.x += x;
        this.y += y;
    };

    Aviao.prototype.escalonar = function (x,y) {        
       this.largura += this.largura * x/100;
       this.altura += this.altura * y/100; 
    };

    Aviao.prototype.rotacionar = function (x, y, angulo) {
        this.translandar(x,y);

        this.x = this.x * Math.cos(angulo * Math.PI / 180) - this.y * Math.sin(angulo * Math.PI / 180);
        this.y = this.y * Math.cos(angulo * Math.PI / 180) + this.x * Math.sin(angulo * Math.PI / 180);

        this.translandar( x * -1,  y* -1);
    };

    return Aviao;
});
