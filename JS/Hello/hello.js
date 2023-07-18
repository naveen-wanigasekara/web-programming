document.addEventListener('DOMContentLoaded', function(){
// Get the name from localStorage if it exists    
    let name = 'name'; //localStorage.getItem('name');
    if (name) {
        name = document.querySelector('#name').value;
        document.querySelector('h1').innerHTML = `Hello ${name} !`;
    }
    
    document.querySelector('form').onsubmit = function(event){
        event.preventDefault();

 // Get the entered name
        let name = document.querySelector('#name').value;

// Store the name
        //localStorage.setItem('name', name);

// Update the greeting message
        document.querySelector('h1').innerHTML = `Hello ${name} !`;

// Clear input field
        document.querySelector('#name').value = '';

// Call setGreeting() to update the time-based greeting
        setGreeting(name);
         
    };
});

function setGreeting() {
    let time = new Date ();
    let hour = time.getHours();
    let greeting;

    if (hour < 12 ) {
        greeting = `Good Morning!`;
    } else if (hour < 18) {
        greeting = `Good Afternoon!`;
    } else {
        greeting = `Good Evening!`;
    }
    document.querySelector('h2').innerHTML = greeting;
};