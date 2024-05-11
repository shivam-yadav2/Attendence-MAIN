import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/authentication/login/Login'
import Home from './pages/home/Home'
import Signup from './pages/authentication/signup/Signup'
import Error from './pages/error/Error'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>  
          <Route path='/' element={ <Home/>} />
          <Route path='/signup' element={ <Signup/>} />
          <Route path='/login' element={ <Login/>} />
          <Route path='/*' element={ <Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
