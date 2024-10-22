function combine(operation,array1,array2)
{
    if( array1.length !== array2.length)
    {
        throw new Error('Arrays must have the same length');
    }

    let result = [];

    for(let i = 0; i < array1.length; i++)
    {
        result.push(operation(array1[i],array2[i]));
    }
    return result;
}
let wynik=combine((a,b)=>a+b,[4,5,6],[10,20,30]);
console.log(wynik);