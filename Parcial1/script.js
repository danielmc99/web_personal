

const requestURL = 'https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json';
const request = new Request(requestURL);
const response = await fetch(request);
const category = await response.json();

nameHeader(category);
getElements(category);

function nameHeader(jsonObj) 
{
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['name'];
    header.appendChild(myH1);
  

}

function getElements(jsonObj) 
{
    const section = document.querySelector('section');
    const productos = jsonObj['category'];
  
    for (const product of productos) 
    {

        const myProduct = document.createElement('product');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const image = document.createElement('img')
        
    
        myH2.textContent = productos[i].name;
        myPara1.textContent = 'description: ' + productos[i].description;
        myPara2.textContent = 'price: ' + productos[i].price;
        image.src  = "" + productos[i].image;

        myProduct.appendChild(myH2);
        myProduct.appendChild(myPara1);
        myProduct.appendChild(myPara2);
        myProduct.appendChild(image);
    
        section.appendChild(myProduct);
    }

}

