import { useState } from 'react'
import './App.css'

function App() {

  
const [color, setColor] = useState("olive");

//with parameter function call
const colorChange =(color)=>{
  setColor(color);
}

//with parameter function but alternative way
const colorChangeAlternativeway = (color) => () => {
  setColor(color);
};

//without parameter function call
const colorsetYellow = ()=>{
  setColor("yellow");
}
  return (
    <>
     <div style={{ backgroundColor: color }} className="min-h-screen w-full">
         <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 bg-white p-3 rounded-4xl shadow-lg">
           {/* with parameter function call */}
           <button
              onClick={() => colorChange("red")}
              className="px-4 py-2 bg-red-500 text-white rounded-4xl shadow-lg"
            >Red</button>
             {/* with parameter function call alternative way*/}
            <button
              onClick={colorChangeAlternativeway("green")}
              className="px-4 py-2 bg-green-500 text-white rounded-4xl shadow-lg"
            >Green</button>
             {/* withiout parameter function call */}
            <button
              onClick={colorsetYellow}
              className="px-4 py-2 bg-yellow-500 text-white rounded-4xl shadow-lg"
            >yellow</button>
             {/* No need to fucntion call direct variable set */}
            <button
              onClick={() => setColor("blue")}
              className="px-4 py-2 bg-blue-500 text-white rounded-4xl shadow-lg"
            >blue</button>
            <button
              onClick={() => setColor("gray")}
              className="px-4 py-2 bg-gray-500 text-white rounded-4xl shadow-lg"
            >gray</button>
            <button
              onClick={() => setColor("olive")}
              className="px-4 py-2 bg-olive-500 text-white rounded-4xl shadow-lg"
            >olive</button>
         </div>
     </div>
    </>
  )
}

export default App
