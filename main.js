'use strict';

const appResults= document.querySelector('.app-result');
const dayInput= document.querySelector('.day-input');
const monthInput= document.querySelector('.month-input');
const yearInput= document.querySelector('.year-input');
const button= document.querySelector('.btn');
const inputData=document.querySelector('.input-data');
// const input=document.querySelectorAll('.input');

const calcDaysPassed=(date1,date2)=>{
   const result= Math.abs((date2-date1)/(1000*60*60*24));
    console.log(result)
}

const errorDisplay=function(input){
    input.style.border='1px solid red';
    inputData.style.color='red';
    return setTimeout(function(){
        input.style.border='.1px solid var(--Offwhite)';
        inputData.style.color='var(--Smokeygrey)';
    },3000) 
}

button.addEventListener('click',function(e){
    console.log(e.target)
    let day=dayInput.value;
    let month=monthInput.value;
    let year=yearInput.value;

    if(year>2023 || year==='') return errorDisplay(yearInput);
    if(month>12 || month==='') return errorDisplay(monthInput);
    if(day>31 || day==='') return errorDisplay(dayInput);
    



    let now=new Date();
    let curYear=now.getFullYear();
    let curMonth=1+ now.getMonth();
    let curdate=now.getDate();
    
    let months=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(day>curdate){
        curdate=curdate+months[curMonth-1];
        curMonth=curMonth-1;
    }
    if(month>curMonth){
        curMonth=curMonth+12;
        curYear=curYear-1
    }
    
    // calcDaysPassed(new Date(curYear,month,day),new Date());
   let d=curdate-day;
   let m=curMonth-month;
   let y=curYear-year;



    const html=`
<div class="app-result secondary">
     <p><span>${y}</span> years</p>
     <p><span>${m}</span> month</p>
     <p><span>${d}</span> days</p>
</div>`
    appResults.innerHTML='';
    appResults.insertAdjacentHTML('afterbegin',html)
    
})




