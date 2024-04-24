import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Explore from './pages/explore'
import Reservation from './pages/reservation'
import Parametre from './pages/parametre'
import Profil from './pages/profil'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
        <Route path='/parametre' element={<Parametre/>}/>
        <Route path='/profil' element={<Profil/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
