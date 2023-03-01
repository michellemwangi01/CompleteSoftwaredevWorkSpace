import React, { useState } from 'react'
import '../Components/Styles/TestStyles.css'

const Test = (props) => {

    const[newName, setName] = useState(props.personData.name)
    const nameHandler = () => {
    setName("Amirah")
        }

    const resetNameHandler = () => {
        setName(props.personData.name )
    }


    const [count, setCount] = useState(0)

    const countIncrement = ()=> {
        setCount(count+1)
    }
    const countDecrement = ()=> {
        setCount(count-1)
    }
    const resetCount = () =>{
        setCount(0)
    }



    return(
        <>
       <div id='ReactiveUpdating'>
       <h4>Changing Names Reactively</h4>
       <h5>The name is {newName} aka {props.superhero}</h5>
       <button onClick={nameHandler}>Click me to SetName</button> 
       <button onClick={resetNameHandler}>Click me to ResetName</button>

       <h4>Creating Reactive Counter</h4>
       <h5>Counter: {count}</h5>
       <button onClick={countIncrement}> Click to increase (+)</button>
       <button onClick={countDecrement}>Click to decrease (-)</button>
       <button onClick={resetCount}>Click to reset (0)</button>

       <p>{props.children}</p>
       </div>
        </>
    )
}

export default Test