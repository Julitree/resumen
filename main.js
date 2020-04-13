let toggle = function(el){
    if(el.classList.contains('static')){
        let classList = el.nextElementSibling.classList;
        classList.toggle('show');
    }else{
        let classList = el.parentNode.classList;
        classList.toggle('show');
    }
}

const ITEMS = ['.static', '.button'];

for(item of ITEMS){
    let divTargetted = document.querySelectorAll(item);
    let divArray = Array.from(divTargetted);
    divArray.map(function(el){
        el.addEventListener('click', () => toggle(el));
        
    });
}


