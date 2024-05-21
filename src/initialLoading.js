
function addInitialContent(){
    let content = document.querySelector('#content');
    let mainDiv = document.createElement('div');
    let header = document.createElement('h3');
    let img = document.createElement('img');
    let paragraph = document.createElement('p');

    header.innerText = 'Webpack Restaurant';
    img.setAttribute('alt', 'pic of restaurant');
    paragraph.innerText = `Nestled in the heart of Willow Creek, The Enchanted Spoon offers a whimsical dining experience. The rustic decor,twinkling fairy lights, and lush indoor garden set a magical ambiance. Signature dishes include Dragonfire Steak and Elvenbread Delight, each crafted with locally sourced ingredients. Perfect for romantic dinners or family gatherings, it'swhere culinary dreams come true.`;


    mainDiv.appendChild(header);
    mainDiv.appendChild(img);
    mainDiv.appendChild(paragraph);

    content.appendChild(mainDiv);
    
}




export default addInitialContent;