import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import './index.css'
import Header from './components/Header'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import PatientCare from './pages/PatientCare';


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


        </Routes>
      </div>
    </Router>
  )
}

export default App
