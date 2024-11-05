// const express = require("express");
// const app = express();

// app.get('/',(req,res) => {
    
// })
console.log("hii");
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.map(each => console.log(each));
}
let url = "http://localhost:3000/users";
fetchData(url);