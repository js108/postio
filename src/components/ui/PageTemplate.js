/*

The template which renders its beloved descendants via react-router's children function

*/

import React from 'react'
import Header from './Header'

const PageTemplate  = ({children}) => {
    return (
        <div className='app'>
        <Header />
            <main className='center max-width'>
                <div className='margin-m'>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default PageTemplate;