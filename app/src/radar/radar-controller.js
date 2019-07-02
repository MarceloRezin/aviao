aviaoApp.controller('RadarCtrl', function() {

    var canvas = document.getElementById('radar');
    var ctx = canvas.getContext('2d');
    var parentCanvas = canvas.parentElement;

    var ALTURA = parentCanvas.clientHeight;
    var LARGURA = parentCanvas.clientWidth;

    var MEIA_ALTURA = ALTURA / 2;
    var MEIA_LARGURA = LARGURA / 2;

    canvas.width = LARGURA;
    canvas.height = ALTURA;

    function desenhaFundo(){
        ctx.fillStyle = "#000000";
        ctx.fillRect (0, 0, LARGURA, ALTURA );
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
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
        ctx.lineWidth = 2;

        var i;
        for(i=0; i<4; i++){
            ctx.beginPath();
            ctx.arc(LARGURA / 2,ALTURA / 2,40 + (60 * i),0,Math.PI*2,true);
            ctx.closePath();
            ctx.stroke();
        }

        i--;

        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
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
    }

    function render() {
        desenhaFundo();
        desenhaCentro();
        desenhaMarcacoes();
    }

    function init() {
        render();
    }

    init();
});
