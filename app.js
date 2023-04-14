const jsonData = '{"parent":{"name":"Sally","age":45,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}';

// convertir cadena JSON a objeto JavaScript

// actualizar objeto JavaScript

// convertir objeto JavaScript a cadena JSON

// muestra la cadena JSON

let jsobjet = JSON.parse(jsonData)
jsobjet.parent.age=35
let jsObjectToJson = JSON.stringify(jsobjet)
console.log(jsObjectToJson)