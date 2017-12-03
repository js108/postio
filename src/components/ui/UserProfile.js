import React from 'react'
import PropTypes from 'prop-types'
import AvatarImage  from './AvatarImage'

const UserProfile = ({name='', avatar=''}) => {

    return (
        <section className='bg-bright padding-m'>
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