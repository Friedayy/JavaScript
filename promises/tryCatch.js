function divide(a, b) {
    try {
        if(b===0){
            throw new Error("division not possible")   
        }
        return a / b;
    } catch (error) {
        return error.message;
    }
}
console.log(divide(10, 5));
console.log(divide(10,0));


////////////////////////////////////////////////////////////


function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Server failed");
        }, 2000);
    });
}

async function fetchData() {
    try {
        const result = await getData();
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
        
    }
}
fetchData();

//////////////////////////////////////////////////////////////


function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Amaan",
                age: 22
            });
        }, 2000);
    });
}

async function showUser() {
    try {
        const result = await getUser();
        console.log("Name: ", result.name);
        console.log("Age: ", result.age);
        
        
    } catch (error) {
        return error;
    }
}
showUser();