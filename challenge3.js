/*
What should your function do?
1. Loop through the users array.
2. Check whether each user's role is "admin".
3. Check whether the user is active (active === true).
4. Add matching users to a new array.
5. Return the new array.
Expected result:
[
    { name: "Amaan", role: "admin", active: true }
]
 */
function getActiveAdmins(users) {
    let result = [];
    for(let i =0; i<users.length;i++){
        if(users[i].role=== "admin" && users[i].active=== true){
            result.push(users[i]);
        }
    }
    return result;
}

const users = [
    { name: "Amaan", role: "admin", active: true },
    { name: "Rahul", role: "user", active: true },
    { name: "Sara", role: "admin", active: false },
    { name: "Zaid", role: "user", active: true }
];

const result = getActiveAdmins(users);
console.log(result);