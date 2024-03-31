const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept');
  next();
})

let jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  res.send('HEY!')
})

app.post('/hello', jsonParser, (req, res) => {
    let data;
    try{
      data = req.body;
    }
    catch(err){
      res.status(400).send('Invalid JSON format');
    }

    let name = data.name
    if(name){
      let response = {greet: "Hello " + name + "!!"};
      res.send(JSON.stringify(response));
    }
    else
      res.status(400).send("Invalid name. name field cannot be empty")
})

app.listen(3000, () => console.log('Server running on port 3000'))

