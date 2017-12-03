import React from 'react'
import PropTypes from 'prop-types'

const AddPostForm = ({user='', avatar='', onNewPost=f=>f, onSubmit=f=>f}) => {

    let _text

    const submitValue = e => {
        e.preventDefault()
        onNewPost(user, avatar, _text.value)
        document.getElementById('post-form').value = ''
    }

    return (
        <section className='padding-m bg-bright border-b'>
            <form className='flex-container' onSubmit={submitValue}>
                <textarea id='post-form' maxLength='140' rows='3' 
                    className='padding-xs flex-right flex-grow font-lg margin-r-s border-bright corners' 
                    ref={input => _text = input}
                    type='text'
                    placeholder="write something in a maximum of 140 characters why don't you" required>
                </textarea>
                <button type='submit' className='flex-bottom padding-m bg-highlight color-bright border-0 cursor-pointer font-m font-bold'>POST</button>
            </form>
        </section>
    )

}

AddPostForm.propTypes = {
    onNewPost: PropTypes.func

}

export default AddPostForm
