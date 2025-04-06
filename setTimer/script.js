
let hour = document.querySelector('.hour');
let min = document.querySelector('.minute');
let sec = document.querySelector('.sec');

let start = document.querySelector('.start');
let pause = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let countDown = null;

start.addEventListener('click',()=>{
    if(hour.value == 0 && min.value == 0 && sec.value == 0) return;
    start.style.display = "initial";
    pause.style.display = "none";
    startInterval();
})

function startInterval(){
    start.style.display = "none";
    pause.style.display = "initial";

    countDown = setInterval(()=>{

        if(sec.value > 60){
            min.value++;
            sec.value = +sec.value - 60;
        }
        if(min.value >= 60){
           hour.value++;
           min.value = `${+min.value - 60}`;
           hour.value = `${hour.value <= 10 ? "0":""}${hour.value}`
        }
        

        if(hour.value == 0 && min.value == 0 && sec.value == 0){
            hour.value = "";
            min.value = "";
            sec.value = "";
        }
        else if(sec.value != 0){
            sec.value = `${sec.value <= 10 ? "0":""}${sec.value - 1}`;
        }
        else if(min.value != 0 && sec.value == 0){
            sec.value = 59;
            min.value = `${min.value <= 10 ? "0":""}${min.value - 1}`;
        }
        else if(hour.value != 0 && min.value == 0 && sec.value == 0){
            sec.value = 59;
            min.value = 59;
            hour.value = `${hour.value <= 10 ? "0":""}${hour.value - 1}`;
        }
    },1000)

}

pause.addEventListener('click',()=>{
    pauseBtn("Pause");
})

function pauseBtn(state){
  start.innerHTML = state === "Pause"?"Continue":"Start";
  
  start.style.display = "initial";
  pause.style.display = "none";

  clearInterval(countDown);
}


reset.addEventListener('click',()=>{
    hour.value = "";
    min.value = "";
    sec.value = "";
    start.style.display = 'initial';
    pause.style.display = 'none';

    pauseBtn();
})