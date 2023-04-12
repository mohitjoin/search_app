import React from 'react'
import './navbar.scss'
import Logo from '../assets/zevilogo.png'

const Navbar=()=>{
    return (
        <div className='navbar_container' >
            <div className='logo_container'>
                <img src={Logo} alt='Zevi Logo' />
            </div>

        </div>
    )
}
export default Navbar;