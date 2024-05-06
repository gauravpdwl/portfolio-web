import Home from './components/home'
import Projects from './components/projects'
import Navbar from './components/navbar'
import './App.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {

  const routes=createBrowserRouter([
    {path:'/', element:<Navbar/>, children:[
      {path:'/', element:<Home/>},
      {path:'projects', element:<Projects/>}
    ]}
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
