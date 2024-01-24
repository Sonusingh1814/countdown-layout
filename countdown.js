const endate="21 january 2025 00:00 AM";
const line=document.querySelector("#end");
const input1=document.querySelectorAll("input");

line.innerHTML=endate;

const clock=()=>
{
    const end= new Date(endate);
    const newdate=new Date()
    //console.log(end);
    //console.log(newdate);

    const dif=(end-newdate)/1000; // this is seconds
    //console.log(dif);

    // convert into days

    let days=Math.floor(dif/60/60/24);
    //console.log(days);
    input1[0].value=days;

// converts into hours
    let hour=Math.floor(dif/60/60%24)
    //console.log(hour);
    input1[1].value=hour;

    // concerts into min
    let min=Math.floor(dif/60%60)
    //console.log(min);
    input1[2].value=min;

    // convert into sec
    let sec=Math.floor(dif%60)
    //console.log(sec);
    input1[3].value=sec;
    




    
} 



const clockcheck=setInterval(()=>
{
    clock();


}, 1000);
