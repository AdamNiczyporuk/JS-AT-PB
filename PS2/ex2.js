let data= prompt("Give radius")

let radius = parseFloat(data)

let area = Math.PI * Math.pow(radius,2)
let circuit = 2* Math.PI * radius 

alert("Area " + area +"\n"+  "\nCircuit "+ circuit);