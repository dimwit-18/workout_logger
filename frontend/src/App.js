import './App.css';
import {useState} from 'react';

const env = {
  server_path: 'http://ec2-16-171-159-66.eu-north-1.compute.amazonaws.com:3000',
  local_server_path: 'http://localhost:3000'
}

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('')

  const url = env.server_path;
  async function onSubmit() {
    let body = JSON.stringify({name: name})
    try{
      let res = await fetch(url+'/hello', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: body,
          })
      let json = await res.json()
      setGreeting(json.greet)
    } catch(err){
      console.log("The error is ", err)
    }
  }

  return (
    <div style={{paddingLeft:'10px', paddingTop:'10px'}}>
      <div>Enter a name</div>
      <input type="text" onChange={(e)=> {setName(e.target.value)}}></input>
      <input type="submit" value="Submit" onClick={onSubmit}></input>
      <div>{greeting}</div>
    </div>
  );
}

export default App;
