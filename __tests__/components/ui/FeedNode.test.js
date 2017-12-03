import { shallow } from 'enzyme'
import FeedNode from '../../../src/components/ui/FeedNode'
const id = '1'
const user = 'hi'
const avatar = 'how.jpg'
const text = 'are'
const rating = 0
const link = 'http://twitter.com'
const onNewRating = f=>f

jest.mock('../../../src/components/ui/FavButton')
jest.mock('../../../src/components/ui/NahButton')
jest.mock('../../../src/components/ui/AvatarImage')

describe('<UserProfile /> component', () => {
    it('renders enclosing html tag', () => 
        expect(
            shallow(<FeedNode id={id} user={user} avatar={avatar} text={text} rating={rating} link={link} onNewRating={onNewRating} />)
                .find('section')
                .length
        ).toBe(1)
    )
})