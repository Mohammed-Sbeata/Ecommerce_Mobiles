const createProductForm = document.querySelector("#create-product-form");
const wholeProductDiv = document.querySelector(".whole-product-div");
const productNumber = document.querySelector(".product-number");
const editDiv = document.querySelector(".popup-edit-div");

if(localStorage.getItem('products')){
  renderProducts(JSON.parse(localStorage.getItem('products'))); // console.log(newProduct);
}

function createProduct({ url, name, desc, price, cata }) {

  const list = localStorage.getItem("products");
  console.log(cata);

  if (list) {
    const data = JSON.parse(list);
    data.unshift({ id: Date.now(), url, name, desc, price, cata });
    return localStorage.setItem("products", JSON.stringify(data));
  } else {
    const data = [];
    data.unshift({ id: Date.now(), url, name, desc, price, cata });
    localStorage.setItem("products", JSON.stringify(data));
  }
}

createProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const newProduct = Object.fromEntries(formData);
console.log(newProduct);
  if(newProduct.imageUrl === ''||newProduct.productTitle === ''||newProduct.productDescription === ''||newProduct.formPrice === ''||newProduct.formCategory === ''){
    return
  }

  createProduct({
    url: newProduct.imageUrl,
    name: newProduct.productTitle,
    desc: newProduct.productDescription,
    price: newProduct.formPrice,
    cata: newProduct.cat,
  });

  

  renderProducts(JSON.parse(localStorage.getItem('products')));
});

function renderProducts(data) {

  wholeProductDiv.innerHTML = "";


  data.forEach((product) => {
    //create card-product div
    const cardProductDiv = document.createElement("div");
    cardProductDiv.classList.add("card-product");
    //create img-box div
    const imgBoxDiv = document.createElement("div");
    imgBoxDiv.classList.add("img-box");

    //create img tag inside img-box div
    const imgTag = document.createElement("img");
    imgTag.src = product.url;
    //append img in img-box div
    imgBoxDiv.appendChild(imgTag);

    //create content-card div
    const contentCardDiv = document.createElement("div");
    const titleDiscDiv = document.createElement("div");
    titleDiscDiv.classList.add('title-disc-div')

    contentCardDiv.classList.add("content-card");

    //create h2 , p inside content-card div
    const cardTitleH2 = document.createElement("h2");
    cardTitleH2.innerText = product.name;
    const cardDiscP = document.createElement("p");
    cardDiscP.classList.add('describtion-card')
    cardDiscP.innerText = product.desc;
    titleDiscDiv.appendChild(cardTitleH2)
    titleDiscDiv.appendChild(cardDiscP)
    // append h2 and p inside content-card div
    //create delete-edit-div inside content-card div
    const priceCatagoryDiv = document.createElement("div");
    priceCatagoryDiv.classList.add("price-catagory-show");
    //create 2 para inside price catagory div
    const pricePara = document.createElement("p");
    pricePara.innerText = product.price;
    const catagoryPara = document.createElement("p");
    catagoryPara.innerText = product.cata;
    //append price and cata inside priceCatagoryDiv
    priceCatagoryDiv.appendChild(pricePara);
    priceCatagoryDiv.appendChild(catagoryPara);
    //append priceCatagoryDiv inside conetnt-card div
    contentCardDiv.appendChild(titleDiscDiv);
    contentCardDiv.appendChild(priceCatagoryDiv);

    //create delete-edit-div
    const deleteEditDiv = document.createElement("div");
    deleteEditDiv.classList.add('delete-edit-div')
    //create 2 span inside delete-edit-div
    const spanDelete = document.createElement("p");
    spanDelete.classList.add("delete-item");
    spanDelete.addEventListener("click", () => {
      deleteOneProduct(product.id);
    });

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash");
    spanDelete.appendChild(deleteIcon);

    const spanEdit = document.createElement("p");
    spanEdit.classList.add("edit-item");
    spanEdit.addEventListener("click", () => {
      editDiv.classList.remove("hidden");
      const updateBtn = document.querySelector(".update");
      const url = document.querySelector(".url");
      const title = document.querySelector(".name");
      const desc = document.querySelector(".desc");
      const price = document.querySelector(".price");
      const cata = document.querySelector(".cata");
      url.value = product.url;
      title.value = product.name;
      desc.value = product.desc;
      price.value = product.price;
      cata.value = product.cata;
      updateBtn.addEventListener("click", (e) => {
        e.preventDefault();
        editProduct(product.id);
        editDiv.classList.add('hidden')
      });
    });
    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-sharp", "fa-solid", "fa-pen");
    spanEdit.appendChild(editIcon);

    //append span inside createEditDiv
    deleteEditDiv.appendChild(spanEdit);
    deleteEditDiv.appendChild(spanDelete);

    //append everything inside card product div

    cardProductDiv.appendChild(imgBoxDiv);
    cardProductDiv.appendChild(contentCardDiv);
    // cardProductDiv.appendChild(priceCatagoryDiv);
    cardProductDiv.appendChild(deleteEditDiv);

    //append inside html
    wholeProductDiv.appendChild(cardProductDiv);

  });
  productNumber.innerText = data.length

}


function deleteOneProduct(id) {
  let products = JSON.parse(localStorage.getItem("products"));
  const newProducts = deleteItem(products, id);

  localStorage.setItem("products", JSON.stringify(newProducts));
  products = JSON.parse(localStorage.getItem("products"));
  renderProducts(products);
}

function editProduct(id) {
  const products = JSON.parse(localStorage.getItem("products"));
  const productIndex = products.findIndex((product) => product.id === id);

  const editForm = document.querySelector("#edit-form");

  const formData = new FormData(editForm);
  const updatedProduct = Object.fromEntries(formData);

  console.log(updatedProduct);
  products[productIndex] = {
    ...products[productIndex],
    url: updatedProduct["edit-image"],
    name: updatedProduct["edit-name"],
    desc: updatedProduct["edit-desc"],
    price: updatedProduct["edit-price"],
    cata: updatedProduct["edit-cata"],
  };

  localStorage.setItem("products", JSON.stringify(products));
  renderProducts(products);
}


const closeEditForm = document.querySelector('#close-edit-div');

closeEditForm.addEventListener('click',()=>{
  editDiv.classList.add('hidden')
})

const searchProduct = document.querySelector('.search-product');

searchProduct.addEventListener('keyup', ()=>{
  const products = JSON.parse(localStorage.getItem('products'));
  const newProducts = products.filter(product=> searchProduct.value === product.name);
  console.log(newProducts);

  renderProducts(newProducts)
  // const products = document.querySelectorAll('.card-product');
  // let searchName = e.target.value.toLowerCase();
  // products.forEach(product=>{
  //   let titleCard = product.querySelector('h2').textContent;

  //   if(titleCard.toLowerCase().indexOf(searchName) != -1){
  //     product.style.display = 'block'
  //   }else{
  //     product.style.display = 'none'
  //   }
  // })
})

