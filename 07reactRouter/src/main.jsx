import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
 import Github, { GithubInfoLoader } from './components/Github/Github.jsx'
//import Github from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Layout/>,
    children:[
      {
        path : "",
        element : <Home />
      },
      {
        path : "About",
        element : <About/>
      },
      {
        path : "Contact",
        element : <Contact/>
      },
      {
        path : "User/:userId",
        element : <User/>
      },
      {
        loader:GithubInfoLoader,
        path : "Github",
        element : <Github/>
      },
    
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>} >
//       <Route path='' element={<Home/>} />
//       <Route path='about' element={<About/>} />
//       <Route path='contact' element={<Contact/>} />
//       <Route path='user/:userId' element={<User/>} />
//       {/* <Route path='github' element={<Github/>} />\ */}
//       <Route
//         loader={GithubInfoLoader}
//         path='github'
//         element={<Github/>}
//        />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </StrictMode>,
)
