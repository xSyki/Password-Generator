import React, { useState } from 'react'

import './App.css';
import CheckboxOptions from './ChecboxOptions';

const options = [
  {
      "id": 0,
      "title": "Alphabet",
      "name": "alphabet",
      "data": "abcdefghijklmnopqrstuvwxyz",
      "value": true,
  },
  {
    "id": 1,
    "title": "Big letters",
    "name": "bigLetters",
    "data": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "value": true,
  },
  {
    "id": 2,
    "title": "Numbers",
    "name": "numbers",
    "data": "1234567890",
    "value": true,
  },
  {
    "id": 3,
    "title": "Special",
    "name": "specialSigns",
    "data": `!"#$%&()*+,-./`,
    "value": false,
  }
];

function App() {

  const [passwordOptions, setPasswordOptions] = useState(options)

  const [passwordLenght, setPasswordLenght] = useState(15);

  const [password, setPassword] = useState("");

  const handlePasswordLenght = (e) => {
    setPasswordLenght(e.target.value)
  }

  const generatePassword = () => {
    let password = "";

    let passwordGennerateFrom = "";

    passwordOptions.forEach(option => {
      if(option.value) {
        passwordGennerateFrom += option.data;
      }
    })
    
    for(let i = 0; i < passwordLenght; i++) {
      password += passwordGennerateFrom[Math.floor(Math.random()*passwordGennerateFrom.length)]
    }
    setPassword(password);
  }

  const handleValue = (id, value) => {
    const copyPasswordOptions = JSON.parse(JSON.stringify(passwordOptions));

    copyPasswordOptions.forEach((option) => {
      if(option.id == id) {
        option.value = value;
      }
    })

    setPasswordOptions(copyPasswordOptions);
  }

  return (
    <div className="App">
      <div className='passwordOutput'>
        <div className='passwordOutputText'>{password}</div>
        <button className="copyPassword" onClick={() => navigator.clipboard.writeText(password)}><i className="fas fa-copy"></i></button>
      </div>
      {passwordOptions.map(option => {
      return (
        <CheckboxOptions key={option.id} id={option.id} title={option.title} name={option.name} data={option.data} value={option.value} handleValue={handleValue}/>
      )})}
      <input type="range" name="" id="" value={passwordLenght} min="6" max="100" onChange={handlePasswordLenght} className='passwordLenghtRange'/>
      <input type="number" name="" id="" value={passwordLenght} onChange={handlePasswordLenght} className='passwordLenghtInput'/>
      <button onClick={generatePassword} className='generatePasswordButton'>Generate</button>
    </div>
  );
}

export default App;
