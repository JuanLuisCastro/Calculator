let num = [];
let valueTmp;


let value1;
let value2;
let operator;

// Intruducir números
function number(valor){
    num.push(valor);
    let value = num[0];
    let valueTotal = value;

    for (let i=1; i<num.length; i++){
        valueTotal = valueTotal.concat(num[i]);
    }
    valueTmp = parseFloat(valueTotal);
    document.getElementById("screen").innerHTML = valueTmp;
}

function operation (value){
    value1 = valueTmp;
    if (value == "division"){
        operator = "/";
    }else if(value == "multiply"){
        operator = "x";
    }else if(value == "sum"){
        operator = "+";
    }else if(value == "rest"){
        operator = "-";
    }
    document.getElementById("screen").innerHTML = operator;
    num = [];
} 

function result(){
    value2 = valueTmp;
    let result = calculadora(operator, value1, value2)
    valueTmp = result;
    document.getElementById("screen").innerHTML = valueTmp;
}

function reset(){
    value1 = 0;
    value2 = 0;
    num = [];
    document.getElementById("screen").innerHTML = 0;
}

// Función calculadora ----------------------------------------------
function calculadora(operator, value1, value2){
    if (operator == "-"){
        return value1 - value2;
    }else if (operator == "+"){
        return value1 + value2;
    }else if (operator == "x"){
        return value1 * value2;
    }else if (operator == "/"){
        if (value2 == 0){ // Si el denominador es 0 el resultado es indeterminado
            return "Error";
        }else{
            return value1 / value2;           
            
        }
    }
}
//-------------------------------------------------------------------