// 1) Convert the following JavaScript array into a TypeScript tuple
//const userInfo = [101, "Ema", "John", true,  , "2023"];

const userInfo = [101, "Ema", "John", true,   , "2023"];
const userInfoTuple:[number,string,string,boolean,undefined,string]=[101, "Ema", "John", true,   , "2025"];
console.log(userInfoTuple);

// 2) Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

function findCommonElements(a1:number[],a2:number[]):number[]{
    const commonElements:number[]=[];
    for(const i of a1){
        if(a2.includes(i)){
            commonElements.push(i);
        }
    }
    return commonElements;
}
console.log(findCommonElements([1,2,3,4,5,6],[3,4,5,6]));


// 3) You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

// Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

interface Product{
    id:number,
    name:string,
    price:number,
    category:string
}

function filterProducts<T>(products:T[],criterion: keyof T,value:T[keyof T]):T[]{
    return products.filter(product=>product[criterion]===value)
}

const products:Product[]=[
  { id: 1, name: 'Product 1', price: 10, category: 'Category A' },
  { id: 2, name: 'Product 2', price: 20, category: 'Category B' },
  { id: 3, name: 'Product 3', price: 30, category: 'Category A' },
  { id: 4, name: 'Product 4', price: 40, category: 'Category C' },
]
console.log(filterProducts(products,'id',3));

// 4) Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type ProductTuple=[string,number,number];
function CalculateTotalCost(products:ProductTuple[]):number{
    let totalCost=0;
    for(const [name,price,quantity] of products){
        totalCost+=(quantity*price);
    }
    return totalCost;
}

const products2: ProductTuple[] = [
    ['Product 1', 10, 2],
    ['Product 2', 20, 1],
    ['Product 3', 30, 3],
  ];
  
const totalCost: number = CalculateTotalCost(products2);
console.log(totalCost);

// 5)Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

function summationOfEven(numbers:number[]):number{
    let sum=0;
    for(const num of numbers){
        if(num%2==0)sum+=num;
    }
    return sum;
}

console.log(summationOfEven([1,2,3,4,5,6]));

// 6)Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface Person{
    name:string;
    age:number;
    email:string;
}

function matchedPerson(persons:Person[],email:string):(string|null){
    for(const person of persons){
        if(person.email===email){
            return person.email;
        }
    }
    return null;
}

console.log(matchedPerson([
        {name:"plabon",age:24,email:"plabonchowdhury9@gmail.com"},
        {name:"dibbo",age:25,email:"dibbo6@gmail.com"},
        {name:"lahiri",age:24,email:"lahiri90@gmail.com"}
    ],
    "dibbo66@gmail.com"));


// 7)Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.


function findMaxAndMin(...a:number[]):[number,number]{
    const min=Math.min(...a);
    const max=Math.max(...a);
    return [min,max];
}

const numbers:number[]=[1,1,2,3,6,8,1,5];
const [MIN,MAX]=findMaxAndMin(...numbers,6,10);
console.log("minimum=",MIN);
console.log("maximum=",MAX);

// 8)Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.

function f(color:'red'|'green'|'blue',bool?:boolean):void{
    if(bool){
        console.log((color as string).toUpperCase());
    }else{
        console.log((color as string).toLowerCase());
    }
}
f('red',true);


// npx ts-node-dev --respawn index.ts
  




