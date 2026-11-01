// let myString: string = "Programming Hero";
// let myNumber: number = 5432;
// let myBoolean: boolean = true;
// let mySymbol: symbol = Symbol();
// let myBigInt: bigint = 100n;

const addTwo = (a: number, b: number): number => {
  return a + b;
};
console.log(addTwo(100, 30));


//------------ Array & Tuple read only modifier ------------------//

const arr: Array<string> = ["Programming", "Hello", "Tawsif"];
// const arr: string[] = ["Programming", "Hello", "Tawsif"];
// const num : number[] = [1,2,3,4,5];

const dhakaLatLong : readonly [number, number] = [12.3421, 12312]

//------------- Rest parameters ---------------//

const sum = (...numbers: number[]) =>{
  return numbers.reduce((total,sum)=> total + sum, 0)
}
sum(1,2,3,4,5)

const logUserAction = (...args: [name: string, age: number, isActive: boolean])=>{
  const [name, age] = args;
  console.log(name + " is " + age);
}
logUserAction("Tawsif", 23, true)

//----------------- Object type, type alias and interface ----------------//
// const user : {
//   name: string;
//   age : number;
//   isActive : boolean;
//   action : ()=>void;
//   badges : string[]
// } = {
//   name: "Tawsif",
//   age: 23,
//   isActive : true,
//   action:()=> console.log("Hello world"),
//   badges: ["abc", "bcd"]
// }

type TUser = {
  name: string;
  age : number;
  isActive : boolean;
  action : ()=>void;
  badges : string[]
}

interface Iuser {
  name: string;
  age : number;
  isActive : boolean;
  action : ()=>void;
  badges : string[]
}


const user : TUser = {
  name: "Tawsif",
  age: 23,
  isActive : true,
  action:()=> console.log("Hello world"),
  badges: ["abc", "bcd"]
}