$(document).ready(readyNow);

function readyNow(){
    console.log('READY NOW!!!');
    clickHandler();
    getHist();
}

function clickHandler() {
    $('#add').on('click', subAdd);
    $('#sub').on('click', subSubtract);
    $('#mult').on('click', subMultiply);
    $('#div').on('click', subDivide);
    $('#equal').on('click', equalEntry);
    $('.value').on('click', inputVal);
    $('#clearHist').on('click', clearHist);
    $('#clearBtn').on('click', emptyCalc);
}

function emptyCalc (){
    $('#xVal').empty();
    $('#yVal').empty();
    $('#operator').empty();
}

function equalEntry () {
    sendData();
    $('#xVal').empty();
    $('#yVal').empty();
    $('#operator').empty();
    // $.ajax({
    //     type: 'GET',
    //     url: '/calc'
    // }).done(function(response){
    //     appendHist(response);
    // })
}

function subAdd (){
    if ($('#operator').text() == ''){
    $('#operator').append(' ' + $(this).text() + ' ');
    }
}

function subSubtract (){
    let x = $('#xVal').val();
    let y = $('#yVal').val();
    let valsAdd = {xValue: x, yValue: y, math: "Subtract"};
    console.log(valsAdd);
    if ($('#operator').text() == ''){
    $('#operator').append(' ' + $(this).text() + ' ');
    }
}

function subMultiply (){
    let x = $('#xVal').val();
    let y = $('#yVal').val();
    let valsAdd = {xValue: x, yValue: y, math: "Multiply"};
    console.log(valsAdd);
    if ($('#operator').text() == ''){
        $('#operator').append(' ' + $(this).text() + ' ');
    }
}

function subDivide (){
    let x = $('#xVal').val();
    let y = $('#yVal').val();
    let valsAdd = {xValue: x, yValue: y, math: "Divide"};
    console.log(valsAdd);
    if ($('#operator').text() == ''){
    $('#operator').append(' ' + $(this).text() + ' ');
    }
}

function getHist(){
    $.ajax({
        type: 'GET',
        url: '/calc'
    }).done(function(response){
        appendHist(response);
    })
}

function appendHist(response){
    $('#history').empty();
    for (i of response){
        $('#history').append('<li>' + i + '</li>');
    }
}

function clearHist(){
    $.ajax({
        type: 'POST',
        url: '/clear'
    }).done(function(response){
        getHist()
    })
}

function inputVal () {
    let a = $(this).text();
    if ($('#operator').text() == ''){
        $('#xVal').append(a);
    } else {
        $('#yVal').append(a);
    }
    // $('#currentCalc').append(a);
    console.log($('#operator').length);
}

function sendData(){
    let x = $('#xVal').text();
    let y = $('#yVal').text();
    let math = $('#operator').text();
    let valsAdd = {xValue: x, yValue: y, math: math};
    console.log(valsAdd);
    $.ajax({
        type: 'post',
        data: valsAdd,
        url: '/calc'
    }).done(function(response){
        console.log('Success!');
        getHist();
    })
}