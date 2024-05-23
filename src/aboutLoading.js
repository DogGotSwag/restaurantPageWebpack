import './styleForInit.css';

function addInitialContent(){
    let content = document.querySelector('#content');
    content.innerHTML = '';
    let mainDiv = document.createElement('div');
    let header = document.createElement('h3');
    let botttom = document.createElement('div');
    let img = document.createElement('img');
    let paragraph = document.createElement('p');
    let paragraphTwo = document.createElement('p');
    let pHolder = document.createElement('span');

    header.innerText = 'About';
    header.classList.add('conHeader');
    img.setAttribute('alt', 'pic of restaurant');
    paragraph.innerText = `The Culinary Oasis: A Journey Through Flavor at La Maison des Délices
    Nestled in the heart of the bustling city, La Maison des Délices is a restaurant that transcends the ordinary dining experience. With its charming façade adorned with ivy and twinkling fairy lights, it beckons patrons into a world where culinary artistry meets unparalleled hospitality. This essay explores the enchanting realm of La Maison des Délices, a made-up restaurant that embodies the epitome of gastronomic excellence and sensory delight.`;
    
    paragraphTwo.innerText = `The Genesis of La Maison des Délices
    La Maison des Délices was born from the vision of renowned chef and entrepreneur, Pierre Delacroix. Pierre, a culinary virtuoso with a passion for innovation, sought to create a dining establishment that would not only tantalize the taste buds but also provide an immersive experience for all senses. Drawing inspiration from his travels across Europe, Asia, and the Americas, Pierre amalgamated diverse culinary techniques and ingredients to craft a menu that is both eclectic and harmonious.`;

    paragraph.classList.add('aboutPara');
    paragraphTwo.classList.add('aboutPara');

    mainDiv.appendChild(header);
    botttom.appendChild(img);
    pHolder.appendChild(paragraph);
    pHolder.appendChild(paragraphTwo);
    botttom.appendChild(pHolder);

    botttom.classList.add('bottom');
    mainDiv.appendChild(botttom);
    mainDiv.classList.add('mainSec');

    content.appendChild(mainDiv);
    
}

export default addInitialContent;