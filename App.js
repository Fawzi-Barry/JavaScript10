// 1
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 2
async function sayHelloWorld() {
    console.log("Hello");
    await delay(2000);
    console.log("World");
}

// Call the async function
sayHelloWorld();
