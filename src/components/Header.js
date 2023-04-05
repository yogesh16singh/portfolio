import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='header_div'>
                    <h2 className='header_h'>Yogesh.dev</h2>
                </div>

                <div className='header_nav'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </header>
        </>
    )
}

export default Header