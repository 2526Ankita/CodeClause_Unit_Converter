function fun()
{
    var input=document.getElementById('input');
    var result=document.getElementById('result');
    var input1=document.getElementById('input1');
    var result1=document.getElementById('result1');
    var inpval1=input1[input1.selectedIndex].value;
    var inpval2=result1[result1.selectedIndex].value;
    if(inpval1=="Second"&&inpval2=="Second")
    {
        result.value=parseInt(input.value);
    }
    else if(inpval1=="Second" && inpval2=="Millisecond")
    {
        result.value=parseInt(input.value)*1000;
    }
    else if(inpval1=="Second" && inpval2=="Microsecond"){
        result.value=parseInt(input.value)*1000000;
    }
    else if(inpval1=="Second" && inpval2=="Minute"){
        result.value=parseInt(input.value)*0.0166666667;
    }
    else if(inpval1=="Second" && inpval2=="Hour"){
        result.value=parseInt(input.value)*0.0002777778;
    }
    else if(inpval1=="Millisecond" && inpval2=="Second"){
        result.value=parseInt(input.value)*0.001;
    }
    else if(inpval1=="Millisecond" && inpval2=="Millisecond"){
        result.value=parseInt(input.value);
    }
    else if(inpval1=="Millisecond" && inpval2=="Microsecond"){
        result.value=parseInt(input.value)*1000;
    }
    else if(inpval1=="Millisecond" && inpval2=="Minute"){
        result.value=parseInt(input.value)*0.0000166667;
    }
    else if(inpval1=="Millisecond" && inpval2=="Hour"){
        result.value=parseInt(input.value)*2.777777777E-7;
    }
    else if(inpval1=="Microsecond" && inpval2=="Second"){
        result.value=parseInt(input.value)*0.000001;
    }
    else if(inpval1=="Microsecond" && inpval2=="Millisecond"){
        result.value=parseInt(input.value)*0.001;
    }
    else if(inpval1=="Microsecond" && inpval2=="Microsecond"){
        result.value=parseInt(input.value);
    }
    else if(inpval1=="Microsecond" && inpval2=="Minute"){
        result.value=parseInt(input.value)*1.666666666E-8;
    }
    else if(inpval1=="Microsecond" && inpval2=="Hour"){
        result.value=parseInt(input.value)*2.777777777E-10;
    }
    else if(inpval1=="Minute" && inpval2=="Second"){
        result.value=parseInt(input.value)*60;
    }
    else if(inpval1=="Minute" && inpval2=="Millisecond"){
        result.value=parseInt(input.value)*60000;
    }
    else if(inpval1=="Minute" && inpval2=="Microsecond"){
        result.value=parseInt(input.value)*60000000;
    }
    else if(inpval1=="Minute" && inpval2=="Minute"){
        result.value=parseInt(input.value);
    }
    else if(inpval1=="Minute" && inpval2=="Hour"){
        result.value=parseInt(input.value)*0.0166666667;
    }
    else if(inpval1=="Hour" && inpval2=="Second"){
        result.value=parseInt(input.value)*3600;
    }
    else if(inpval1=="Hour" && inpval2=="Millisecond"){
        result.value=parseInt(input.value)*3600000;
    }
    else if(inpval1=="Hour" && inpval2=="Microsecond"){
        result.value=parseInt(input.value)*3600000000;
    }
    else if(inpval1=="Hour" && inpval2=="Minute"){
        result.value=parseInt(input.value)*60;
    }
    else if(inpval1=="Hour" && inpval2=="Hour"){
        result.value=parseInt(input.value);
    }
}