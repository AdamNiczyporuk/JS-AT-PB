class Product
{
    constructor(id,name,model,productionYear,price,energyUsage)
    {   this.id=id;
        this.name=name; 
        this.model=model;
        this.productionYear=productionYear;
        this.price=price;
        this.energyUsage=energyUsage;
    }

    itemPrice()
    { 
        return this.price
    }
    energyCost()
    { 
        return this.energyUsage
    }
    productYear()
    { 
        const year = new Date().getFullYear()
        return year -this.productionYear
    }
    productYearAge()
    { 
        const age  = this.productYear()
        if(age === 1 ) return `${age} rok`
        if(age >=2  && age <=4) return `${age} lata`
        return `${age} lat`
    }

}

class ShopList
{ 
    constructor()
    { 
        this.products = []
    }
    addProduct(product)
    { 
        if(this.products.some(p => p.id === product.id))
        { 
            throw new Error("Product exit in list")
        }
        else
        { 
            this.products.push(product)
        }
        
    }
    productDetails(id)
    { 
       const product = this.products.find(p => p.id === id)
       if(!product) 
       {
            throw new Error("Product not found")
       }

        return `Produkt: ${product.name}, Model: ${product.model}, Cena: ${product.price}, Wiek: ${product.productYearAge()}, Koszt energii: ${product.energyCost()} PLN`
    }

    AllproductsDetails()
    { 
        if(this.products.length === 0)
        { 
            return "No products"
        }
        return this.products.map(product => this.productDetails(product.id)).join("\n");

    }
    editProduct(id,newproduct)
    { 
        const product = this.products.find(p => p.id === id)
        if(!product)
        { 
            throw new Error("Product not found")
        }
        product.name = newproduct.name
        product.model = newproduct.model
        product.price = newproduct.price
        product.productionYear = newproduct.productionYear
        product.energyUsage = newproduct.energyUsage

        
    }
}

// const produkt = new  Product(1, "Lodówka", "LG123", 2018, 2500, 400)
// console.log("Koszt produktu:", produkt.itemPrice())
// console.log("Koszt zużycia energii:", produkt.energyCost())
// console.log("Wiek produktu:", produkt.productYear())
// console.log("Wiek produktu (słownie):", produkt.productYearAge())
// Tworzenie przykładowych produktów
const product1 = new Product(1, "Laptop", "Dell XPS 13", 2021, 5000, 200);
const product2 = new Product(2, "Telewizor", "Samsung QLED", 2019, 3000, 250);
const product3 = new Product(3, "Pralka", "Bosch Serie 6", 2018, 2000, 300);
const product4 = new Product(4, "Lodówka", "LG Smart", 2022, 4000, 150);
const product5 = new Product(5, "Odkurzacz", "Dyson V11", 2020, 1500, 100);

// Tworzenie listy produktów i dodawanie produktów
const shopList = new ShopList();

class Magazine extends ShopList
{
    constructor(){
        super();
        this.inventory = {}
    }
    addProduct(product,quantity)
    { 
        if(this.products.some(p=>p.id === product.id))
        {
            throw new Error("Product exit in list")
        }
        else{ 
            this.products.push(product)
            this.inventory[product.id] = quantity
        }
    }
    takeProduct(id,quantity)
    {
         let product; 

         if(typeof id === "number")
         {
         product = this.products.find(p => p.id === id)
         }
         else if(typeof id === "string")
         {
            product = this.products.find(p => p.name === id)
         }
    }
}

try {
    shopList.addProduct(product1);
    shopList.addProduct(product2);
    shopList.addProduct(product3);
    shopList.addProduct(product4);
    shopList.addProduct(product5);

    console.log("Lista wszystkich produktów:");
    console.log(shopList.AllproductsDetails());

    // Edytowanie produktu
    const updatedProduct = new Product(1, "Laptop", "Dell XPS 15", 2022, 5500, 220);
    shopList.editProduct(1, updatedProduct);

    console.log("\nPo edytowaniu produktu 1:");
    console.log(shopList.AllproductsDetails());

    // Wyświetlanie szczegółów jednego produktu
    console.log("\nSzczegóły produktu o ID 3:");
    console.log(shopList.productDetails(3));

} catch (error) {
    console.error(error.message);
}
