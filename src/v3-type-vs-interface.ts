// TODO interface

interface Animal {
  species: string;
}

interface Cat extends Animal {
  // To get animal property in cats interfaces

  breed: string;
}
const cat: Cat = {
  species: "Felix Catus",
  breed: "Persian",
};

// By types

type Vehicle = {
  brand: string;
};
type Car = Vehicle & {  // to get vehicle property in Car
  model: string;
};
const car: Car = {
  brand: "Toyota",
  model: "Corolla",
};

interface IEmployee {
    name: string
}
interface IEmployee {
    id: number
}

const employee: IEmployee = {
    id:123,
    name:" Tawsif"
}
