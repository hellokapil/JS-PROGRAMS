
// default parameter
function greet(name="User") { // name: parameter
    console.log("Hello",name);
    return "User is greeted";
}

let userName = "Shweta";
const msg = greet(userName);
console.log("msg-",msg);



function authenticateUser(username, password){
    // 
    return true;
}

const loginSuccessful = authenticateUser("u","p");
if(loginSuccessful === true){
    greet("u");





function multiplyByTwo(a){
    return 2*a;
}

function square(a){
    return a*a;
}

// 2 * a^2
function getResult(a){
    let squareValue = square(a); //25
    let doubledValue = multiplyByTwo(squareValue); // 50;
    console.log(doubledValue);
}

let a = 5;
getResult(a);




// Function expression

// function add(a,b){
//     console.log(a+b);
// }

const add = function(a,b){
    console.log(a+b);
}
add(2,3);

// function that has no name is called a annonymous fn






