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

const produkt = new  Product(1, "Lodówka", "LG123", 2018, 2500, 400)
console.log("Koszt produktu:", produkt.itemPrice())
console.log("Koszt zużycia energii:", produkt.energyCost())
console.log("Wiek produktu:", produkt.productYear())
console.log("Wiek produktu (słownie):", produkt.productYearAge())