
  const productosContainer = document.querySelector(".product__container");
  const showMoreBtn = document.querySelector (".button");
  


  const createCardTemplate = (zapatillas)=> {
  const { id,name,bid,category,cardImg } = (zapatillas)

  return `
 <div class="productos"> 
 <img src= ${cardImg} alt= ${name}> 
 <h3> ${name} </h3>
 <p> $ ${bid}</p> 
 <button>comprar</button> 
 </div>
   `;
 };

 const renderProducts = (zapatillaslist) =>{
  productosContainer.innerHTML += zapatillaslist
  .map(createCardTemplate)
  .join("");
 };

 const isLastIndexOf = () => {
  return appState.currentProductsIndex === appState.productsinit -1;

 }

 const showmoreproducts = () => {
 appState.currentProductsIndex += 1;
 let { products , currentProductsIndex} = appState;
 renderProducts ( products [currentProductsIndex]);
 if (isLastIndexOf ()) {
  showMoreBtn.classList.add("hidden");
 }
 };


const init = () =>{
 renderProducts(appState.products[appState.currentProductsIndex]);
 showMoreBtn.addEventListener("click", showmoreproducts);
};
init();
















