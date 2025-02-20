import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import './index.css'
import Header from './components/Header'
import Home from './pages/Home'
import Doctors from './pages/Doctors';


function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    // <Header/>
    // <Home/>
    // </>

    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          

        </Routes>
      </div>
    </Router>
  )
}

export default App
