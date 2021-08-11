// to install fetch in node : npm install node-fetch

const fetch = require("node-fetch");

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json()) // here, response.json() is returning a promise, so we can hold it in another promise response
  .then((json) => {
    console.log(json);

    json.map((data) => {
        console.log(`\nId : ${data.id}`);
        console.log(`Name : ${data.name}`);
        console.log(`Username : ${data.username}`);
        console.log(`Email : ${data.email}`);
    })
  })
  .catch((err)=> console.log(`Error : ${err}`));