const btnTag = document.querySelector(".btn");
const resultTag = document.querySelector("#calculateResult");
const inputTag = document.querySelector(".inputGp");
let date = new Date();
let currentDate;
let currentMonth;
let currentYear;
let d3,m3,y3;
let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

btnTag.onclick = () => {
   
    let dd = Number(document.querySelector(".dd").value);
    let mm = Number(document.querySelector(".mm").value);
    let yy = Number(document.querySelector(".yy").value);

    // console.log(typeof dd,mm,yy);
    currentDate = date.getDate();
    currentMonth = date.getMonth() + 1;
    currentYear = date.getFullYear();

    
    // console.log(dd);
    // console.log(currentDate);
    if(dd > currentDate) {
        currentDate += month[mm-1];
        currentMonth -= 1;
        d3 = currentDate - dd;
        //console.log(d3);
    }else{
        d3 = currentDate - dd;
        //console.log(d3);
        
    }
    if(mm > currentMonth) {
        currentMonth += 12;
        currentYear -= 1;
        m3 = currentMonth - mm;
        // console.log(m3);
    } else {
        m3 = currentMonth - mm;
        // console.log(m3);
    }
    let y3 = currentYear - yy;

console.log(d3, m3, y3)
let userAge = `${d3}-day ${m3}-month ${y3}-year`;
resultTag.innerHTML = userAge;
document.querySelector(".dd").value = "";
document.querySelector(".mm").value = "";
document.querySelector(".yy").value = "";
    // console.log(currentDay)
    // console.log(currentMonth)
    // console.log(currentYear)

}