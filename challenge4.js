/*Return only users who are both:
age >= 18
AND
active === true

Expected result:
Amaan
Zaid
 */
function getActiveAdults(users) { 
    let result = [];
    for(let i = 0; i<users.length; i++){
        if(users[i].age>=18 && users[i].active===true){
            result.push(users[i].name);
        }
    }
    return result;
}

const users = [
    { name: "Amaan", age: 22, active: true },
    { name: "Rahul", age: 17, active: true },
    { name: "Sara", age: 25, active: false },
    { name: "Zaid", age: 20, active: true }
];
const result = getActiveAdults(users);
console.log(result)