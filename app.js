//setting a variable for the humber menu
let hamburger_menu = document.querySelector('#hamburger_menu');
let mobile_menu = document.querySelector('#mobile_menu');
let close = document.querySelector('#close');

//click x and close the hamburger menu
close.addEventListener('click', (event) => {
    mobile_menu.classList.toggle("show_menu")
    console.log("closed it");
});

//click hamurger menu and display drop down
hamburger_menu.addEventListener('click', () => {
    console.log("you clicked it")
    mobile_menu.classList.toggle("show_menu");
});

//setting variables for form submit
let form = document.querySelector('#contact_us');
let div = document.querySelector('.title_content_container');

//submit form message
form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    form.style.display = 'none';
    div.innerHTML += 'Thanks for contacting us!';
});
