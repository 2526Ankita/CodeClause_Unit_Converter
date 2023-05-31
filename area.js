function fun()
{
    var input=document.getElementById('input');
    var result=document.getElementById('result');
    var input1=document.getElementById('input1');
    var result1=document.getElementById('result1');
    var inpval1=input1[input1.selectedIndex].value;
    var inpval2=result1[result1.selectedIndex].value;
    if(inpval1=="SquareMeter"&&inpval2=="SquareMeter")
    {
        result.value=parseInt(input.value);
    }
    else if(inpval1=="SquareMeter" && inpval2=="SquareCentimeter")
    {
        result.value=parseInt(input.value)*10000;
    }
    else if(inpval1=="SquareMeter" && inpval2=="SquareKilometer"){
        result.value=parseInt(input.value)*0.00001;
    }
    else if(inpval1=="SquareMeter" && inpval2=="SquareFoot"){
        result.value=parseInt(input.value)*10.764;
    }
    else if(inpval1=="SquareMeter" && inpval2=="SquareInch"){
        result.value=parseInt(input.value)*1550;
    }
    else if(inpval1=="SquareCentimeter" && inpval2=="SquareMeter"){
        result.value=parseInt(input.value)*0.0001;
    }
    else if(inpval1=="SquareCentimeter" && inpval2=="SquareCentimeter"){
        result.value=parseInt(input.value);
    }
    else if(inpval1=="SquareCentimeter" && inpval2=="SquareKilometer"){
        result.value=parseInt(input.value)*0.00000001;
    }
    else if(inpval1=="SquareCentimeter" && inpval2=="SquareFoot"){
        result.value=parseInt(input.value)*0.001076;
    }
    else if(inpval1=="SquareCentimeter" && inpval2=="SquareInch"){
        result.value=parseInt(input.value)*0.155;
    }
    else if(inpval1=="SquareKilometer" && inpval2=="SquareMeter"){
        result.value=parseInt(input.value)*1000000;
    }
    else if(inpval1=="SquareKilometer" && inpval2=="SquareCentimeter"){
        result.value=parseInt(input.value)*100000000000 ;
    }
    else if(inpval1=="SquareKilometer" && inpval2=="SquareKilometer"){
        result.value=parseInt(input.value);
    }
    else if(inpval1=="SquareKilometer" && inpval2=="SquareFoot"){
        result.value=parseInt(input.value)*10763910.42;
    }
    else if(inpval1=="SquareKilometer" && inpval2=="SquareInch"){
        result.value=parseInt(input.value)*1550003100.39;
    }
    else if(inpval1=="SquareFoot" && inpval2=="SquareMeter"){
        result.value=parseInt(input.value)*0.0929;
    }
    else if(inpval1=="SquareFoot" && inpval2=="SquareCentimeter"){
        result.value=parseInt(input.value)*929.03;
    }
    else if(inpval1=="SquareFoot" && inpval2=="SquareKilometer"){
        result.value=parseInt(input.value)*0.0000000929;
    }
    else if(inpval1=="SquareFoot" && inpval2=="SquareFoot"){
        result.value=parseInt(input.value);
    }
    else if(inpval1=="SquareFoot" && inpval2=="SquareInch"){
        result.value=parseInt(input.value)*144;
    }
    else if (inpval1 == "SquareInch" && inpval2 == "SquareMeter") {
        result.value = parseInt(input.value) / 1550;
    }
    else if (inpval1 == "SquareInch" && inpval2 == "SquareCentimeter") {
        result.value = parseInt(input.value) * 6.452;
    }
    else if (inpval1 == "SquareInch" && inpval2 == "SquareKilometer") {
        result.value = parseInt(input.value) / 1.55e+9;
    }
    else if (inpval1 == "SquareInch" && inpval2 == "SquareFoot") {
        result.value = parseInt(input.value) / 144;
    }
    else if (inpval1 == "SquareInch" && inpval2 == "SquareInch") {
        result.value = parseInt(input.value);
    }
}