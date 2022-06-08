var container=document.querySelector('.container');
var value1=document.querySelector('.input');
var add1=document.querySelector('.add');
var it_count=document.querySelector("#item_count");

let count=0;
class item{
    constructor(name)
    {
        this.create(name);
    }
    
    create(name)
    {
        var circle= document.createElement('button');
        circle.classList.add('circle');
        circle.innerHTML='<img id="crcle_btn" src="./images/icons8-circle-50.png" ></img>';
        circle.addEventListener('click',()=>this.circle(l1));
        var l1=document.createElement('div');

        l1.classList.add('item');
        // var _button = document.createElement("button");
        // _button.innerHTML = '<img class="add_img" src="./images/icons8-circle-50.png"></img>';
        // _button.onclick = function()
        // {
        //     alert("hello, world");
        // }


        var input=document.createElement('input');
       
        input.type="text";
        
        input.disabled=true;
        
        input.value=name;
        
        input.classList.add('item_input');
        count++;
        it_count.innerHTML= count;
        console.log(count);

        var remove= document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML='<img class="remove_img" src="./images/icon-cross.svg" ></img>';
        remove.addEventListener('click',()=>this.remove(l1));
        

        container.appendChild(l1);

        l1.appendChild(input);
        l1.appendChild(circle);
        l1.appendChild(remove);
    }

    remove(l1)
    {
        container.removeChild(l1);
        it_count.innerHTML=count-1;
        count--;
    }
    circle(l1)
    {
        console.log("clicked");
        // document.innerHTML='<img class="circle_img" src="./images/icon-check.svg" ></img>';
        // this.circle.classList.add("checked");
        // this.circle.innerHTML='<img id="crcle_btn" src="./images/icon-check.svg" ></img>';

        document.getElementById("crcle_btn").src = "./images/icon-check.svg";
        // container.appendChild(l1);

    }
    
}


add1.addEventListener('click',check);
window.addEventListener('keydown',(e)=>{

    if(e.which==13)
    {
        check();
    }
})

function check()
{
    if(value1.value!="")
    {
        new item(value1.value);
        value1.value="";
    }
}

function removeAll()
{
    document.querySelector('.container').innerHTML="";
    it_count.innerHTML=0;
    count=0;
}