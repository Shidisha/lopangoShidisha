import './App.css'
import { BrowserRouter } from 'react-router-dom'
import PublicRoute from './pages/public/publicRoute'



function App() {
  return (
    <>
    <BrowserRouter>
        <PublicRoute/>
    </BrowserRouter>
    </>
  )
}

export default App
