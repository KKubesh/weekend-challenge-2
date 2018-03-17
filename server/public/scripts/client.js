$(document).ready(readyNow);

function readyNow(){
    console.log('READY NOW!!!');
    clickHandler();
}

function clickHandler() {
    $('#add').on('click', subAdd);
    $('#sub').on('click', subSubtract);
    $('#mult').on('click', subMultiply);
    $('#div').on('click', subDivide);
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
    })
}

function subDivide (){
    let x = $('#xVal').val();
    let y = $('#yVal').val();
    let valsAdd = {xValue: x, yValue: y, math: "Divide"};
    console.log(valsAdd);
    $.ajax({
        type: 'post',
        data: valsAdd,
        url: '/calc'
    }).done(function(response){
        console.log('Success!');
        
    })
}