import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()
  function login() {
    // navigate('/login')
    window.location.href = '/login'
  }
  return (
    <div>Home
      <NavLink to='/signup'>
        go to signup page
      </NavLink>

      <button onClick={login}>go to login</button>

    </div>
  )
}

export default Home