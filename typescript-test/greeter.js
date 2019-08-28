var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var user = new Student("Taylor", "", "Swift");
document.body.innerHTML = greeter(user);
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var newName1 = o.a, newName2 = o.b;
console.log("test", newName1, newName2);
