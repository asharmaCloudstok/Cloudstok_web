import React from 'react'
import Footer from './Footer'
import Header from './header/Header'

const Layout = ({children}) => {
    return (
        <div>
        <Header className="w-full"/>      
        {children}
        <Footer/>      
        </div>
    )
}

export default Layout
