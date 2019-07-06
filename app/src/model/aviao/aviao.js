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
      if(this.x == null){
        return this.raio*Math.cos(this.raio);
      }
        return this.x;
    };

    Aviao.prototype.setX = function (x) {
        this.x = x;
    };

    Aviao.prototype.getY = function () {
      if(this.y == null){
        return this.raio*Math.sen(this.raio);
      }
        return this.y;
    };

    Aviao.prototype.setY = function (y) {
        this.y = y;
    };

    Aviao.prototype.getRaio = function () {
      if(this.raio == null){
        return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
      }
        return this.raio;
    };

    Aviao.prototype.setRaio = function (raio) {
        this.raio = raio;
    };

    Aviao.prototype.getAngulo = function () {
      if(this.angulo == null){
        return Math.atan2( this.x , this.y )*180.0/Math.PI;
      }
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

    Aviao.prototype.getVelocidadeMS = function () {
        if(!this.velocidade){
            return 0;
        }

        return this.velocidade / 3.6;
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
        this.x *= x / 100;
        this.y *= y / 100;
    };

    Aviao.prototype.rotacionar = function (x, y, angulo) {
        // this.translandar( x * -1,y * -1);


        var a = Math.atan2( this.x , this.y )*180.0/Math.PI;
        var r = Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));

        a *= -1;

        a +=  angulo;

        console.log(a);

        if(a < 0 ){
          a += 360;
        }

        this.x = r * Math.cos( a * Math.PI/180 );
        this.y = r * Math.sin( a * Math.PI/180 );

        // this.x = (this.x * Math.cos(angulo * Math.PI / 180)) - (this.y * Math.sin(angulo * Math.PI / 180));
        // this.y = (this.y * Math.cos(angulo * Math.PI / 180)) + (this.x * Math.sin(angulo * Math.PI / 180));

        // this.translandar(x,y);
    };

    Aviao.prototype.getVisivel = function () {
        if(this.visivel == null){
            this.visivel = true;
        }

        return this.visivel;
    };

    Aviao.prototype.setVisivel = function (visivel) {
        this.visivel = visivel;
    };



    return Aviao;
});
