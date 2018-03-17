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
    $('.value').on('click', inputVal);
    $('#clearHist').on('click', clearHist);
}

function subAdd (){
    let x = $('#xVal').val();
    let y = $('#yVal').val();
    let valsAdd = {xValue: x, yValue: y, math: "Add"};
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

function subSubtract (){
    let x = $('#xVal').val();
    let y = $('#yVal').val();
    let valsAdd = {xValue: x, yValue: y, math: "Subtract"};
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

function subMultiply (){
    let x = $('#xVal').val();
    let y = $('#yVal').val();
    let valsAdd = {xValue: x, yValue: y, math: "Multiply"};
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

function subDivide (){
    let x = $('#xVal').val();
    let y = $('#yVal').val();
    let valsAdd = {xValue: x, yValue: y, math: "Divide"};
    console.log(valsAdd);
    $.ajax({
        type: 'POST',
        data: valsAdd,
        url: '/calc'
    }).done(function(response){
        console.log('Success!');
        getHist();
    })
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
    visual(a);
    
}

function visual (a) {
    $('#currentCalc').append(a);
}