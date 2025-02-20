import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { HashRouter as Router} from "react-router-dom";
import './App.css'
import './index.css'
import Header from './components/Header'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import PatientCare from './pages/PatientCare'
import Gallery from './pages/Gallery'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/pateint' element={<PatientCare/>}/>
          <Route path='/gallery' element={<Gallery/>}/>

        </Routes>
      </div>
    </Router>
  )
}

export default App
