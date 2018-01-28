var time = 500;
var i = 1;

$("document").ready(function () {
    setInterval(function () {
        if (i < 6) {
            $("#" + i).css({"display": "block"});
            i++;
        }
    },time);
});

function Click() {
    $("#comunity").mousedown(function () {
        $("#comunity").css({"background": "url('img/border.png')"});
    });
    $("#buynow").mousedown(function () {
        $("#buynow").css({"background": "url('img/border.png')"});
    });
    $("#features").mousedown(function () {
        $("#features").css({"background": "url('img/border.png')"});
    });
}

function UpClick() {
    $("#comunity").mouseup(function () {
        $("#comunity").css({"background": "none"});
    });
    $("#buynow").mouseup(function () {
        $("#buynow").css({"background": "none"});
    });
    $("#features").mouseup(function () {
        $("#features").css({"background": "none"});
    });
}