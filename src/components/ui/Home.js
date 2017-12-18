/*

The Profile, AddPost, and Posts containers (src/components/containers.js) are combined to create the home view

*/

import React from 'react'
import { Profile, AddPost, Posts } from '../containers'


const Home = () => {
    return (
        <div className='grid-1'>
            <div className=''>
                <Profile />
            </div>
            <div className=''>
                <AddPost />
                <Posts />
            </div> 
        </div>
    )
}

export default Home;