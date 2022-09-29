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


//setting variables for filtering

let filter_1 = document.querySelector('#filter1');
let filter_2 = document.querySelector('#filter2');
let clear = document.querySelector('#clear');
let picture1 = document.querySelector('.destination_container_1');
let picture2 = document.querySelector('.destination_container_2');
let picture3 = document.querySelector('.destination_container_3');
let picture4 = document.querySelector('.destination_container_4');
let picture5 = document.querySelector('.destination_container_5');
let picture6 = document.querySelector('.destination_container_6');

//filter to romantic trips
filter_1.addEventListener('click', () => {
    console.log("filter");
    picture1.style.visibility = 'hidden';
    picture5.style.visibility = 'hidden';
    picture6.style.visibility = 'hidden';
}
);

//filter to adventure trips
filter_2.addEventListener('click', () => {
    console.log("filter2");
    picture2.style.visibility = 'hidden';
    picture3.style.visibility = 'hidden';
    picture4.style.visibility = 'hidden';
});

//clear the filters
clear.addEventListener('click', () => {
    console.log("clear");
    picture1.style.visibility = 'visible';
    picture2.style.visibility = 'visible';
    picture3.style.visibility = 'visible';
    picture4.style.visibility = 'visible';
    picture5.style.visibility = 'visible';
    picture6.style.visibility = 'visible';
});

