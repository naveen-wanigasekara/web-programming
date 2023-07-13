console.log(localStorage.getItem('counter'));
if (!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0);
}

function countUp(){
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter)
}
function countDown(){
    let counter = localStorage.getItem('counter');
    counter--;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter)
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('#increase').onclick = countUp;
    document.querySelector('#decrease').onclick = countDown;
});