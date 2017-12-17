/*

The humble header which is part of the PageTemplate (src/components/ui/PageTemplate.js)

*/


import React from 'react'
import { Link } from 'react-router-dom'


const Header  = () => {
    return (
        <div className='app'>
            <header className='app-header'>
                <div className='center max-width'>
                    <div className='margin-sides-m'>
                        <Link to='/'><h1>Postio</h1></Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;