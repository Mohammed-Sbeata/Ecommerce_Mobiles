let productCart = JSON.parse(localStorage.getItem("cart"))

const totalPriceCart = document.querySelector('.total-cart-price')
const productNumber = document.querySelector('.product-number')
const cards = document.querySelector(".whole-product-div")
console.log(cards)

const createHTMLElement = (el, className, id) => {
    const ele = document.createElement(el);
    if(id){
        ele.setAttribute('id', id)
    }
    if(className){
        ele.setAttribute ('class',className)
    }
    return ele;
  };

const appendCards2 = (productCart , card) => {
    console.log(productCart)
    cards.innerHTML = ''
    productCart.map((ele) => {
    const cardProduct = createHTMLElement("div" , "card-product")
    const imgBox = createHTMLElement("div" , "img-box")
    const img = createHTMLElement("img")
    img.setAttribute("src" , ele.url)
    imgBox.appendChild(img)
    const contentCard = createHTMLElement("div" , "content-card")
    const h2 = createHTMLElement("h2")
    h2.textContent = ele.name
    const p = createHTMLElement("p")
    p.textContent = ele.description
    const priceCatagoryShow = createHTMLElement("div" , "price-catagory-show")
    const pricePargh = createHTMLElement("p")
    pricePargh.textContent = ele.price
    const catagoryParph = createHTMLElement("p")
    catagoryParph.textContent = ele.catagory
    priceCatagoryShow.appendChild( pricePargh)
    priceCatagoryShow.appendChild(catagoryParph)
    contentCard.appendChild( h2)
    contentCard.appendChild(p)
    contentCard.appendChild(priceCatagoryShow)
    const btnsContainer = createHTMLElement("div" ,"delete-edit-div")
    const deleteSapn = createHTMLElement("span" ," delete-item")
    const deleteIcon = createHTMLElement("i","fa-solid fa-trash")
    deleteSapn.appendChild(deleteIcon)
    btnsContainer.appendChild( deleteSapn)
    btnsContainer.appendChild(deleteSapn)
    cardProduct.appendChild(imgBox )
    cardProduct.appendChild(contentCard)
    cardProduct.appendChild(btnsContainer)
    cardProduct.appendChild(deleteSapn)
    card.appendChild(cardProduct)
    deleteSapn.addEventListener("click" ,() => {
        let newarray = deleteFromCards(productCart, ele.id)
        localStorage.setItem("cart" , JSON.stringify(newarray))
        appendCards2(JSON.parse(localStorage.getItem("cart")) , cards)
    })

    })

    totalPriceCart.innerHTML = productCart.length
}
appendCards2(productCart , cards)

const deleteFromCards = (arrayToDelete,id) => {
    return arrayToDelete.filter((item) => item.id != id)
}


function totalPrice(){
    let totalPrice = productCart.map(e=>Number(e.price)).reduce((a,b)=>a+b)
    totalPriceCart.textContent = totalPrice
    console.log(totalPrice);
}
totalPrice()

function productsTotal(){
    let productsTotal = productCart.length
    productNumber.textContent = productsTotal
}


productsTotal()

module.exports =  { deleteFromCards}