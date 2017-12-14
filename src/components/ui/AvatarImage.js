/*

the avatar image file name is stored in state then the path to the file is added here

i don't like this set up with the require in markup,
and neither do the tests,
gotta refactor this

*/


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