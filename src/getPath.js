export function getPath(element) {
    if (!(element instanceof Element)) return console.log("Error. This is not selector");
    
    const path = [];
    while (element.nodeType === Node.ELEMENT_NODE) {
        let selector = element.nodeName.toLowerCase();
        
        if (element.id){selector += `#${element.id}`;} 
        if(element.className){selector += `.${element.className}`;}
        
        path.unshift(selector);
        element = element.parentNode;
    }
    
    return path.join(' > ');
  }