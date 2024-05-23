import initial from './initialLoading';
import menu from './menuLoading'
import about from './aboutLoading'
import './style.css';
initial();



let theHeader = document.querySelector('header');
theHeader.classList.add('header');

let nav = document.querySelector('nav');
nav.classList.add('nav');

let buttons = document.querySelectorAll('button');""
let current = "Home";

buttons.forEach(key => {
    key.classList.add('buttons');
    key.setAttribute('type', 'button');
    key.addEventListener( "click" , (event)=>{
        let name =event.target.innerText;
        if(name != current){
            if( name == "Home"){
                initial();
                console.log(name);
            }
            else if( name == "Menu"){
                menu();
                console.log(name);
            }
            else if( name == "About"){
                about();
                console.log(name);
            }
            current = name;
        }
    });
});