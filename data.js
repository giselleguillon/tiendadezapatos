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
        
    },

    {
        id: 5,
        name: "Zapatillas Brasil",
        bid: 300,
        category: "mujer",
        cardImg: "./imagenes/zapatillabrasil.jpg",
    },

    {
        id: 6,
        name: "Zapatillas china",
        bid: 200,
        category: "mujer",
        cardImg: "./imagenes/zapatillachina.png",
    },

    {
        id: 7,
        name: "Zapatillas Suiza",
        bid: 250,
        category: "mujer",
        cardImg: "./imagenes/zapatillasuiza.jpg",
    },
    {
        id: 8,
        name: "Zapatillas Panama ",
        bid: 200,
        category: "hombre",
        cardImg: "./imagenes/zapatillapanama.jpg",
    },

    {
        id: 9,
        name: "Zapatillas Peru",
        bid: 200,
        category: "mujer",
        cardImg: "./imagenes/zapatillasperu.png",
    },
    {
        id: 10,
        name: "Zapatillas Canada",
        bid: 280,
        category: "hombre",
        cardImg: "./imagenes/zapatillascanada.png",
    },

    {
        id: 11,
        name: "Zapatillas Suecia ",
        bid: 200,
        category: "hombre",
        cardImg: "./imagenes/zapatillasuecia.jpg",
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

