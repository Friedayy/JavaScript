function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function callsData(){
    const data = await getData()
    console.log(data);
    
}
callsData();




try {
    console.log("A");
    throw new Error("Something went wrong");
    console.log("B");
} catch (error) {
    console.log("C");
}

console.log("D");