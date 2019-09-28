import React from 'react';
import Navbar from './frontPage/navbar'
// import Footer from './frontPage/footer'

export default function Layout({children}) {
    return(
        <div>
            <Navbar/>
            {children}
            
        </div>
    )
}