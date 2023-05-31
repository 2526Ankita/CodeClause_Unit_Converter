function fun()
{
    var input=document.getElementById('input');
    var result=document.getElementById('result');
    var input1=document.getElementById('input1');
    var result1=document.getElementById('result1');
    var inpval1=input1[input1.selectedIndex].value;
    var inpval2=result1[result1.selectedIndex].value;
    if(inpval1=="CubicMeter" && inpval2=="CubicMeter") {
        result.value=parseFloat(input.value);
    } else if(inpval1=="CubicMeter" && inpval2=="CubicCentimeter") {
        result.value=parseFloat(input.value)*1000000;
    } else if(inpval1=="CubicMeter" && inpval2=="CubicKilometer") {
        result.value=parseFloat(input.value)*0.000000001;
    } else if(inpval1=="CubicMeter" && inpval2=="CubicFoot") {
        result.value=parseFloat(input.value)*35.315;
    } else if(inpval1=="CubicMeter" && inpval2=="CubicInch") {
        result.value=parseFloat(input.value)*61024;
    } else if(inpval1=="CubicCentimeter" && inpval2=="CubicMeter") {
        result.value=parseFloat(input.value)*0.000001;
    } else if(inpval1=="CubicCentimeter" && inpval2=="CubicCentimeter") {
        result.value=parseFloat(input.value);
    } else if(inpval1=="CubicCentimeter" && inpval2=="CubicKilometer") {
        result.value=parseFloat(input.value)*0.0000000001;
    } else if(inpval1=="CubicCentimeter" && inpval2=="CubicFoot") {
        result.value=parseFloat(input.value)*0.000035;
    } else if(inpval1=="CubicCentimeter" && inpval2=="CubicInch") {
        result.value=parseFloat(input.value)*0.061;
    } else if(inpval1=="CubicKilometer" && inpval2=="CubicMeter") {
        result.value=parseFloat(input.value)*1000000000;
    } else if(inpval1=="CubicKilometer" && inpval2=="CubicCentimeter") {
        result.value=parseFloat(input.value)*1000000000000;
    } else if(inpval1=="CubicKilometer" && inpval2=="CubicKilometer") {
        result.value=parseFloat(input.value);
    } else if(inpval1=="CubicKilometer" && inpval2=="CubicFoot") {
        result.value=parseFloat(input.value)*35314666721.6;
    } else if(inpval1=="CubicKilometer" && inpval2=="CubicInch") {
        result.value=parseFloat(input.value)*610237440947.2;
    } else if(inpval1=="CubicFoot" && inpval2=="CubicMeter") {
        result.value=parseFloat(input.value)*0.0283168;
    } else if(inpval1=="CubicFoot" && inpval2=="CubicCentimeter") {
        result.value=parseFloat(input.value)*28316.8;
    } else if(inpval1=="CubicFoot" && inpval2=="CubicKilometer") {
        result.value=parseFloat(input.value)*0.000000000853168;
    } else if(inpval1=="CubicFoot" && inpval2=="CubicFoot") {
        result.value=parseFloat(input.value);
    } else if(inpval1=="CubicFoot" && inpval2=="CubicInch") {
        result.value=parseFloat(input.value)*1728;
    } else if(inpval1=="CubicInch" && inpval2=="CubicMeter") {
        result.value=parseFloat(input.value)*0.0000163871;
    } else if (inpval1 == "CubicInch" && inpval2 == "CubicCentimeter") {
        result.value = parseInt(input.value) * 16.387064;
    } else if (inpval1 == "CubicInch" && inpval2 == "CubicKilometer") {
        result.value = parseInt(input.value) / 61023744000;
    } else if (inpval1 == "CubicInch" && inpval2 == "CubicFoot") {
        result.value = parseInt(input.value) / 1728;
    } else if (inpval1 == "CubicInch" && inpval2 == "CubicInch") {
        result.value = parseInt(input.value);
    }
}