'use strict';

/*------- values in array--------------*/

var user= new Object(
    [
        {
            username:"user1",
            password:"sharan"
        },
        {
            username:"user2",
            password:"sukh"
        },
        {
            username:"user3",
            password:"patel"
        }
    ]
)
var data = new Object(    
    [{
    image:"girl1.jpg",
    name: "blacktop",  
    color:"black",
    description:"Relaxed fit through body.",
    quantity:"80",
    price:"80.00"},
    {
        image:"girl2.jpg",
        name: "redtop",  
        color:"red",
        description:"Relaxed fit through body.",
        quantity:"80",
        price:"50.00"},
        {
       image:"girl3.jpg",
      name: "peachtop",  
      color:"peach",
      description:"Relaxed fit through body.",
      quantity:"80",
      price:"60.00"},
      
      {
        image:"girl4.jpg",
      name: "skybluetop",  
      color:"skyblue",
      description:"Relaxed fit through body.",
      quantity:"80",
      price:"40.00"},
      {
        image:"images.jpg",
        name: "checkshirt",  
        color:"blue",
        description:"Relaxed fit through body.",
        quantity:"80",
        price:"70.00"},
     {
        image:"image1.jpg",
        name: "redshirt",  
        color:"red",
        description:"Relaxed fit through body.",
        quantity:"80",
        price:"70.50"},
        {
         image:"image2.jpg",
         name: "seagreenshirt",  
         color:"seagreen",
         description:"Relaxed fit through body.",
         quantity:"80",
         price:"80.00"},
         {
        image:"pent1.jpg",
        name: "bluepent",  
        color:"blue",
        description:"Relaxed fit through body.",
        quantity:"80",
        price:"40.00"},
        {
        image:"pents2.jpg",
        name: "armygreenpent",  
        color:"armygreen",
        description:"Relaxed fit through body.",
        quantity:"80",
        price:"60.00"},
          {
      image:"pents3.jpg",
        name: "blackpent",  
        color:"black",
        description:"Relaxed fit through body.",
        quantity:"80",
        price:"70.00"},
        {
         image:"pent4.jpg",
        name: "bluegirlpent",  
        color:"blue",
        description:"Relaxed fit through body.",
        quantity:"80",
        price:"90.00"},
        {
     image:"shirt.jpg",
        name: "blueshirt",  
        color:"blue",
        description:"Relaxed fit through body.",
        quantity:"80",
        price:"40.00"},
        ]);

var cartItm=document.getElementById("cart");
window.onload = function() {
    for (let i = 0; i < data.length; i++) {
        var maindiv=document.createElement('div');
        maindiv.classList.add("grid_wrapper");
        maindiv.id="gridwrapper";
        document.getElementById('wrapper').appendChild(maindiv);
        var imag=document.createElement('img');
        imag.src="images/"+data[i].image;
        maindiv.appendChild(imag);
        var table=document.createElement('table');
        maindiv.appendChild(table);
        var tr1=document.createElement('tr');
        var tr2=document.createElement('tr');
        var tr3=document.createElement('tr'); 
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        var td1=document.createElement('td');
        var td2=document.createElement('td');
        td2.classList.add("name");
        var td3=document.createElement('td');
        var td4=document.createElement('td');
        var td5=document.createElement('td');
        var td6=document.createElement('td');
        td6.classList.add("price");
        tr1.appendChild(td1).textContent="Name:";
        tr1.appendChild(td2).textContent=data[i].name;
        tr2.appendChild(td3).textContent="Color:";
        tr2.appendChild(td4).textContent=data[i].color;
        tr3.appendChild(td5).textContent="Price:";
        tr3.appendChild(td6).textContent=data[i].price;    
    }
}        


/*---------------------- login form-----------------*/

function check() {
    var result = document.querySelector('table');
    // console.log(result);
    // console.log(UserName);
    // console.log(password);
    for (let i = 0; i< user.length; i++) {
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
    // console.log(firstName);
    // console.log(lastName);
    if (user[i].username===firstName && user[i].password===lastName) {
        var index=0;
        var cart=[];     
    var product=document.getElementsByClassName('grid_wrapper');
    console.log(product);
    for(var j=0;j<product.length;j++){
    var label=document.createElement("label");
    label.textContent="Quantity: ";
    product[j].appendChild(label);
    var quantity = document.createElement("INPUT");
    quantity.setAttribute("type", "number");
    quantity.setAttribute("value", 1);
    quantity.setAttribute("min", 1);
    quantity.setAttribute("max", 50);
    quantity.id="quantity"+j;
    product[j].appendChild(quantity);
var button=document.createElement('button');
button.classList.add("atc");
button.innerHTML = "ADD TO CART";              
product[j].appendChild(button);
// var name=document.getElementById("name"+j).innerText;
/*----------------*/
console.log(name);
// var price=document.getElementById("price"+j).innerText;
// var quantity=document.getElementById("quantity"+j).value;
// document.getElementById("button"+j).onclick=function(){ addToCart(name,quantity,price)}; 
}


let buttons = document.querySelectorAll('.atc');

buttons.forEach(btn=>{
    btn.onclick = (event)=>{
        let temp = event.target;
        let name = temp.parentElement.querySelector(".name").innerText;
        let price = temp.parentElement.querySelector(".price").innerText;
        console.log(name,price);
        
    }

})


function addToCart(ele){ 

    var btn=document.querySelectorAll('button');
//    console.log(btn);
    let itemcounter=document.querySelectorAll('counter').innerText;
     function count(){
        let  counter=1;
         for (let i = 0; i <btn.length ; i++) {
             var button=btn[i];
             console.log(button);
             button.onclick = (event) =>{
                document.querySelectorAll('counter').innerText=counter;
                counter +=1;
                console.log(counter);
             }
             
             
         }
     }
    var element = {};
    element.name= name;
    element.quantity= quantity;
    element.price= price;
    console.log(element);
    
    cart.push({"element":element});
    var tr1=cartItm.insertRow(1);
    tr1.classList.add('cart_row');
    var cell1=tr1.insertCell(0);
    var cell2=tr1.insertCell(1);
    var cell3=tr1.insertCell(2);
    cell3.classList.add('price');
    cell1.innerHTML=name;
    cell2.innerHTML=quantity;
    cell3.innerHTML=(quantity*price);
    updateCartTotal();
    
}
console.log(cart);
console.log(cartItm);



/*---- coding for LOGOUT ----*/

const close=() => window.location.href = "project.html ";
break;
/*------------------------------*/
}
else {
        alert("wrong username and password");
        break;
    }
}
}
function updateCartTotal() {
    var total=0;
    var cartRows=cartItm.getElementsByClassName('cart_row');
    console.log(cartRows);
    for (let i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement= cartRow.getElementsByClassName('price')[0];
        var price= parseFloat(priceElement.innerText);
        console.log(price);
        total=total+(price);     
    }
    total=Math.round(total*100)/100
    document.getElementsByClassName('cart-total-price')[0].innerText='$' +total;
}

/*---------------------------SEARCH-------------------------*/


let main = document.querySelector('main')

/*
products.forEach(product => {
    main.innerHTML += `
    <div class="product">
        <h1>${product.name}</h1>
        <span>${product.cat}</span>
        <h4>$${product.price}</h4>
        <button>Add To Cart</button>
    </div>`
});
*/

function search(name) {

    var userInput = name.value;
    var data = document.querySelectorAll('.data')

    data.forEach(data => {

        console.log(data);
        
        var name = data.querySelector('name').innerText;
        var quantity =data.querySelector('quantity').innerText;
        let price = data.querySelector('price').innerText;

        if ((name + " " + quantity + "" + price).includes(userInput)) {
            data.style.display = 'block'
        } else {
            data.style.display = 'none'
        }
    })
    console.log(userInput)
}

function logout(){
    location.reload(true);
}


/*------------------------------------------------------------------------------------------*/
        /*
if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()

}
function ready() {
var removeCartItemButtons= document.getElementsByClassName('btn-danger')
 // console.log(removeCartItemButtons)
for(var i=0;i<removeCartItemButtons.length;i++) {
    var button=removeCartItemButtons[i]
    button.addEventListener('click',removeCartItem)
        // var buttonClicked=event.target
        // buttonClicked.parentElement.parentElement.remove()
        // updateCartTotal()
    }

var quantityInputs=document.getElementsByClassName('cart-quantity-input')
for (let i = 0; i < quantityInputs.length; i++) {
    const input = quantityInputs[i];
    input.addEventListener('change',quantityChanged)
} 


var addToCartButtons=document.getElementsByClassName('shop-item-button')
for (let i = 0; i < addToCartButtons.length; i++) {
     button.addEventListener('click',addToCartButtons)
} 
document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked)

}

function purchaseClicked(event) {
    alert('thank you for your purchase')
    var cartItems=document.getElementsByClassName('cart-items')[0]
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked=event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}


function quantityChanged(event) {
    var input=event.target
if(isNaN(input.value)|| input.value <=0)  {
    input.value=1
} 
 updateCartTotal()
}

function addToCartClicked(event){
    var button=event.target
    var shopItem=button.parentElement.parentElement
    var title=shopItem.getElementsByClassName('shop-item-title')[0].innerText
    console.log(title,price,imageSrc)
    addItemToCart(title,price,imageSrc)
}

function  addItemToCart(title,price,imageSrc){
    var cartRow=document.createElement('div')
    cartRow.innertext=title
    var cartItems=document.getElementsByClassName('cart-items')[0]
    var cartItemNames=cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
if(cartItemNames[i].innerText== title) {
    alert('this item is already added to the cart')
    return
}        
    }
    var cartRowContents= `
    
        <div class="cart-item cart-coulmn">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity cart-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
    </div>
    
    `

    cartRow.innerHTML=cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged)
}

function updateCartTotal() {
    var cartItemConatiner=document.getElementsByClassName('cart')[0]
    var cartRows=cartItemConatiner.getElementsByClassName('cart-row')
    for (let i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement= cartRow.getElementsByClassName('price')[0]
        var quantityElement=cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price= parseFloat(priceElement.innerText.replace('$',''))
        var quantity=quantityElement.value;
        total=total+(price*quantity)
        
    }
    total=Math.round(total*100)/100
    document.getElementsByClassName('cart-total-price')[0].innerText='$' +total
}



const btns = []

btns.forEach(btn=>{
    btn.onclick = () =>{
        btn.parentElement.querySelector('#name').innerText
        btn.parentElement.querySelector('#price').innerText

        // apend with the table of the cart
    }
})

*/