/*
Use:
- .filter()
- .map()
- arrow functions
Don't use a for loop.
 */
function getActiveAdultNames(users) {
   return users
    .filter((user) => {
        return user.age >= 18 && user.active === true;
    })
    .map((user) => {
        return user.name;
    });

}

const users = [
    { name: "Amaan", age: 22, active: true },
    { name: "Rahul", age: 17, active: true },
    { name: "Sara", age: 25, active: false },
    { name: "Zaid", age: 20, active: true }
];

const result = getActiveAdultNames(users);
console.log(result)