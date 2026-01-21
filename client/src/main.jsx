import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router'
import App from './App.jsx'
import './index.css'
import Home from "./Home/Home.jsx"
import Products from './Products.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {index:true,element:<Home/>},
      {path:"products/:NewReleases",element:<Products/>}
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
