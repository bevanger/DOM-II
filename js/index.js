//1 on click
const buttons = document.querySelectorAll('.destination .btn');

function signUp(){
    window.prompt('Would you like to sign up?');
}
buttons[0].addEventListener('click', signUp);
buttons[1].addEventListener('click', signUp);
buttons[2].addEventListener('click', signUp);

//2 on double click
const pics = document.querySelectorAll('img');

function locations(){
    window.alert('Location')    
}
pics[2].addEventListener('dblclick', locations);
pics[3].addEventListener('dblclick', locations);

//3 & 4 on mouse over and mouse out
const headings = document.querySelector('h1');

headings.addEventListener('mouseover', function(event){
    console.log('Hover');
    headings.style.color = '#008080'
});
headings.addEventListener('mouseout', function (event){
    console.log('Hover');
    headings.style.color = '#000000';
});

//5 scroll 
const backgrounds = document.querySelector('body');

document.addEventListener('scroll', function (event){
    backgrounds.style.background = '#ffb6c1';
});
