// 1. Primitive Types

// Type -> Number
let age: number = 27;
let pi: number = 3.14;
console.log("AgE: ", age);
console.log("PI: ", pi);

// Type -> String
let str1: string = "Naman";
let str2: string = 'Goel';
let str3: string = `${str1 + " " +str2}`;
console.log("Hello,", str3);

// Type -> Boolean
let isAdult: boolean = true;
let isNew: boolean = false;
console.log("Is Adult:",isAdult);
console.log("Is New:",isNew);

// Array Types
let arr1: Array<number> = [1,2,3,4,3.14,98.44];
let arr2: Array<string> = ["Naman", "Goel", "Hello"];

console.log("Array1:", arr1[4]);
console.log("Array2:", arr2[2]);

// any type

let obj: any = { x: "Any String" };
console.log(obj.x);

function fn(s: string) {
  console.log(s.substring(3));
}

fn("Hello World");

let arr: any = ["Naman", 27, "Goel", "Hello", 25.10];

console.log(arr[3], arr[0], arr[2], "Your age is", arr[1], "any you already  spend", arr[4], "Months this year!");

//null Type

let name: string | null = null;
name= "Naman";
console.log("name:",name);

let num1: number | null = null;
console.log("num1",num1);

// undefined Type

let num2: number | undefined;
num2 = 12;
console.log("num2:",num2);

// bigint Type

let num3: bigint = BigInt(9007199254740991)
let num4: bigint = 12345678987654321n;
console.log("num3:",num3);
console.log("num4:",num4);

// Function Type

function detail(age: number, name: string){
    console.log("My name is", name, "and my age is", age);
}

detail(27, "Naman");


function age1(): number{
    return 27;
}

console.log("Age:", age1());

async function getFavNumber(): Promise<number>{
  return 29;
}

getFavNumber().then((num) => {console.log("Fav Number:", num);})


const names = ["Alice", "Bob", "Eve"];

names.forEach(function(s){console.log("Names:",s.toUpperCase())});

names.forEach(function(s){console.log("Names:",s.toLowerCase());});

function printCoord(pt:{x:number, y:number}){     
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's x value is " + pt.y);
}
printCoord({x: 3, y: 7});
