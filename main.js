const btnStart = document.getElementById('btn-start');

btnStart.addEventListener('click', () => {
  let hours =document.getElementById('hour');
  let minutes =document.getElementById('minut');
  let seconds =document.getElementById('second');

  let duration = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60) + parseInt(seconds.value);

  display = document.getElementById('timer');
  timer(duration, display);
})
  
const timer = (duration, display) => {
  let timer = duration;
  let hours, minutes, seconds;

  setInterval(() => {
    hours = Math.floor((timer / 60) / 60);
    minutes = Math.floor(timer / 60 - (hours * 60));
    seconds = Math.floor(timer % 60);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    display.innerHTML = `${hours}:${minutes}:${seconds}`;
    
    timer -= 1;
  
    let context = new AudioContext(), 
    oscillator = context.createOscillator();

    if(timer < 0){
      display.innerHTML = 'ACABOU!!!'

        oscillator.type = 'trisngle';
        oscillator.connect(context.destination);
        oscillator.start();
    }
  }, 1000);

}

