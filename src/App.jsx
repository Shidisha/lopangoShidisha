import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Explore from './pages/explore'
import Reservation from './pages/reservation'
import Parametre from './pages/parameter'
import Profil from './pages/profil'
import NotFound from './utils/not_Found'
import Layout from './pages/layout'


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
              <Route element = {<Layout/>}>
                  <Route index element ={<Home/>}/>
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/explore' element={<Explore/>}/>
                  <Route path='/reservation' element={<Reservation/>}/>
                  <Route path='/parametre' element={<Parametre/>}/>
                  <Route path='/profil' element={<Profil/>}/>

                  <Route path ='*' element ={<NotFound/>}/>
              </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
