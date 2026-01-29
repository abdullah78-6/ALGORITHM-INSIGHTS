import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Search from './components/searching.jsx'
import Sort from './components/sorting.jsx'
import Compare from './components/compare.jsx'
import Head from './components/header.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        index:true,
        element:(
          <>
          <Head/>
          </>
        )

      },
    {
      path:"/search",
      element:<Search/>
      },
      {
        path:"/sort",
        element:<Sort/>
      },
      {
        path:"/comp",
        element:<Compare/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
