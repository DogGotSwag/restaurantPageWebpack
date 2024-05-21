import './styleForInit.css';

function menu(){
    let content = document.querySelector('#content');
    content.innerHTML = '';
    let mainDiv = document.createElement('div');
    let header = document.createElement('h3');
    let botttom = document.createElement('div');
    let img = document.createElement('img');
    let paragraph = document.createElement('p');

    header.innerText = 'Menu Restaurant';
    header.classList.add('conHeader');
    img.setAttribute('alt', 'pic of restaurant');
    paragraph.innerText = `Nestled in the heart of Willow Creek, The Enchanted Spoon offers a whimsical dining experience. The rustic decor,twinkling fairy lights, and lush indoor garden set a magical ambiance. Signature dishes include Dragonfire Steak and Elvenbread Delight, each crafted with locally sourced ingredients. Perfect for romantic dinners or family gatherings, it'swhere culinary dreams come true.`;


    mainDiv.appendChild(header);
    botttom.appendChild(img);
    botttom.appendChild(paragraph);

    botttom.classList.add('bottom');
    mainDiv.appendChild(botttom);
    mainDiv.classList.add('mainSec');

    content.appendChild(mainDiv);
    
}




export default menu;