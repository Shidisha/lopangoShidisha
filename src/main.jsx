import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/public/home.jsx'
import Explore from './pages/public/explore.jsx'
import Reservation from './pages/public/reservation.jsx'
import Parametre from './pages/public/parametre.jsx'
import Profil from './pages/public/profil.jsx'
import NotFound from './utils/not_Found.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/home',
        element: <Home/>
      },  
      {
        path:'/explore',
        element: <Explore/>
      },
      {
        path: '/reservation',
        element: <Reservation/>
      },
      {
        path: '/Parametre',
        element: <Parametre/>
      },
      {
        path: '/profil',
        element: <Profil/>
      },
      {
        path: '*',
        element: <NotFound/>
      }
      
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
