class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct({title, description, price, thumbnail, code, stock, id}){
        const nuevoProducto = new Product({title, description, price, thumbnail, code, stock, id})
        const productos = this.products
        const propiedades = productos.map((p) => {
            return p.code;
        })

        productos.push(nuevoProducto)
        
        for(let i = 0; i < Product.length; i++){
            if(propiedades.includes(nuevoProducto.code)){
                throw new Error("Ya existe un producto con este código")
            } else{
                console.log("Producto añadido con éxito")
            }
        }
    }
    
    getProducts(){
        console.log(this.products)
        return this.products;
    }
    
    getProductById(id){ 
        const producto = this.products.find(p => p.id === id)
        if (producto != undefined){
            console.log(producto)
        } else {
            throw new Error("Not found")
        }
        return producto;
    }
}

class Product{
    title
    description
    price
    thumbnail
    code
    stock
    id

    constructor({title,description,price,thumbnail,code,stock, id = ""}){
        this.title = title
        if (title == undefined){
            throw new Error("el titulo es obligatorio")
        }
        this.description = description
        if (description == undefined){
            throw new Error("la descripcion es obligatoria")
        }
        this.price = price
        if (price == undefined){
            throw new Error("el precio es obligatorio")
        }
        this.thumbnail = thumbnail
        if (thumbnail == undefined){
            throw new Error("la foto es obligatoria")
        }
        this.code = code
        if (code == undefined){
            throw new Error("el codigo es obligatorio")
        }
        this.stock = stock
        if (stock == undefined){
            throw new Error("el stock es obligatorio")
        }
        this.id = id
    }
}

const productoNuevo = new ProductManager();
const id = Math.random().toString(30).substring(2);
const id2 = Math.random().toString(30).substring(2);
const id3 = Math.random().toString(30).substring(2);


productoNuevo.getProducts()

productoNuevo.addProduct({title:"producto prueba", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: 123, stock: 25, id: id})

productoNuevo.getProducts()

productoNuevo.addProduct({title:"producto prueba", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: 123, stock: 25, id: id2})

// productoNuevo.getProductById(id) <= ESTO SUCEDE EN CASO DE ENCONTRAR UN PRODUCTO CON ESE ID.
// productoNuevo.getProductById(id3) <= ESTO SUCEDE EN CASO DE NO ENCONTRAR UN PRODUCTO CON ESE ID.