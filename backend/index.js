const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('HEY!')
})

app.post('/hello', (req, res) => {
    let data;
    try{
      data = JSON.parse(req.body);
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

