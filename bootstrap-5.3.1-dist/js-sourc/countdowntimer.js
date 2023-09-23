let days = 5;
let hours = 2;
let minutes = 35;
let seconds = 6;

let day = document.querySelector('#first');

let hour = document.querySelector('#second');

let min = document.querySelector('#third');

let sec = document.querySelector('#fourth');

const MyInterval = setInterval(Mytimer , 1000);

function Mytimer(){

    if (seconds > 0) {
          seconds--;
      } else {
          seconds = 59;
          if (minutes > 0) {
              minutes--;
          } else {
              minutes = 59;
              if (hours > 0) {
                  hours--;
              } else {
                  hours = 23;
                  if (days > 0) {
                      days--;
                  }
              }
          }
      }

      if(seconds === 0 && minutes === 0 &&  hours === 0 &&  days === 0){
        clearInterval(MyInterval);
      }

      sec.innerHTML = seconds +" <br> " +"ثانیه";
      min.innerHTML = minutes + "<br>" + "دقیقه";
      hour.innerHTML = hours + "<br>" + "ساعت";
      day.innerHTML = days + "<br>" + "روز";
  }

    seconds--;
