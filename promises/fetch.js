
async function getUsers() {
    try {
        const result = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await result.json();
        for(const user of data){
            console.log(user.name);
        }

    } catch (error) {
        console.log("Error:", error);
        
    }
}
getUsers();