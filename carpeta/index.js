
  const productosContainer = document.querySelector(".product__container");
  
  


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

const CardTemplate = productos.map (createCardTemplate) .join("");

productosContainer.innerHTML= CardTemplate;


















