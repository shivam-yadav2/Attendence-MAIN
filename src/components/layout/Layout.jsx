import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function Layout({ children }) {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout