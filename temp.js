function fun()
{
    var input=document.getElementById('input');
    var result=document.getElementById('result');
    var input1=document.getElementById('input1');
    var result1=document.getElementById('result1');
    var inpval1=input1[input1.selectedIndex].value;
    var inpval2=result1[result1.selectedIndex].value;
    if(inpval1=="Celsius"&&inpval2=="Celsius")
    {
        result.value=parseInt(input.value);
    }
    else if(inpval1=="Celsius" && inpval2=="Kelvin")
    {
        result.value=parseInt(input.value) + 273.15;
    }
    else if(inpval1=="Celsius" && inpval2=="Fahrenheit"){
        result.value=parseInt(input.value) * 9 / 5 + 32;
    }
    else if(inpval1=="Kelvin" && inpval2=="Celsius"){
        result.value=parseInt(input.value) - 273.15;
    }
    else if(inpval1=="Kelvin" && inpval2=="Kelvin"){
        result.value=parseInt(input.value);
    }
    else if(inpval1=="Kelvin" && inpval2=="Fahrenheit"){
        result.value=parseInt(input.value) * 9 / 5 - 459.67;
    }
    else if(inpval1=="Fahrenheit" && inpval2=="Celsius"){
        result.value=(parseInt(input.value)-32)*5/9;
    }
    else if(inpval1=="Fahrenheit" && inpval2=="Kelvin"){
        result.value=(parseInt(input.value)-32)*5/9+273.15;
    }
    else if(inpval1=="Fahrenheit" && inpval2=="Fahrenheit"){
        result.value=parseInt(input.value);
    }
}