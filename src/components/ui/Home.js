/*

The Profile, AddPost, and Posts containers (src/components/containers.js) are combined to create the home view

*/

import React from 'react'
import { Profile, AddPost, Posts } from '../containers'


const Home = () => {
    return (
        <div className='home grid'>
                <div className='grid--l grid--l__mobile-0 border-b'>
                    <Profile />
                </div>
                <div className='grid--r grid--r__mobile-75 bg-bright border-b'>
                    <AddPost />
                </div> 
                <div className='grid--r'>
                    <Posts />
                </div> 
        </div>    
    )
}

export default Home;