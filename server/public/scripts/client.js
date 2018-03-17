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
    let valsAdd = {xValue: x, yValue: y, Math: "Add"};
    console.log(valsAdd);
    
}

function subSubtract (){
    let x = $('#xVal').val();
    let y = $('#yVal').val();
    let valsAdd = {xValue: x, yValue: y, Math: "Subtract"};
    console.log(valsAdd);
}

function subMultiply (){
    let x = $('#xVal').val();
    let y = $('#yVal').val();
    let valsAdd = {xValue: x, yValue: y, Math: "Multiply"};
    console.log(valsAdd);
}

function subDivide (){
    let x = $('#xVal').val();
    let y = $('#yVal').val();
    let valsAdd = {xValue: x, yValue: y, Math: "Divide"};
    console.log(valsAdd);
}