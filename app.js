//html id
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const formSeconds = document.querySelector('#form-seconds');
const formMinutes = document.querySelector('#form-minutes');
const formHours = document.querySelector('#form-hours');
const formDays = document.querySelector('#form-days');


let countDownDate = new Date();
let dates =countDownDate.getDate();
countDownDate.setDate(dates+15);
let hoursCD = countDownDate.getHours();
countDownDate.setHours(hoursCD);
let minutesCD = countDownDate.getMinutes();
countDownDate.setMinutes(minutesCD);
let secondsCD = countDownDate.getSeconds();
countDownDate.setSeconds(secondsCD+1);

var calculatedMinutes = 0;
var calculatedHours = 0;
var calculatedDays = 15;

//countdown function
const countDown = () => {

  let todayDate = new Date().getTime();

  let dateDiff = countDownDate - todayDate;

  //calculating count-down time
  let countDownDays = Math.floor(dateDiff/(1000*60*60*24));
	let countDownHours = Math.floor((dateDiff%(1000*60*60*24))/(1000*60*60));
	let countDownMinutes = Math.floor((dateDiff%(1000*60*60))/(1000*60));
	let countDownSeconds = Math.floor((dateDiff%(1000*60))/1000);

  countDownDays = countDownDays < 10 ? "0"+countDownDays : countDownDays;
  countDownHours = countDownHours < 10 ? "0"+countDownHours : countDownHours;
  countDownMinutes = countDownMinutes < 10 ? "0"+countDownMinutes : countDownMinutes;
  countDownSeconds = countDownSeconds < 10 ? "0"+countDownSeconds : countDownSeconds;

  //showing data in web-page
  days.innerHTML = countDownDays;
  hours.innerHTML = countDownHours;
  minutes.innerHTML = countDownMinutes;
  seconds.innerHTML = countDownSeconds;


  formSeconds.classList.toggle('flip');

  calculatedMinutes = countDownMinutes;
  if(calculatedMinutes==countDownMinutes && countDownSeconds==0){
    formMinutes.classList.toggle('flip2');
  }

  calculatedHours = countDownHours;
  if(calculatedHours==countDownHours && countDownMinutes==0  && countDownSeconds==0){
    formHours.classList.toggle('flip2');
  }

  calculatedDays = countDownDays;
  if(calculatedDays==countDownDays && countDownHours==0 && countDownMinutes==0  && countDownSeconds==0){
    formDays.classList.toggle('flip2');
  }
}

//for refreshing every seconds
setInterval(countDown, 500);
