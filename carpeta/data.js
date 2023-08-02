const productos = [
    {
        id: 1,
        name: "Zapatillas Roma",
        bid: 200,
        category: "niños",
        cardImg: "./imagenes/zapatillasroma.jpg",

    },

    {
        id:2,
        name:"zapatillas Francia",
        bid: 200,
        category: "niños",
        cardImg: "./imagenes/zapatillasfrancia.jpg"
    },


    {
        id:3,
        name:"Zapatillas New York",
        bid: 220,
        category: "niños",
        cardImg:"./imagenes/zapatillasnewyork.png",
    },
    
    {
        id:4,
        name: "Zapatillas áfrica",
        bid: 250,
        category: "niños",
        cardImg:"./imagenes/zapatillasafrica.png",
        
    }

];

const divideProductsInParts = (size) => {
    let productList = [];
    for (let index = 0; index < productos.length; index += size) {
        productList.push(productos.slice( index, index + size));

    }
    return productList;
};

console.log (divideProductsInParts(2));


const appState = {
    products: divideProductsInParts(2),
    currentProductsIndex: 0,
    productsinit: divideProductsInParts(2).length,
    activeFilter: null,
};

