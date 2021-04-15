/* contain a header component that the user can use to navigate to the different pages in your app.*/
import React from 'react'

//Use Next.js Link API to add navigation 
import NextLink from 'next/link';

//import icons
import { GoHome } from "react-icons/go";
import { SiAboutDotMe } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { GrContact } from "react-icons/gr";


//create a custom style for the header and navigation bar styled using styled-jsx.
const layout = {
    margin: 20,
    padding: 20,
    width: '400px',
    color: 'black',
    fontWeight: 700,
    borderRadius: 20,
    borderLeft: '2px solid #DDD',
    borderBottom: '1px solid #DDD'
}


const Header = () => {
    return (
        <div>
            <div>
                <style jsx>
                    {`
                    div {
                        background: black;
                        text-align: center; 
                    }
                    img {
                        marginLeft: auto;
                        marginRight: auto;
                        
                    }
                    `}
                </style>
                <img src='../static/codingBack.jpg' alt='Header image' width='70%' height='110px' />
            </div>
            
            <br />
            
            <div>
            <style jsx>
                    {`
                    div {
                        text-align: right; 
                        margin-right: 30px;
                    }
                    
                    `}
                </style>

                    <div>
                            <NextLink href='/'>
                                <a style={layout}> <GoHome /> HOME</a>
                            </NextLink>
 
                            <NextLink href='/about'>
                                <a style={layout}> ABOUT  <SiAboutDotMe /> </a>
                            </NextLink>

                            <NextLink href='/projects'>
                                <a style={layout}> <GrProjects /> PROJECTS</a>
                            </NextLink>

                            <NextLink href='/contact'>
                                <a style={layout}><GrContact /> CONTACT </a>
                            </NextLink>

                    </div>
                           
  
            </div>
            
            
        </div>
    )
}

export default Header
