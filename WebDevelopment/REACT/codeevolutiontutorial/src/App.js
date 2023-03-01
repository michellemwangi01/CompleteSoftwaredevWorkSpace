import React from 'react';
import './App.css';
import Test from './Components/Updating';
import { Welcome } from './Components/Welcome';


function App() {
 const person = {
  name: 'Mira'
 }



  return (
    <>
      <div>
      <Test personData = {person} superhero = 'Superwoman' >
        <div>
          <form>
            <label>Props children: </label>
            <input type='text' placeholder='me a monkey'></input>
          </form>
        </div>
        </Test>
        <Welcome personData = {person} superhero = 'Wonderwoman'/>
      </div>
    </>
  );
}

export default App;
