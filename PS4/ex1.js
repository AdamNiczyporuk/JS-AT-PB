class Product {
    constructor(id, name, model, productionYear, price, energyUsage) {
        this.id = id;
        this.name = name;
        this.model = model;
        this.productionYear = productionYear; // Zmiana roku na liczbę
        this.price = price;
        this.energyUsage = energyUsage;
    }

    itemPrice() {
        return this.price;
    }

    energyCost() {
        return this.energyUsage;
    }

    productYear() {
        const year = new Date().getFullYear();
        return year - this.productionYear;
    }

    productYearAge() {
        const age = this.productYear();
        if (age === 1) return `${age} rok`;
        if (age >= 2 && age <= 4) return `${age} lata`;
        return `${age} lat`;
    }
}

class ShopList {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        if (this.products.some(p => p.id === product.id)) {
            throw new Error("Product already exists in the list");
        } else {
            this.products.push(product);
        }
    }

    productDetails(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            throw new Error("Product not found");
        }

        return `Produkt: ${product.name}, Model: ${product.model}, Cena: ${product.price}, Wiek: ${product.productYearAge()}, Koszt energii: ${product.energyCost()} PLN`;
    }

    AllproductsDetails() {
        if (this.products.length === 0) {
            return "No products";
        }
        return this.products.map(product => this.productDetails(product.id)).join("\n");
    }

    editProduct(id, newProduct) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            throw new Error("Product not found");
        }
        product.name = newProduct.name;
        product.model = newProduct.model;
        product.price = newProduct.price;
        product.productionYear = newProduct.productionYear;
        product.energyUsage = newProduct.energyUsage;
    }
}

class Magazine extends ShopList {
    constructor() {
        super();
        this.inventory = {};
    }

    addProduct(product, quantity) {
        // Użyj super.addProduct, aby dodać produkt do listy
        super.addProduct(product);
        this.inventory[product.id] = quantity; // Teraz to działa, gdy produkt jest dodany
    }

    takeProduct(id, quantity) {
        let product;
        if (typeof id === "number") {
            product = this.products.find(p => p.id === id);
        } else if (typeof id === "string") {
            product = this.products.find(p => p.name === id);
        }

        if (!product || !this.inventory[product.id]) {
            throw new Error("Product not found in inventory or insufficient stock");
        }

        if (this.inventory[product.id] < quantity) {
            throw new Error("Not enough products in stock");
        }

        this.inventory[product.id] -= quantity;

        const productCopy = { ...product };
        return productCopy;
    }
}

class Shop extends ShopList {
    constructor() {
        super();
        this.currentId = 1;
        this.orders = [];
    }

    addProduct(name, model, price, energyUsage) {
        const id = this.currentId++;
        const productionYear = new Date().getFullYear(); // Używamy roku jako liczby
        const product = new Product(id, name, model, productionYear, price, energyUsage);

        super.addProduct(product); // Używamy addProduct z ShopList
    }

    addProductWithId(id, name, model, price, energyUsage) {
        const productionYear = new Date().getFullYear();
        const product = new Product(id, name, model, productionYear, price, energyUsage);
        
        // Użyj super.addProduct, aby dodać produkt do listy
        super.addProduct(product);
    }

    createOrder() {
        const newOrder = { id: this.orders.length + 1, items: [] };
        this.orders.push(newOrder);
        return newOrder;
    }

    addProductToOrder(orderId, productId, quantity) {
        const order = this.orders.find(order => order.id === orderId);
        if (!order) {
            throw new Error("Order not found.");
        }

        const product = this.products.find(p => p.id === productId);
        if (!product) {
            throw new Error("Product not found in the shop.");
        }

        order.items.push({ productId, quantity });
    }

    fulfillOrder(orderId, magazyn) {
        const order = this.orders.find(order => order.id === orderId);
        if (!order) {
            throw new Error("Order not found.");
        }

        order.items.forEach(item => {
            magazyn.takeProduct(item.productId, item.quantity);
        });

        console.log(`Order number ${orderId} has been fulfilled.`);
    }
}

// Przykład użycia
const sklep = new Shop();
const magazyn = new Magazine();

// Dodajemy produkt do magazynu
const produkt = new Product(1, "Laptop", "Dell XPS 13", 2021, 5000, 200);
magazyn.addProduct(produkt, 10);

// Dodajemy produkt do sklepu
sklep.addProductWithId(1, "Laptop", "Dell XPS 13", 5000, 200);

// Tworzymy zamówienie
const zamówienie = sklep.createOrder();
sklep.addProductToOrder(zamówienie.id, 1, 2);  // Dodajemy 2 sztuki Laptopa do zamówienia

// Realizacja zamówienia
sklep.fulfillOrder(zamówienie.id, magazyn);
