aviaoApp.controller('RadarCtrl', function() {

    var canvas = document.getElementById('radar');
    var ctx = canvas.getContext('2d');
    var parentCanvas = canvas.parentElement;

    var ALTURA = parentCanvas.clientHeight;
    var LARGURA = parentCanvas.clientWidth;

    canvas.width = LARGURA;
    canvas.height = ALTURA;

    function desenhaFundo(){
        ctx.fillStyle = "#000000";
        ctx.fillRect (0, 0, LARGURA, ALTURA );
    }

    function desenhaMarcacoes() {
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(LARGURA / 2,ALTURA / 2,40,0,Math.PI*2,true);
        ctx.closePath();
        ctx.stroke();

        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(LARGURA / 2,ALTURA / 2,100,0,Math.PI*2,true);
        ctx.closePath();
        ctx.stroke();

        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(LARGURA / 2,ALTURA / 2,160,0,Math.PI*2,true);
        ctx.closePath();
        ctx.stroke();

        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(LARGURA / 2,ALTURA / 2,220,0,Math.PI*2,true);
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = "#AA33DD";
        ctx.fillRect (LARGURA / 2, ALTURA / 2, 1, 1  );
    }

    function render() {
        desenhaFundo();
        desenhaMarcacoes();
    }

    function init() {
        render();
    }

    init();
});
