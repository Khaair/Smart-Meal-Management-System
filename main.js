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


function Depsum1() {
    var summ1 = myArrDeposit1.reduce((a, b) => a + b, 0);

    document.getElementById('DepShow1').innerHTML = summ1;
    return summ1
}

function Depsum2() {
    var summ1 = myArrDeposit2.reduce((a, b) => a + b, 0);

    document.getElementById('DepShow2').innerHTML = summ1;
    return summ1
}



function Depsum3() {
    var summ1 = myArrDeposit3.reduce((a, b) => a + b, 0);

    document.getElementById('DepShow3').innerHTML = summ1;
    return summ1
}

function Depsum4() {
    var summ1 = myArrDeposit4.reduce((a, b) => a + b, 0);

    document.getElementById('DepShow4').innerHTML = summ1;
    return summ1
}

function Depsum5() {
    var summ1 = myArrDeposit5.reduce((a, b) => a + b, 0);

    document.getElementById('DepShow5').innerHTML = summ1;
    return summ1
}


function mealRate() {
    let mr1 = sumBazar()
    let mr2 = ttl()

    let mealRate = mr1 / mr2

    document.getElementById('showMealRate').innerHTML = mealRate + " Taka" + " Per" + " Meal";

    return mealRate
}

function cost1(){


    let costt  = mealRate()  * sum1()

    document.getElementById('CostShow1').innerHTML = costt;

    return costt

}

function cost2(){

    let costt  = mealRate()  * sum2()

    document.getElementById('CostShow2').innerHTML = costt;

    return costt

}


function cost3(){

    let costt  = mealRate()  * sum3()

    document.getElementById('CostShow3').innerHTML = costt;

    return costt

}


function cost4(){

    let costt  = mealRate()  * sum4()

    document.getElementById('CostShow4').innerHTML = costt;

    return costt

}


function cost5(){

    let costt  = mealRate()  * sum5()

    document.getElementById('CostShow5').innerHTML = costt;

    return costt

}





function PabeDebe1(){
    let PabeDebee = Depsum1() - cost1()

    document.getElementById('PabeDebeShow1').innerHTML = PabeDebee;

    return PabeDebee
}


function PabeDebe2(){
    let PabeDebee = Depsum2() - cost2()

    document.getElementById('PabeDebeShow2').innerHTML = PabeDebee;

    return PabeDebee
}




function PabeDebe3(){
    let PabeDebee = Depsum3() - cost3()

    document.getElementById('PabeDebeShow3').innerHTML = PabeDebee;

    return PabeDebee
}




function PabeDebe4(){
    let PabeDebee = Depsum4() - cost4()

    document.getElementById('PabeDebeShow4').innerHTML = PabeDebee;

    return PabeDebee
}




function PabeDebe5(){
    let PabeDebee = Depsum5() - cost5()

    document.getElementById('PabeDebeShow5').innerHTML = PabeDebee;

    return PabeDebee
}


function totalpabeDebe(){

    let  totalpabeDebe = PabeDebe1() + PabeDebe2() + PabeDebe3() + PabeDebe4() + PabeDebe5()

    document.getElementById('totalpabeDebeShow1').innerHTML = totalpabeDebe;

   

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



function DepCalculation2() {

    var inputText = document.getElementById('DepData2').value;

    let num = parseFloat(inputText)

    myArrDeposit2.push(num);

    var pval = "";

    for (i = 0; i < myArrDeposit2.length; i++) {
        pval = pval + myArrDeposit2[i]
    }

    document.getElementById('DepRes2').innerHTML = myArrDeposit2;
}

function DepCalculation3() {

    var inputText = document.getElementById('DepData3').value;

    let num = parseFloat(inputText)

    myArrDeposit3.push(num);

    var pval = "";

    for (i = 0; i < myArrDeposit3.length; i++) {
        pval = pval + myArrDeposit3[i]
    }

    document.getElementById('DepRes3').innerHTML = myArrDeposit3;
}


function DepCalculation4() {

    var inputText = document.getElementById('DepData4').value;

    let num = parseFloat(inputText)

    myArrDeposit4.push(num);

    var pval = "";

    for (i = 0; i < myArrDeposit4.length; i++) {
        pval = pval + myArrDeposit4[i]
    }

    document.getElementById('DepRes4').innerHTML = myArrDeposit4;
}


function DepCalculation5() {

    var inputText = document.getElementById('DepData5').value;

    let num = parseFloat(inputText)

    myArrDeposit5.push(num);

    var pval = "";

    for (i = 0; i < myArrDeposit5.length; i++) {
        pval = pval + myArrDeposit5[i]
    }

    document.getElementById('DepRes5').innerHTML = myArrDeposit5;
}