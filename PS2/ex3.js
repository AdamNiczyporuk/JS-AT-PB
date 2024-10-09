function createArraySum200() {
  let array = [];
  let sum = 0;
  while (sum < 200) {
    let number = Math.floor(Math.random() * 10) + 1;
    array.push(number);
    sum += number;
    console.log(sum);
  }
  console.table(array);
  return array;
}
function findMin(array) {
  let minValue = Maths.min(...array);
  let index = array.indexOf(minValue);
  array.splice(index, 1);
  console.table(array);
}

function findMax(array) {
  let max = Math.max(...array);
  console.log(max);
  let index = array.lastIndexOf(max);
  array.splice(index, 1);
  console.table(array);
}

function CountNumber(array) {
  const count = {};

  array.forEach((value) => {
    if (count[value]) {
      count[value]++;
    } else {
      count[value] = 1;
    }
  });

  console.table(count)
}


function AddToEnd(array)
{ 
  sliced = array.splice(0,10)
  array.push(...sliced)
  console.table(array)
}

array = createArraySum200();
AddToEnd(array);
