import Home from './components/home'
import Projects from './components/projects'
import Navbar from './components/navbar'
import Connect from './components/connect'
import './App.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'


function App() {

  const routes=createBrowserRouter([
    {path:'/', element:<Navbar/>, children:[
      {path:'/', element:<Home/>},
      {path:'projects', element:<Projects/>},
      {path:'connect', element:<Connect/>}
    ]}
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
