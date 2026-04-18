import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  
  const addCount = ()=>{

    // if(counter >= 20){
    //   setCounter(0)
    // }else{
    //   setCounter(counter +1)
    // }

    setCounter((prev)=>(prev >=20 ? 0 : prev+1))

  }

  const removeCount =()=>{
    //  if(counter <= 0){
    //   setCounter(0)
    // }else{
    //   setCounter(counter - 1)
    // }

     setCounter((prev) => (prev <= 0 ? 0 : prev - 1));

  }

  return (
    <>
      <div>
        <br/>
        <br/><br/>
        <button onClick={addCount}>Add Count {counter}</button>
        <br/>
        <button onClick={removeCount}>Remove Count {counter}</button>
      </div>
    </>
  )
}

export default App
