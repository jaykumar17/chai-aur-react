import { useState, useCallback, useMemo } from 'react'

import './App.css'
import TestHooks from './TestHooks'

function App() {
 
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState("Depdancy Check useCallback")
  const increment = ()=>{
    console.log('incremnt component')
    setCounter((prev)=>(prev + 1))

    //setCounter((prev)=>( prev+1))
  }

  // const callNewMethod = ()=>{
  //   console.log('this new method call from parent')
  //   return "test";
  // }

  const decrement = ()=>{
    console.log('decrement component')
    setCounter((prev)=>(prev - 1))

    //setCounter((prev)=>( prev+1))
  }

   const callNewMethod = useCallback(()=>{
    console.log('this new method call from parent')
    return "test";
  },[])

  const depedancyforCallback = ()=>{

    setName("Jay")
  }


  const expensiveCalculation = (num)=>{
     console.log('calculating.....');
     for(let i=1; i <= 100000000; i++){}

     return num * 2;
  }

// withiout useMemo
//const result = expensiveCalculation(counter);

// with useMemo
const result = useMemo(()=>{
  return expensiveCalculation(counter)
},[counter])

  return (
    <>
      <h1>React Hooks - UseCallBack()</h1>

      <h2>Hello {name}</h2>
      <h3>RESULT : {result}</h3>
      <TestHooks username="Jay" callNewMethod={callNewMethod}/>
      <button onClick={increment}>Increment {counter}</button>
      <button onClick={decrement}>decrement {counter}</button>
      <button onClick={depedancyforCallback}>Change Name</button>
    </>
  )
}

export default App
