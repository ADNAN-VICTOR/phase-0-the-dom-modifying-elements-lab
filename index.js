    const mainElement = document.getElementById('main');
    mainElement.remove();

    const newHeader = document.createElement('h1');
  
    newHeader.id = 'victory';

    const yourName = "Adnan"; 
    newHeader.textContent = yourName + " is the champion";
    document.body.appendChild(newHeader);