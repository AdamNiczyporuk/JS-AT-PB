class product
{
    constructor(id,name,model,year,price,energyUsage)
    {   this.id=id;
        this.name=name; 
        this.model=model;
        this.year=year;
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
        return this.year
    }
    productYearAge()
    { 
        return year.getFullYear() +"years";
    }

}