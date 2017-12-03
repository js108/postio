import React from 'react'
import PropTypes from 'prop-types'

const AvatarImage = ({avatarName=''}) => {

    return (
            <img alt='avatar' src={require(`../../assets/${avatarName}`)} />
    )

}

AvatarImage.propTypes = {
    avatarName: PropTypes.string
}

export default AvatarImage