function bonus(){
    let s=parseInt(document.getElementById("sal").value)
    let e=parseInt(document.getElementById("exp").value)
    let res=document.getElementById("tot")
    if (e>=5){
        let a=s*5/100
        let ts=a+s
        res.innerHTML=`this Month Salary =${ts}`
    }      
    else{
        res.innerHTML='No Change in salary'     
    }
}
function elebill(){
    let a=parseInt(document.getElementById("unit").value)
    let div=document.getElementById("div")

    if (a<=100){
        div.innerHTML=`Your Bill Amount is 0`
    }
    else{
        if (a<=200 && a>100){
            let up=a-100
            let ua=up*5
            div.innerHTML=`Your Bill amount is =${ua}`
        }
        else{
            let ui=a-200
            let us=ui*10+500
            div.innerHTML=`Your Bill amount is =${us}`
        }
    }
}

function div3(){
    let a=parseInt(document.getElementById("num").value)
    let com=document.getElementById("com")

    a=a%10
    let b=a%3
    if (a===0){
        com.innerHTML='this number is not divisible by 3'
    }
    else if (b===0){
        com.innerHTML='this number is divisible by 3'
    }
    else{
        com.innerHTML="this number is not divivsible by 3"
    }
        
}

function city(){
    let a=document.getElementById("city").value.toLowerCase()
    let dis=document.getElementById("dis")
    if (a==="delhi"){
        dis.innerHTML="monuments is : 'Redfort'"
    }
    else if (a==="agra"){
        dis.innerHTML="monuments is : 'Taj Mahal'"
    }
    else if (a==="jaipur"){
        dis.innerHTML="monuments is : 'jal mahal'"
    }      
    else{
        dis.innerHTML="Invalid"
    }
        
}
function week(){
    let a=parseInt(document.getElementById("week").value)
    let dis=document.getElementById("dis1")
    if (a===1){
        dis.innerHTML="Sunday"
    }   
    else if (a===2){
        dis.innerHTML="Monday"        
    }
    else if (a===3){
        dis.innerHTML="Tuesday"
    }
    else if (a===4){
        dis.innerHTML="Wednesday"
    }
    else if (a===5){
        dis.innerHTML="Thursday"
    }
    else if (a===6){
        dis.innerHTML="Friday"
    }
    else if (a===7){
        dis.innerHTML="Saturday"
    }
    else{
        dis.innerHTML="Invalid"
    }
}
function prdbill(){
    let a=parseInt(document.getElementById("bill1").value)
    let dis2=document.getElementById("dis2")
    let dis3=document.getElementById("dis3")

    if (a>100000){
        b=a*15/100
        total=a+b
        dis2.innerHTML=`Ex-Showroom Price = ${a} and tax amount is = ${b}`
        dis3.innerHTML=`total amount=${total}`

    }
    else if (a>50000 && a<=100000){
        b=a*10/100
        total=a+b
        dis2.innerHTML=`Ex-Showroom Price = ${a} and tax amount is = ${b}`
        dis3.innerHTML=`total amount=${total}`
    }
    else{
        b=a*5/100
        total=a+b
         dis2.innerHTML=`Ex-Showroom Price = ${a} and tax amount is = ${b}`
        dis3.innerHTML=`total amount=${total}`
    }
}

function odd(){
    console.clear()
    let a=parseInt(document.getElementById('fnum').value)
    let b=parseInt(document.getElementById('lnum').value)
    for(let i=a;i<=b;i++){
        if(i%2!==0){
            console.log(i);  
        }
    }
}
function even(){
    console.clear()
    let a=parseInt(document.getElementById('fnum').value)
    let b=parseInt(document.getElementById('lnum').value)
    for(let i=a;i<=b;i++){
        if(i%2===0){
            console.log(i);  
        }
    }
}
function mul(){
    let a=parseInt(document.getElementById('fnum1').value)
    let b=parseInt(document.getElementById('lnum1').value)
    for(let i=1;i<=b;i++){
        console.log(`${a}*${i}=${a*i}`);
    }
}

// function rev() {
//     let a = document.getElementById('fnum1').value;  
//     i=0
//     let l = a.length;
//     b=a.split("").reverse().join("")
//     while (i<l){
//         console.log(b[i]);
//         i+=1
//     }
// }