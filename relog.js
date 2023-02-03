const hr = document.getElementById("hr");  
const mm = document.getElementById("mm");  
const ss = document.getElementById("ss");  

function clock(){

    let day = new Date();
    let hour = day.getHours();
    let minutes = day.getMinutes();
    let Seconds = day.getSeconds();

    
    hour >= 12 ? (horas = hour / 12 * 360) :(horas = hour / 24 * 360);

   horas += minutes / 60 * 30;
   minutos = minutes /60 * 360;
   segundos = Seconds /60 * 360;

   hr.style.transform ="rotate("+ horas + "deg)"
   mm.style.transform ="rotate("+ minutos + "deg)"
   ss.style.transform ="rotate("+ segundos + "deg)" 
   
}
setInterval(clock,1000)