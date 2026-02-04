const increment = document.querySelector('.increment')
const start = document.querySelector('.startTimer')
const timer = document.querySelector('.timer')
const counter = document.querySelector('h1');
const reset = document.querySelector('.reset');


increment.addEventListener(('click'), () => {
    counter.textContent = Number(counter.textContent) + 1;
})

reset.addEventListener(('click'), () => {
    counter.textContent = 0;
})