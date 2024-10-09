let array = ["Adam", "Ela", "Franek", "Marek", "Kazimierz"];


function NameCode(name)
{ 
    name = name.replace(/a/g, "4"); 
    name = name.replace(/e/g, "3");
    name = name.replace(/A/g, "4");
    name = name.replace(/E/g, "3");
    return name
}

function TrimName(name)
{ 
    if(name.length > 6)
    {
       return name.slice(0,3)+"..."+name.slice(-3)
    }
    return name
}

let names = array.map(name => {
    let CodedName = NameCode(name); 
    return TrimName(CodedName); 
});

console.log("Zakodowane imiona:", names);