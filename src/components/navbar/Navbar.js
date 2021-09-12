import React,{useState} from 'react'
import {Hamburger, Logo, Menu, MenuLink, Nav} from "./Navbarstyle"

const Navbar = () => {
    const[isOpen,setIsOpen] = useState(false)
    return (
        <Nav>
            <Logo>
            <MenuLink to="/">{"<HAKAN>"}</MenuLink>  <span>recipe</span>
            </Logo>
        
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
            {/* 3 span provide us three horizontal line inside Hamburger Menu */}
            {/* with onClick we change the height of menu from 0 to 300 by this way it become visible */}
           <span/>
           <span/>
           <span/>
        </Hamburger>
        <Menu isOpen = {isOpen}>
            {/* we send isOpen as props to Menu inside navbarstyle so we change height 
            according to value of isOpen  */}
            <MenuLink to="/about">About</MenuLink>
            <MenuLink to={{pathname:"https://github.com/hakankaraahmet"}} target="_blank">GitHub</MenuLink>
            <MenuLink to="/login">Logout</MenuLink>
        </Menu>
        </Nav>
    )
}

export default Navbar
