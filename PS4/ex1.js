class product
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
        const year = new Date().getFullYear();
        return year -this.productionYear;
    }
    productYearAge()
    { 
        return year.getFullYear() +"years";
    }

}