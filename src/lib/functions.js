import { compose } from 'redux'

export const getFirstArrayItem = array => array[0]

export const filterArrayById = (array, id) =>
    array.filter(item => item.id === id)

export const findById = compose(
    getFirstArrayItem,
    filterArrayById
)

export const submitFav = (rating, id, onNewRating, addFavStyles, removeFavStyles, removeNahStyles) => {
    switch (rating) {
        case 0:
            rating = 1,
            addFavStyles(),
            onNewRating(id, rating)
            break
        case 1:
            rating = 0,
            removeFavStyles(),
            onNewRating(id, rating)
            break
        case 2:
            rating = 1,
            addFavStyles(),
            removeNahStyles(),
            onNewRating(id, rating)
            break
        default:
            rating = 1,
            addFavStyles(),
            removeNahStyles(),
            onNewRating(id, rating)
    }
    //e.preventDefault()
}