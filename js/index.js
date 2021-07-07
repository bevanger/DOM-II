//1 & 2 click and timeStamp
const buttons = document.querySelectorAll('.destination .btn');

function signUp(e){
    window.prompt('Would you like to sign up?');
    console.log(`It took you ${e.timeStamp} miliseconds to click the button`)
}
buttons[0].addEventListener('click', signUp);
buttons[1].addEventListener('click', signUp);
buttons[2].addEventListener('click', signUp);

//3 double click
const pics = document.querySelectorAll('img');

function locations(){
    window.alert('Location')    
}
pics[2].addEventListener('dblclick', locations);
pics[3].addEventListener('dblclick', locations);

//4 & 5 mouse over and mouse out
const headings = document.querySelector('h1');

headings.addEventListener('mouseover', function(event){
    console.log('Hover');
    headings.style.color = '#008080';
});
headings.addEventListener('mouseout', function (event){
    console.log('Hover');
    headings.style.color = '#000000';
});

//6 scroll 
const backgrounds = document.querySelector('body');

document.addEventListener('scroll', function (event){
    setTimeout(function(){
    backgrounds.style.background = '#ffb6c1';
    }, 1000)
});

//7 load
const refresh = document.querySelector('img');

refresh.addEventListener('load', function (event){
   alert('You have refreshed the page');
});

//8 wheel 
const mouse = document.querySelector('body');

document.addEventListener('wheel', function (event){
    setTimeout(function(){
        mouse.style.background = 'green';
    }, 1000)
});

//9 resize 
window.addEventListener('resize', function (event){
    window.alert('You have resized the page')
});

//10 keyup
document.addEventListener('keyup', function (event){
    if(event.key === 'Enter'){
        window.alert('Enter was pressed');
    }
});


//Stop Propagation 
const navLinks = document.querySelectorAll('.nav-link');
const navContainer = document.querySelector('.nav-container');

navContainer.addEventListener('mouseover', function(e) { 
    for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = 'purple';
    }
});

navContainer.addEventListener('mouseout', function(e) { 
    for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = 'black';
    }
});

for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('mouseover', function(e) {
        e.target.style.color = 'purple';
        e.stopPropagation();
    })
    navLinks[i].addEventListener('mouseout', function(e) {
        e.target.style.color = 'black';
        e.stopPropagation();
    })
}

//stop page reload on link
for(let i=0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', function (e){
        e.preventDefault();
    });
}