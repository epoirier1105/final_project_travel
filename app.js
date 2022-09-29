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

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    console.log('submitted it');
    form.style.display = 'none';
    div.innerHTML += 'Thanks for contacting us!';
});


//setting variables for filtering

let filter_1 = document.querySelector('.card_button');
let picture1 = document.querySelector('.destination_container_1');
let picture2 = document.querySelector('.destination_container_2');
let picture3 = document.querySelector('.destination_container_3');
let picture4 = document.querySelector('.destination_container_4');
let picture5 = document.querySelector('.destination_container_5');
let picture6 = document.querySelector('.destination_container_6');

filter_1.addEventListener('click', () => {
    console.log("filter");
    picture1.style.display = 'none';
    picture5.style.display = 'none';
    picture6.style.display = 'none';
}
)