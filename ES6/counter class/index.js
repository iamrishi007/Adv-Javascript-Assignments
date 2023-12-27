let inpIncrement = document.getElementById('start');
let inpStop = document.getElementById('stop');
let inpReset = document.getElementById('reset');
let inpDecreament = document.getElementById('decreament')
let inpAdd = document.getElementById('add')

let display = document.getElementById('display');
let i = 0;
let intervalId; // To store the interval ID

class CounterClass {
     increment() {
          inpIncrement.addEventListener('click', () => {
               intervalId = setInterval(() => {
                    i++;
                    display.innerText = i;
               }, 1000);
          });
     }

     stop() {
          inpStop.addEventListener('click', () => {
               clearInterval(intervalId);
          });
     }


     reset() {
          inpReset.addEventListener('click', () => {
               i = 0
               display.innerText = i
          })
     }

     decreament() {
          inpDecreament.addEventListener('click', () => {
               clearInterval(intervalId);
               i = i - 1;
               display.innerText = i
          })
     }

     add() {
          inpAdd.addEventListener('click', () => {
               clearInterval(intervalId);
               i = i + 1;
               display.innerText = i
          })
     }
}

let counter = new CounterClass();
counter.increment();
counter.stop();
counter.reset();
counter.decreament();
counter.add()
