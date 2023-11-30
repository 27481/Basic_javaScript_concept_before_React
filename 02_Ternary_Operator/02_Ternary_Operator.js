

// Using this method will take 5 lines of code but we dont want it in react 
if (true){

}else{

}



// Bad way of doing notations
let age = 10;
let name ="Utkarsh";


if(age>10){
    name="rohit"
}else{
    name="pandey"
}



// short hand notation 
name = age>10 ? "pedro" : "jack"


// Example fo using Ternary Operator in React 
const component = () =>{
    return age > 10 ? <div>Pedro</div> : <div>Jack</div>
}