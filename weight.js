function fun()
{
    var input=document.getElementById('input');
    var result=document.getElementById('result');
    var input1=document.getElementById('input1');
    var result1=document.getElementById('result1');
    var inpval1=input1[input1.selectedIndex].value;
    var inpval2=result1[result1.selectedIndex].value;
    if (inpval1 == "Gram" && inpval2 == "Gram") {
        result.value = parseInt(input.value);
      } else if (inpval1 == "Gram" && inpval2 == "Miligram") {
        result.value = parseInt(input.value) * 1000;
      } else if (inpval1 == "Gram" && inpval2 == "Kilogram") {
        result.value = parseInt(input.value) * 0.001;
      } else if (inpval1 == "Gram" && inpval2 == "Pound") {
        result.value = parseInt(input.value) * 0.002205;
      } else if (inpval1 == "Gram" && inpval2 == "Carrat") {
        result.value = parseInt(input.value) * 5;
      } else if (inpval1 == "Miligram" && inpval2 == "Gram") {
        result.value = parseInt(input.value) * 0.001;
      } else if (inpval1 == "Miligram" && inpval2 == "Miligram") {
        result.value = parseInt(input.value);
      } else if (inpval1 == "Miligram" && inpval2 == "Kilogram") {
        result.value = parseInt(input.value) * 0.000001;
      } else if (inpval1 == "Miligram" && inpval2 == "Pound") {
        result.value = parseInt(input.value) * 0.000002205;
      } else if (inpval1 == "Miligram" && inpval2 == "Carrat") {
        result.value = parseInt(input.value) * 0.05;
      } else if (inpval1 == "Kilogram" && inpval2 == "Gram") {
        result.value = parseInt(input.value) * 1000;
      } else if (inpval1 == "Kilogram" && inpval2 == "Miligram") {
        result.value = parseInt(input.value) * 1000000;
      } else if (inpval1 == "Kilogram" && inpval2 == "Kilogram") {
        result.value = parseInt(input.value);
      } else if (inpval1 == "Kilogram" && inpval2 == "Pound") {
        result.value = parseInt(input.value) * 2.20462;
      } else if (inpval1 == "Kilogram" && inpval2 == "Carrat") {
        result.value = parseInt(input.value) * 5000;
      } else if (inpval1 == "Pound" && inpval2 == "Gram") {
        result.value = parseInt(input.value) * 453.592;
      } else if (inpval1 == "Pound" && inpval2 == "Miligram") {
        result.value = parseInt(input.value) * 453592.37;
      } else if (inpval1 == "Pound" && inpval2 == "Kilogram") {
        result.value = parseInt(input.value) * 0.453592;
      } else if (inpval1 == "Pound" && inpval2 == "Pound") {
        result.value = parseInt(input.value);
      } else if (inpval1 == "Pound" && inpval2 == "Carrat") {
        result.value = parseInt(input.value) * 2267
      } 
      else if(inpval1=="Carrat" && inpval2=="Gram"){
        result.value=parseInt(input.value)*0.2;
      }
      else if(inpval1=="Carrat" && inpval2=="Miligram"){
        result.value=parseInt(input.value)*200;
      }
      else if(inpval1=="Carrat" && inpval2=="Kilogram"){
        result.value=parseInt(input.value)*0.0002;
      }
      else if(inpval1=="Carrat" && inpval2=="Pound"){
        result.value=parseInt(input.value)*0.0004409249;
      }
      else if(inpval1=="Carrat" && inpval2=="Carrat"){
        result.value=parseInt(input.value);
      }
}