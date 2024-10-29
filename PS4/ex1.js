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
        const age  = this.productYear();
        if(age === 1 ) return `${wiek} rok`
        if(age >=2  && age <=4) return `${wiek} lata`
        return `${wiek} lat`
    }

}