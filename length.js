function fun()
{
    var input=document.getElementById('input');
    var result=document.getElementById('result');
    var input1=document.getElementById('input1');
    var result1=document.getElementById('result1');
    var inpval1=input1[input1.selectedIndex].value;
    var inpval2=result1[result1.selectedIndex].value;
    if(inpval1=="Meter"&&inpval2=="Meter")
    {
        result.value=parseInt(input.value);
    }
    else if(inpval1=="Meter" && inpval2=="Centimeter")
    {
        result.value=parseInt(input.value)*100;
    }
    else if(inpval1=="Meter" && inpval2=="Kilometer"){
        result.value=parseInt(input.value)*0.001;
    }
    else if(inpval1=="Meter" && inpval2=="Foot"){
        result.value=parseInt(input.value)*3.281;
    }
    else if(inpval1=="Meter" && inpval2=="Inch"){
        result.value=parseInt(input.value)*39.37;
    }
    else if(inpval1=="Centimeter" && inpval2=="Meter"){
        result.value=parseInt(input.value)*0.01;
    }
    else if(inpval1=="Centimeter" && inpval2=="Centimeter"){
        result.value=parseInt(input.value);
    }
    else if(inpval1=="Centimeter" && inpval2=="Kilometer"){
        result.value=parseInt(input.value)/100000;
    }
    else if(inpval1=="Centimeter" && inpval2=="Foot"){
        result.value=parseInt(input.value)/30.48;
    }
    else if(inpval1=="Centimeter" && inpval2=="Inch"){
        result.value=parseInt(input.value)/2.54;
    }
    else if(inpval1=="Kilometer" && inpval2=="Meter"){
        result.value=parseInt(input.value)*1000;
    }
    else if(inpval1=="Kilometer" && inpval2=="Centimeter"){
        result.value=parseInt(input.value)*100000;
    }
    else if(inpval1=="Kilometer" && inpval2=="Kilometer"){
        result.value=parseInt(input.value);
    }
    else if(inpval1=="Kilometer" && inpval2=="Foot"){
        result.value=parseInt(input.value)*3281;
    }
    else if(inpval1=="Kilometer" && inpval2=="Inch"){
        result.value=parseInt(input.value)*39370;
    }
    else if(inpval1=="Foot" && inpval2=="Meter"){
        result.value=parseInt(input.value)/3.281;
    }
    else if(inpval1=="Foot" && inpval2=="Centimeter"){
        result.value=parseInt(input.value)*30.48;
    }
    else if(inpval1=="Foot" && inpval2=="Kilometer"){
        result.value=parseInt(input.value)/3281;
    }
    else if(inpval1=="Foot" && inpval2=="Foot"){
        result.value=parseInt(input.value);
    }
    else if(inpval1=="Foot" && inpval2=="Inch"){
        result.value=parseInt(input.value)*12;
    }
    else if(inpval1=="Inch" && inpval2=="Meter"){
        result.value=parseInt(input.value)/39.37;
    }
    else if(inpval1=="Inch" && inpval2=="Centimeter"){
        result.value=parseInt(input.value)*2.54;
    }
    else if(inpval1=="Inch" && inpval2=="Kilometer"){
        result.value=parseInt(input.value)/39370;
    }
    else if(inpval1=="Inch" && inpval2=="Foot"){
        result.value=parseInt(input.value)/12;
    }
    else if(inpval1=="Inch" && inpval2=="Inch"){
        result.value=parseInt(input.value);
    }
}