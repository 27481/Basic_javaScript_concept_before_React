const person ={
    name : "pedro",
    age : 20,
    isMarried : false,
};


/* 
const name = person.name
const age=person.age
const isMarried = person.isMarried
 */

// This is take too much place we can do it by using destructing the object 

const {name, age, isMarried} = person;
