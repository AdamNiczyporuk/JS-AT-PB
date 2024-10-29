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

// Przykład użycia z danymi testowymi
const sklep = new Shop();
const magazyn = new Magazine();

// Dodawanie produktów do magazynu
const produkt1 = new Product(1, "Laptop", "Dell XPS 13", 2021, 5000, 200);
const produkt2 = new Product(2, "Smartphone", "Samsung Galaxy S21", 2022, 3000, 150);
const produkt3 = new Product(3, "Tablet", "iPad Pro", 2023, 4000, 100);

magazyn.addProduct(produkt1, 10);
magazyn.addProduct(produkt2, 5);
magazyn.addProduct(produkt3, 15);

// Dodawanie produktów do sklepu
sklep.addProductWithId(1, "Laptop", "Dell XPS 13", 5000, 200);
sklep.addProductWithId(2, "Smartphone", "Samsung Galaxy S21", 3000, 150);
sklep.addProductWithId(3, "Tablet", "iPad Pro", 4000, 100);

// Sprawdzanie szczegółów produktów w sklepie
console.log("Szczegóły produktów w sklepie:");
console.log(sklep.AllproductsDetails());

// Tworzenie zamówienia
const zamówienie = sklep.createOrder();
console.log(`Zamówienie utworzone: ${zamówienie.id}`);

// Dodawanie produktów do zamówienia
sklep.addProductToOrder(zamówienie.id, 1, 2);  // 2 sztuki Laptopa
sklep.addProductToOrder(zamówienie.id, 2, 1);  // 1 sztuka Smartfona

// Realizacja zamówienia
console.log("Realizacja zamówienia...");
try {
    sklep.fulfillOrder(zamówienie.id, magazyn);
    console.log("Zamówienie zrealizowane pomyślnie.");
} catch (error) {
    console.error(error.message);
}

// Sprawdzenie stanu magazynu po realizacji zamówienia
console.log("Stan magazynu po realizacji zamówienia:");
console.log(`Laptop: ${magazyn.inventory[1]}`);
console.log(`Smartphone: ${magazyn.inventory[2]}`);
console.log(`Tablet: ${magazyn.inventory[3]}`);

// Edytowanie szczegółów produktu
const updatedProduct = new Product(1, "Laptop", "Dell XPS 13", 2021, 5500, 220);
magazyn.editProduct(1, updatedProduct);
console.log("Zaktualizowane szczegóły produktu:");
console.log(sklep.productDetails(1));

// Wyświetlanie szczegółów wszystkich produktów po edycji
console.log("Szczegóły wszystkich produktów po edycji:");
console.log(sklep.AllproductsDetails());

