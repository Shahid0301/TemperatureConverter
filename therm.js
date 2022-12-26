function convert(){
    const tempNum=document.getElementById('Ntemp').value;
    const fromTemp=document.getElementById('fromtemp').value;
    const selectedTemp=document.getElementById('temp').value;
    if(fromTemp==="far" && selectedTemp==="cel" ){
        const calTemp=Math.round((tempNum*9/5)+32);
        document.getElementById('result').innerHTML=`= ${calTemp} °Celcius`
    }else if(fromTemp==="cel" && selectedTemp==="far"){
        const calTemp=Math.round((tempNum-32)*5/9);
        document.getElementById('result').innerHTML=`= ${calTemp} °Fahrenheit`
    }
    else{
        var t="";
        if(selectedTemp==='far'){
            var t="Fahrenheit";
        }
        else{
            var t="Celcius";
        }
        document.getElementById('result').innerHTML=`${tempNum} °${t}`
    }
    }
    
var tempIcon=()=>{
    const addicon=document.getElementById("icon");
    addicon.innerHTML="<i class='fa fa-thermometer-0'></i>";
    addicon.style.color="#91D8Ef";
    
    
    setTimeout(()=>{
        addicon.innerHTML="<i class='fa fa-thermometer-1'></i>"; 
    },1000);
    setTimeout(()=>{
        addicon.innerHTML="<i class='fa fa-thermometer-2'></i>"; 
    },2000);
    setTimeout(()=>{
        addicon.innerHTML="<i class='fa fa-thermometer-3'></i>"; 
        addicon.style.color="#f8b627";
    },3000);
    setTimeout(()=>{
        addicon.innerHTML="<i class='fa fa-thermometer-4'></i>";
        addicon.style.color="red";
    },4000);
}
tempIcon();
setInterval(tempIcon,5000);



