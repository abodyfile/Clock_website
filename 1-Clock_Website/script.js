setInterval(displayTime, 1000)


function displayTime() {

   let dateTime = new Date();

   let hrs = dateTime.getHours();

   let mins = dateTime.getMinutes();

   let secs = dateTime.getSeconds();

   let session = "AM"

   if(hrs == 0) {

     hrs = 12
   }

   if(hrs > 12) {

    hrs = hrs - 12
    session = "PM"
   }

   // add 0 for time if less then 10
   hrs = (hrs < 10) ? "0" + hrs: hrs;

 
   mins = (mins < 10) ? "0" + mins: mins;

   secs = (secs < 10) ? "0" +secs:secs;

   if (hrs == 10 && mins == 10 && secs ==10) {

    
   }

   // put time to HTML
     document.getElementById("hours").innerHTML = hrs;
     document.getElementById("Minutes").innerHTML = mins;
     document.getElementById("Seconds").innerHTML = secs;



    let hrss = document.getElementById("hrss") ;
    let minss = document.getElementById("minss");
    let secss = document.getElementById("secss") ;
 
    hrss.style.strokeDashoffset = 440 - (440 * hrs) / 12
    minss.style.strokeDashoffset = 440 - (440 * mins) / 60
    secss.style.strokeDashoffset = 440 - (440 * secs) / 60

     document.getElementById("Session").innerHTML = session;

}

displayTime()