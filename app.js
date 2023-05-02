const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const day = document.querySelector('.days')
  const hour = document.querySelector('.hours')
  const minute = document.querySelector('.minutes')
  const second = document.querySelector('.seconds')
  const giveAwayTime = document.querySelector('.para1')

  const futureDate = new Date(2023, 4, 3, 11, 30,0)
  // console.log(futureDate.getTime());
  
  let futureYear = futureDate.getFullYear();
  let futureMonth = months[futureDate.getMonth()];
  let futureDay = futureDate.getDate();  
  let weekday = weekdays[futureDate.getDay()];
  let futureHour = futureDate.getHours();
  let futureMin = futureDate.getMinutes();
  let futureSec = futureDate.getSeconds();
  giveAwayTime.innerHTML = `<p class="para1">Giveaway End On ${weekday}, ${futureDay} ${futureMonth},${futureYear} ${futureHour}:${futureMin} am</p>`;
  
  const fTime = futureDate.getTime();
  
 let x =  setInterval(function time(){
    
let now = new Date().getTime();
let remainTime = fTime - now
//  console.log(remainTime);

  let presentDay = Math.floor(remainTime / (24*60*60*1000));
  // console.log(presentDay);
  let presentHour = Math.floor(remainTime % (24*60*60*1000) / (60 * 60 * 1000));
  // console.log(presentHour);
  let presentMin = Math.floor(remainTime % (60*60*1000) / (60 * 1000));
  // console.log(presentMin);
  let presentSec = Math.floor(remainTime % (60*1000) / (1000));
  // console.log(presentSec);

  day.innerHTML = `<h1>${presentDay}</h1><p>DAYS</p>`
  hour.innerHTML = `<h1>${presentHour}</h1><p>HOURS</p>`
  minute.innerHTML = `<h1>${presentMin}</h1><p>MINUTES</p>`
  second.innerHTML = `<h1>${presentSec}</h1><p>SECONDS</p>`

  if(remainTime < 0){
    clearInterval(x);
    giveAwayTime.innerHTML = `<p class="para1"> Sorry this Giveaway has Expired.</p>`
  }
},1000);

 
 