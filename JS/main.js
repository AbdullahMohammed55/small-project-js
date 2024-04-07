let user1 = document.querySelector('#user1')

let userData = document.querySelector('#user2')

let links = document.querySelector('#links')

let signin = document.querySelector('#sign_in')

let signin2 = document.querySelector('#sign_in2')

if(localStorage.getItem('username'))
{
    links.remove()
    user1.style.display = "inline-block"
    userData.innerHTML = localStorage.getItem("username") 
    signin.innerHTML = localStorage.getItem("username")
    signin2.remove()
}
let logoutBtn = document.querySelector('#log_out')


logoutBtn.addEventListener("click", function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location ="resgister.html"
    } , 1000)
})

let allProducts = document.querySelector('.products')

let products = [
    {
        id:1,
        title: 'oppo mobile',
        price:'11.000',
        imageUrl: "images/phone2.jpg"
    },
    {
        id:2,
        title: 'relime mobile',
        price:'9.000',
        imageUrl: "images/phone3.jpg"
    },
    {
        id: 3,
        title: 'oppo reno 7',
        price:'10.500',
        imageUrl: "images/phone1.jpg",
    },
    {
        id: 4,
        title: 'Gallxy mobile',
        price:'12.000',
        imageUrl: "images/phone4.jpg",
    },
    // {
    //     id: 5,
    //     title : 'tablet iphone',
    //     price: '15.000',
    //     imageUrl: "images/tablet1.jpg"
    // }

]
function drawItems (){
    let y = products.map((item)=>{
        return `
        <div class="products">
            <div class="product_item">
                <a href="produect.html"><img src="${item.imageUrl}" alt="image for phone"></a>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <div class="product_item_desc">
                    <p>${item.title}</p>
                    <p>this is the best tablet</p>
                    <p><span>egp</span>${item.price}</p>
                </div>
            
                <div class="product_item_action">
                    <a href="#"><button class="add_to_cart" onclick ="addToCart(${item.id})">add cart</button></a>
                    <i class="far fa-heart"></i>
                </div>
            </div>
        </div>
        `
    })
    allProducts.innerHTML = y;
}
drawItems()

let cartProductDiv = document.querySelector('.carts_products div')

let badge = document.querySelector(".badge")

// let addedItem =  [];
let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];

if (addedItem){
    addedItem.map(item =>{
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length
}

    if(localStorage.getItem('username')){
        function addToCart(id){
            let chooseItem = products.find((item) => item.id == id);
            cartProductDiv.innerHTML += `<p>${chooseItem.title}</p>`


            addedItem = [...addedItem , chooseItem]
            localStorage.setItem("ProductsInCart", JSON.stringify(addedItem) )

            let cartProductLength = document.querySelectorAll('.carts_products div p')
            badge.style.display = "block"
            badge.innerHTML = cartProductLength.length;
        }
        
    }else
    {
        window.location = "login.html" 
    }


let shopping_cartIcon = document.querySelector(".shopping-cart")

let cartsProducts = document.querySelector(".carts_products")

shopping_cartIcon.addEventListener("click", opencart)

function opencart()
{
    if(cartProductDiv.innerHTML !=""){
        if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
        }else{
            cartsProducts.style.display="block"
        }
    }
}
opencart()

