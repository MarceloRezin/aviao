aviaoApp.controller('RadarCtrl', function($scope, AviaoService) {

    $scope.pause = false;

    $scope.invertePause = function () {
        $scope.pause = !$scope.pause;
    };

    var aviaoIco = document.getElementById('aviao');

    var canvas = document.getElementById('radar');
    var ctx = canvas.getContext('2d');
    var parentCanvas = canvas.parentElement;

    var ALTURA = parentCanvas.clientHeight;
    var LARGURA = parentCanvas.clientWidth;

    var MEIA_ALTURA = ALTURA / 2;
    var MEIA_LARGURA = LARGURA / 2;

    canvas.width = LARGURA;
    canvas.height = ALTURA;

    var FPS = 10;
    var METROS_POR_PX = 100;

    console.log(LARGURA);

    function desenhaFundo(){
        ctx.fillStyle = "#000000";
        ctx.fillRect (0, 0, LARGURA, ALTURA );

        if($scope.pause){
            ctx.beginPath();
            ctx.strokeStyle = '#FF5722';
            ctx.lineWidth = 15;
            ctx.rect(0, 0, LARGURA, ALTURA);
            ctx.stroke();
        }
    }

    function desenhaCentro(){
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();

        ctx.translate(MEIA_LARGURA, MEIA_ALTURA);

        ctx.arc(0,0,2,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();

        ctx.translate(- MEIA_LARGURA, - MEIA_ALTURA);
    }

    function desenhaMarcacoes() {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 2;

        var i;
        for(i=0; i<4; i++){
            ctx.beginPath();
            ctx.arc(LARGURA / 2,ALTURA / 2,40 + (60 * i),0,Math.PI*2,true);
            ctx.closePath();
            ctx.stroke();
        }

        i--;

        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.translate(LARGURA / 2, ALTURA / 2);

        for(var j=0; j<8; j++){
            ctx.fillRect (0, -1, 40 + (60 * i) , 2);
            ctx.rotate(  45 *   Math.PI / 180);
        }

        ctx.rotate(  0);

        for(var k=0; k<24; k++){
            ctx.fillRect (40 + (60 * i), -1, 10 , 2);
            ctx.rotate(  15 *   Math.PI / 180);
        }

        ctx.fillStyle = "#FFFFFF";
        ctx.font = '10px serif';

        ctx.rotate(  0);

        for(var l=90, m= 0; m<18; l+=15, m++){
            ctx.fillText(l, -6,  - (55 + (60 * i)));
            ctx.rotate(  - 15 * Math.PI / 180);
        }

        for(var n=0, o= 0; o<6; n+=15, o++){
            ctx.fillText(n, -6,  - (55 + (60 * i)));
            ctx.rotate(  - 15 * Math.PI / 180);
        }

        ctx.rotate(0);
    }

    function desenharAvioes() {
        var avioes = AviaoService.getAvioes();

        for(var i=0; i<avioes.length; i++){
            ctx.save();

            var aviao = avioes[i];

            var x = aviao.getX();
            var y = - aviao.getY();
            ctx.translate(x, y);

            if(!$scope.pause){
                //Movimenta o avião
                var raio = aviao.getVelocidadeMS() / METROS_POR_PX / FPS;
                aviao.setX(x + toXPolar(raio, aviao.getDirecao()));
                aviao.setY(aviao.getY() + toYPolar(raio, aviao.getDirecao()));
            }

            if(aviao.getVisivel()){
                desenhaTextoAviao(aviao, x, y);
                ctx.rotate(- aviao.getDirecao() * Math.PI / 180);
                ctx.drawImage(aviaoIco, - aviao.getLargura() / 2, - aviao.getAltura() / 2, aviao.getLargura(), aviao.getAltura());
            }

            ctx.restore();
        }
    }

    function desenhaTextoAviao(aviao, x, y) {
        ctx.font = '9px Courier New';
        ctx.fillText(aviao.getMatricula(), -15, 15);
        ctx.fillText(aviao.getVelocidade() + ' Km/h', -15, 23);
        ctx.fillText('X: ' + Math.floor(x), -15, 31);
        ctx.fillText('Y: ' + Math.floor(y) * -1, -15, 39);
        ctx.fillText('D: ' + aviao.getDirecao() + '°', -15, 47);
    }

    function render() {
        desenhaFundo();
        desenhaCentro();
        desenhaMarcacoes();
        desenharAvioes();

        ctx.translate(- MEIA_LARGURA, - MEIA_ALTURA);

        setTimeout(function () {
            render();
        }, 1000 / FPS);
    }

    function init() {
        render();
    }

    // X = raio * cos(angulo)
    function toXPolar(raio, angulo){
        return raio * Math.cos( angulo * Math.PI/180 );
    }

    // Y = r . sin(angulo)
    function toYPolar(raio, angulo){
        return raio * Math.sin( angulo * Math.PI/180 );
    }

    init();
});
