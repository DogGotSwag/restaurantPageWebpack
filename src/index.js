import initial from './initialLoading';
import menu from './menuLoading'
import about from './aboutLoading'
import './style.css';
initial();



let theHeader = document.querySelector('header');
theHeader.classList.add('header');

let nav = document.querySelector('nav');
nav.classList.add('nav');

let buttons = document.querySelectorAll('button');

buttons.forEach(key => {
    key.classList.add('buttons');
    key.setAttribute('type', 'button');
    key.addEventListener( "click" , (event)=>{
        let name =event.target.innerText;

        if( name == "Home"){
            initial();
        }
        else if( name == "Menu"){
            menu();
        }
        else if( name == "About"){
            about();
        }

    });
});