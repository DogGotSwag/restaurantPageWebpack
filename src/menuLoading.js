import './styleForInit.css';

function menu(){
    let content = document.querySelector('#content');
    content.innerHTML = '';
    let mainDiv = document.createElement('div');
    let header = document.createElement('h3');
    header.innerText = 'Menu Restaurant';
    header.classList.add('conHeader');
    mainDiv.appendChild(header);




    for(let i = 0; i < 5; i++){
        let botttom = document.createElement('div');
        let img = document.createElement('img');
        let paragraph = document.createElement('p');
        img.setAttribute('alt', 'pic of drink');
        img.classList.add('drinkImg');
        paragraph.innerText = `A velvety blend of rare Glimber root and forest herbs, served with a drizzle of truffle essence.`;
        botttom.appendChild(img);
        botttom.appendChild(paragraph);
        botttom.classList.add('bottom');
        botttom.classList.add('bottomMenu');

        mainDiv.appendChild(botttom);
    }
    
    mainDiv.classList.add('mainSec');

    content.appendChild(mainDiv);
    
}




export default menu;