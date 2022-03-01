var myArr1 = [];
var myArr2 = [];
var myArr3 = [];
var myArr4 = [];
var myArr5 = [];
var myArrBazar = [];
var myArrDeposit1 = [];
var myArrDeposit2 = [];
var myArrDeposit3 = [];
var myArrDeposit4 = [];
var myArrDeposit5 = [];

function sum1() {
    var summ1 = myArr1.reduce((a, b) => a + b, 0);

    document.getElementById('show1').innerHTML = summ1;
    return summ1
}


function ttl() {

    var xx = sum1() + sum2() + sum3() + sum4() + sum5()

    document.getElementById('show9').innerHTML = xx;

    return xx


}


function sum2() {
    var summ2 = myArr2.reduce((a, b) => a + b, 0);

    document.getElementById('show2').innerHTML = summ2;
    return summ2
}

function sum3() {
    var summ3 = myArr3.reduce((a, b) => a + b, 0);

    document.getElementById('show3').innerHTML = summ3;
    return summ3
}

function sum4() {
    var summ4 = myArr4.reduce((a, b) => a + b, 0);

    document.getElementById('show4').innerHTML = summ4;
    return summ4
}

function sum5() {
    var summ5 = myArr5.reduce((a, b) => a + b, 0);

    document.getElementById('show5').innerHTML = summ5;
    return summ5
}

function sumBazar() {
    var summBazar = myArrBazar.reduce((a, b) => a + b, 0);

    document.getElementById('showBazar').innerHTML = summBazar + " Taka"
    return summBazar
}


function mealRate() {
    let mr1 = sumBazar()
    let mr2 = ttl()

    let mealRate = mr1 / mr2

    document.getElementById('showMealRate').innerHTML = mealRate + " Taka" + " Per" + " Meal";
}





function Calculation1() {

    var inputText = document.getElementById('data1').value;

    let num = parseFloat(inputText)

    myArr1.push(num);

    var pval = "";

    for (i = 0; i < myArr1.length; i++) {
        pval = pval + myArr1[i]
    }

    document.getElementById('res1').innerHTML = myArr1;
}




function Calculation2() {

    var inputText = document.getElementById('data2').value;

    let num = parseFloat(inputText)

    myArr2.push(num);

    var pval = "";

    for (i = 0; i < myArr2.length; i++) {
        pval = pval + myArr2[i]
    }
    document.getElementById('res2').innerHTML = myArr2;
}


function Calculation3() {

    var inputText = document.getElementById('data3').value;

    let num = parseFloat(inputText)

    myArr3.push(num);

    var pval = "";

    for (i = 0; i < myArr3.length; i++) {
        pval = pval + myArr3[i]
    }
    document.getElementById('res3').innerHTML = myArr3;
}


function Calculation4() {

    var inputText = document.getElementById('data4').value;

    let num = parseFloat(inputText)

    myArr4.push(num);

    var pval = "";

    for (i = 0; i < myArr4.length; i++) {
        pval = pval + myArr3[i]
    }
    document.getElementById('res4').innerHTML = myArr4;
}


function Calculation5() {

    var inputText = document.getElementById('data5').value;

    let num = parseFloat(inputText)

    myArr5.push(num);

    var pval = "";

    for (i = 0; i < myArr5.length; i++) {
        pval = pval + myArr5[i]
    }
    document.getElementById('res5').innerHTML = myArr5;
}



function CalculationBazar() {

    var inputText = document.getElementById('data-bazar').value;

    let num = parseFloat(inputText)

    myArrBazar.push(num);

    var pval = "";

    for (i = 0; i < myArrBazar.length; i++) {
        pval = pval + myArrBazar[i]
    }
    document.getElementById('resBazar').innerHTML = myArrBazar;
}



function DepCalculation1() {

    var inputText = document.getElementById('DepData1').value;

    let num = parseFloat(inputText)

    myArrDeposit1.push(num);

    var pval = "";

    for (i = 0; i < myArrDeposit1.length; i++) {
        pval = pval + myArrDeposit1[i]
    }

    document.getElementById('DepRes1').innerHTML = myArrDeposit1;
}