
import './App.css'
import Card from './components/Card'
function App() {
  
  const username= "Jay"

  let userInfo = {
    'name': 'Jay',
    'description': 'I am software developer. I have 9 + years experience in software development'
  }

  let nilamInfo ={
    'name': 'Nilam',
    'description': 'She is Opertation Manage. She has 10+ years experince in operation head'
  }

  let btnText= "Read more about" 
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hi Tailwind</h1>
      <Card username={username} userInfo={userInfo} btnText={btnText}/>
      <Card username="Nilam" userInfo={nilamInfo}/>
    </>
  )
}

export default App
