function skarbonka(name, balance=0){ 
    return function(amout)
    { 
        if(amout === undefined)
        {
            console.log(`${name} get ${balance}`);
            return balance;
        }
        else 
        { 
            balance += amout;
            console.log(`${name} set  ${balance}`);    
        }
    }

}

let s = skarbonka("piotr",100);
s(20) 
let ile = s()