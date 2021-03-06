/*

renders the users avatar image and name, 
via being wrapped in/reciving name and avatar props from the Profile container (src/components/containers.js),
which then lives on the home view (src/components/ui/Home.js)

*/

import React from 'react'
import PropTypes from 'prop-types'
import AvatarImage  from './AvatarImage'

const UserProfile = ({name='', avatar=''}) => {
    return (
        <section className='bg-bright padding-m height-full'>
            <AvatarImage avatarName={avatar} />
            {name}
        </section>
    )
}

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
}

export default UserProfile