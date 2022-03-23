    // $$$$$$$$$$$$$$$$$$$$$$$$$$$ CACULATOR  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function add(firstInp,opertrs, secondInp){
    var x=document.getElementById(firstInp).value;
    var o=document.getElementById(opertrs).value;
    var y=document.getElementById(secondInp).value;
    if (x,o,y == "") {
        alert("Please Fill The Field")
    } else if(o == "+"){
        var answer = 0;
        answer=Number(x)+Number(y);
        document.getElementById("result").innerHTML = answer
    } else if (o == "-") {
        var answer = 0;
        answer=Number(x)-Number(y);
        document.getElementById("result").innerHTML = answer
    } else if (o == "*") {
       var answer = 0;
       answer=Number(x) * Number(y);
       document.getElementById("result").innerHTML= answer
    } else if (o == "/") {
        var answer = 0;
        answer=Number(x) / Number(y);
        document.getElementById("result").innerHTML= answer
    }
    else {
        document.getElementById("result").innerHTML = "Operator not matched."
    }

}