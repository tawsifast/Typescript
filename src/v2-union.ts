// Literal union
type Role = "user" | "admin" | "manager"

const userRole : Role = "manager"
console.log(userRole);

// Object union

type Admin = {id: number, role: "admin", privilages: string[]}
type Member = {id: number, role: "member", plans: string[]}

type User = Admin | Member

const user : User = {id:123, role:"member", plans:["addc","wswa"]}
