/*

The humble header which is part of the PageTemplate (src/components/ui/PageTemplate)

I need to react-routerize that link

*/


import React from 'react'

const Header  = () => {
    return (
        <div className='app'>
            <header className='app-header'>
                <div className='center max-width'>
                    <div className='margin-sides-m'>
                        <a href='/'><h1>Postio</h1></a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;