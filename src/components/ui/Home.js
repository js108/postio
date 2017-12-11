import React from 'react'
import { Profile, AddPost, Posts } from '../containers'


const Home = () => {
    return (
        <div className='jsx-needs-a-wrapper-dude'>
            <div className='sidebar float-l'>
                <Profile />
            </div>
            <div className='mainbar float-l'>
                <AddPost />
                <Posts />
            </div>
            <div className='clearfix'></div> 
        </div>
    )
}

export default Home;