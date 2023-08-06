
  const productosContainer = document.querySelector(".product__container");
  const showMoreBtn = document.querySelector (".button");
  const categoryContainer = document.querySelector (".container__productos");
  const categoryList = document.querySelectorAll(".category")

  const createCardTemplate = (zapatillas)=> {
  const { id,name,bid,category,cardImg } = zapatillas;

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

 };

 const showmoreproducts = () => {
 appState.currentProductsIndex += 1;
 let { products , currentProductsIndex} = appState;
 renderProducts ( products [currentProductsIndex]);
 if (isLastIndexOf ()) {
  showMoreBtn.classList.add("hidden");
 }
 };







// filtros

const isInactiveFilterBtn = (element) => {
return (
  element.classList.contains ("category") &&
  !element.classList.contains ("active")
);
};

 const changeBTNActiveState = (selectedCategory) =>{
 const category = [...categoryList];
 category.forEach((categorybtn)=>{
   if (categorybtn.dataset.category!== selectedCategory)
   {
     categorybtn.classList.remove("active")
     return
   }
   categorybtn.classList.add("active");
 })
 };

const changeFilterState = (BTN) => {
appState.activeFilter= BTN.dataset.category;
changeBTNActiveState (appState.activeFilter)
setShowMoreVisibility();
};

 const setShowMoreVisibility = () =>
 {
 if (!appState.activeFilter){
   showMoreBtn.classList.remove("hidden");
   return;
 }
showMoreBtn.classList.add ("hidden");
 };


const renderFilterProducts = () =>
{
const filteredProducts = productos.filter ((product)=>{
return product.category === appState.activeFilter;
});
renderProducts (filteredProducts);
};




 const applyfilter = ({target}) =>{
  if (!isInactiveFilterBtn(target)){
    return;
  }

  changeFilterState(target);



productosContainer.innerHTML = "";
 if (appState.activeFilter){
  renderFilterProducts ();
  appState.currentProductsIndex= 0;
  return;
 }
 renderProducts (appState.products [0]);



 };







const init = () =>{
 renderProducts(appState.products[appState.currentProductsIndex]);
 showMoreBtn.addEventListener("click", showmoreproducts);
 categoryContainer.addEventListener("click", applyfilter)
};
init();
















