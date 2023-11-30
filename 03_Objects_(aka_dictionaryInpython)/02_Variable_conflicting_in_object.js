const name = "utkarsh";
const age = 20;

const person ={
    name,
    age,
    isMarried : false,
};

const person2 = {...person, name : "pandey"}
console.log(person2)

const names = ['"utkarsh', "pandey", "bbd"];
const names2 = [...names, "Joel"];

console.log(names, names2)