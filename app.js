let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let mili = document.getElementById("mili");
let startRestBtn = document.getElementById("start-reset");
let stopBtn = document.getElementById("stop");

startRestBtn.addEventListener("click", () => {
  let isRunning = true;
  switch (isRunning) {
    case startRestBtn.innerText === "Start":
      startRestBtn.innerText = "Reset";
      setTimeout(() => {
        start();
      }, 100);
      break;
    case startRestBtn.innerText === "Reset":
      startRestBtn.innerText = "Start";
      break;
    default:
      console.log("Oops something went wrong (>_<)");
      break;
  }
});

const start = () => {
  let j = 1
  for (let i = 1; i <= 11000; i++) {

  if(i){ 
    // mili.innerText = j++;
    // mili.innerText === 100 ? 0 : mili.innerText = j++;;
    if(mili.innerText === 100){
      mili.innerText === "0";
      sec.innerText === j++;
      console.log("now 0")
    }
    else{
      mili.innerText = j++;
    }
  }
  console.log(sec.innerText);

  }
};

const rest = ()=>{
  hour.innerText = "00";
  min.innerText = "00";
  sec.innerText = "00";
  mili.innerText = "00";
}

stopBtn.addEventListener("click", () => {
  // startRestBtn.removeEventListener;
  isRunning = false;
});
