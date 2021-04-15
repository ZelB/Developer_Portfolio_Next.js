import React from 'react'

//import the Header component containing navigation
import Header from './Header.js';

//Link bootstrap to use in Navigation and layouts


//import the <Head> via next.js API
import Head from 'next/head'

// Make custom CSS rules to style component
const layoutStyle = {
    margin: 30,
    padding: 20
}

const Layout = (props) => {
    return (
        <div>
            <Head>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossorigin="anonymous"
                />
            
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Train+One&display=swap" 
                    rel="stylesheet" />

            </Head>
            <Header />
            <div style={layoutStyle}>
                
                {props.children}
            </div>
            
            
        </div>
    )
}

export default Layout
