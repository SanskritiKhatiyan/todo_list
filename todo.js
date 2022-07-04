const itemCount = document.querySelector('.count span');
const mt = document.querySelector('.cnt span');

itemCount.innerText = document.querySelectorAll('.list').length;
mt.innerText = document.querySelectorAll('.list').length;

const themeIcon = document.querySelector('.theme');
const bgImg= document.querySelector(".background");
const bd=document.querySelector("body");


themeIcon.addEventListener('click',()=>{
    document.body.classList.toggle('light')
    if(document.body.classList.contains('light')){
        themeIcon.src = 'images/icon-moon.svg';
        bgImg.style.url("./images/bg-desktop-light.jpg");
        bd.style.backgroundColor= "white";
    }else{
        themeIcon.src = 'images/icon-sun.svg'
        // bd.style.backgroundColor= "grey";
    }
})

const addButton = document.querySelector('.tasks button');
const itemInput = document.getElementById('tasks');
const todo = document.querySelector('.todo-list ul');
const itemID = document.querySelector('.options input[type="radio"]:checked');

addButton.addEventListener('click',()=>{
    if(itemInput.value.length > 0){
        addItems(itemInput.value);
        itemInput.value = '';
    }
})

itemInput.addEventListener('keypress',(event)=>{
    if(event.charCode === 13 && itemInput.value.length > 0){
        addItems(itemInput.value);
        itemInput.value = '';
    }
})

function addItems(text){
    const item = document.createElement('li');
    item.innerHTML = 
    `
    <label class="list">
    <input class="checkbox" type="checkbox"> 
    <span class="text">${text}</span>
    </label>
    <span class="remove"></span>
    `;
    if(itemID.id === 'completed'){
        item.classList.add('hidden');
    }
    todo.append(item);
    updateCount(1);
}

function updateCount(num) {
    itemCount.innerText = +itemCount.innerText + num;
}

function removeItems(item){
    item.remove();
    updateCount(-1);
}

todo.addEventListener('click',(event)=>{
    if(event.target.classList.contains('remove')){
        removeItems(event.target.parentElement);
    }
})

document.querySelectorAll('.options input').forEach(radio =>{
    radio.addEventListener('change',(event)=>{
        optionsTodo(event.target.id);
    })
})

function optionsTodo(id){
    const allItems = document.querySelectorAll('li');


    switch(id){
        case 'all':
            allItems.forEach(item =>{
                item.classList.remove('hidden');
        })    
        break;
        case 'active':
            allItems.forEach(item =>{
                if(item.querySelector('input').checked){
                    item.classList.add('hidden')
                }else{
                    item.classList.remove('hidden')
                }
        })
        break;
        default:
            allItems.forEach(item =>{
                if(item.querySelector('input').checked){
                    item.classList.remove('hidden')
                }else{
                    item.classList.add('hidden')
                }
            })
            break;
    }
}
const clear = document.querySelector('.clear');
const mobClear = document.querySelector('.clearr');

clear.addEventListener('click',()=>{
    const itemChecked = document.querySelectorAll('.list input[type="checkbox"]:checked');
    itemChecked.forEach(item=>{
        removeItems(item.closest('li'));
    })
})
mobClear.addEventListener('click',()=>{
    const itemChecked = document.querySelectorAll('.list input[type="checkbox"]:checked');
    itemChecked.forEach(item=>{
        removeItems(item.closest('li'));
    })
})