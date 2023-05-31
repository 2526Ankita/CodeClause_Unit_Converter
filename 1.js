function fun(temp) {
    var temp=document.getElementById("input").value;
     console.log(temp);
    document.getElementById("Celsius").innerHTML=temp;
    document.getElementById("Fahrenheit").innerHTML=temp * 9 / 5 + 32;
    document.getElementById("Kelvin").innerHTML=temp + 273.15;
}