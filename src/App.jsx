import './global.css'
import Homepage from './pages/Homepage'
import Infopage from './pages/Infopage'
import Infopage2 from './pages/Infopage2'
import Infopage3 from './pages/Infopage3'
import Infopage4 from './pages/Infopage4'
import Navbar from './components/Navbar'
import AdditionalInfo from './pages/AdditionalInfo'
import GetInvolved from './pages/GetInvolved'

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {


  return (
    <>
 
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='info' element={<Infopage/>}/>
        <Route path='info2' element={<Infopage2/>}/>
        <Route path='info3' element={<Infopage3/>}/>
        <Route path='info4' element={<Infopage4/>}/>
        <Route path="/additionalInfo" element={<AdditionalInfo/>}/>
        <Route path='getInvolved' element={<GetInvolved/>}/>
        
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
