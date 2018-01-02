/*

some helper functions abstracted out of components to make things nice and neat and modular

*/


import { compose } from 'redux'

export const getFirstArrayItem = array => array[0]

export const filterArrayById = (array, id) =>
    array.filter(item => item.id === id)

export const findById = compose(
    getFirstArrayItem,
    filterArrayById
)

export const log = (array, postId) => console.log(array, postId)

export const putArrayInObject = array => { { posts: array } }

export const filterArrayByPostId = (array, postId) => {
    array.filter(item => item.postId === postId)
}

export const findByPostId = compose(
    /*putArrayInObject,
    filterArrayByPostId*/
    log
)


export const addFavStyles = (id) => {
    const post = document.getElementById(id);
    post.classList.add('faved');
}

export const removeFavStyles = (id) => {
    const post = document.getElementById(id);
    post.classList.remove('faved');
    //console.log(post)
}

export const addNahStyles = (id) => {
    const post = document.getElementById(id);
    post.classList.add('nahed');
    //console.log(post)
}

export const removeNahStyles = (id) => {
    const post = document.getElementById(id);
    post.classList.remove('nahed');
    //console.log(post)
}

export const submitFav = (rating, id, onNewRating) => {
    console.log(rating)
    switch (rating) {
        case 0:
            rating = 1,
            addFavStyles(id),
            onNewRating(id, rating)
            break
        case 1:
            rating = 0,
            removeFavStyles(id),
            onNewRating(id, rating)
            break
        case 2:
            rating = 1,
            addFavStyles(id),
            removeNahStyles(id),
            onNewRating(id, rating)
            break
        default:
            rating = 1,
            addFavStyles(id),
            removeNahStyles(id),
            onNewRating(id, rating)
    }
    //e.preventDefault()
}

export const submitNah = (rating, id, onNewRating) => {
    switch (rating) {
        case 0:
            rating = 2,
            addNahStyles(id),
            onNewRating(id, rating)
            break
        case 1:
            rating = 2,
            addNahStyles(id),
            removeFavStyles(id),
            onNewRating(id, rating)
            break
        case 2:
            rating = 0,
            removeNahStyles(id),
            onNewRating(id, rating)
            break
        default:
            rating = 2,
            addNahStyles(id),
            removeFavStyles(id),
            onNewRating(id, rating)
    }
    //e.preventDefault()
}

export const setRating = (rating, id) => {
        if (rating === 1) {
            addFavStyles(id)
        }
        else if (rating === 2) {
            addNahStyles(id)
        }
        else {
        }
    }