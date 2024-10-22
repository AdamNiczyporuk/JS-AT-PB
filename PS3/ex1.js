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

function combine1(operation,array1,array2)
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

function combine2(operation, ...arrays)
{ 
    const lenght = arrays[0].length;
    if(!arrays.every(array => array.length === lenght))
    {
        throw new Error('Arrays must have the same length');
    }

    let result = []; 

    for(let i =0;i<lenght;i++)
    {
        let values=arrays.map(array => array[i]);
        result.push(operation(...values));
    }
    return result;
}

//1
// let wynik=combine((a,b)=>a+b,[4,5,6],[10,20,30]);
// console.log(wynik);
//2 
// let xCoords = [1, 2, 3];
// let yCoords = [7, 8, 9];

// let points = combine((x, y) => ({ x: x, y: y }), xCoords, yCoords);

// console.log(points); // Zwraca: [{x: 1, y: 7}, {x: 2, y: 8}, {x: 3, y: 9}]

let wynik = combine((a, b, c) => a + b + c, [1, 2, 3], [5, 6, 7], [10, 20, 30]);
console.log(wynik); // Zwraca: [16, 28, 40]