import { useState } from 'react'
import './App.css'

function App() {
  //useState return two value in array form so we used [counter,setcount] counter is a variable and setCount act as a function .
  let [counter,setCount] = useState(10);

  const addValue = () => {
    counter = counter + 1; //in js we used to write this and we can see the change in value in dom usin getElementById method .but here in react we
    //cant do it that way ui is changed by react , setCount will change the value when it is passed to it.
    //we can do it by directly changing value inside setCount .
    // setCount(counter + 1);

    if(counter > 20){
      alert('Counter value cant exceed 20');
    }
    else{
      setCount(counter);
    }
  }

  //arrow function
  const removeValue = () => {
    if(counter <= 0)
    {
      alert('Counter value cant be negative');
    }
    else
    {
      setCount(counter - 1);
    }
  }

  return (
    <>
      <h1>Counter Button</h1>
      <h2>Count Value: {counter}</h2>
      <button onClick={addValue} id="addCount">Add Count</button>
      <br/>
      <button onClick={removeValue} id="removeCount">Remove Count</button>
    </>
  )
}

export default App
