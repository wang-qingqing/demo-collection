class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person){
    return "Hello," + person.firstName + " " + person.lastName;
}

let user = new Student("Taylor","","Swift");
document.body.innerHTML = greeter(user);

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a: newName1, b: newName2 }:{a:string,b:number} = o;
console.log("test",newName1,newName2);


