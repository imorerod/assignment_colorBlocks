$(document).ready(function(){
    $('#blueBtn').on('click', blueBtnFunction);
    $('#greenBtn').on('click', greenBtnFunction);
    $('#redBtn').on('click', redBtnFunction);
    $('#yellowBtn').on('click', yellowBtnFunction);

});

let blueCount = 0;

function blueBtnFunction() {
    blueCount++;
    $('#blueCount').text('Blue Count: ' + blueCount);
    $('#container').append('<div class="box blue"></div>');
}

let greenCount = 0;

function greenBtnFunction(){
    greenCount++;
    $('#greenCount').text('Green Count: ' + greenCount);
    $('#container').append('<div class="box green"></div>');
}

let redCount = 0;

function redBtnFunction(){
    redCount++;
    $('#redCount').text('Red Count: ' + redCount);
    $('#container').append('<div class="box red"></div>');
}

let yellowCount = 0;

function yellowBtnFunction(){
    yellowCount++;
    $('#yellowCount').text('Yellow Count: ' + yellowCount);
    $('#container').append('<div class="box yellow"></div>');
}