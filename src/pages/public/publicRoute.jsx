import {Routes, Route} from 'react-router-dom'
import Layout from '../public/layout'
import Home from '../public/home'
import Explore from '../public/explore'
import Reservation from '../public/reservation'
import Parametre from '../public/parameter'
import Profil from '../public/profil'
import NotFound from '../../utils/not_Found'

const PublicRoute = () =>{
    return(
        <>
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
        </>
    )
}

export default PublicRoute