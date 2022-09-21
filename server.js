const http = require('http');
const port = 8000;
const data = {
    Name:'Pitambar',
    LastName:'Bhadra',
    Age:26,
    city:'Kolkata'
}
const jsonData = JSON.stringify(data);

const server = http.createServer((req, res) => {
    res.write(`<h1> Welcome To New World </h1>`);
    res.write(jsonData);
    res.end();
})


server.listen(port, () => {
    console.log(`Connected to port ${port}💡`);
})
