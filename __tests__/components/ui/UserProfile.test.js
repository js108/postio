import { shallow } from 'enzyme'
import UserProfile from '../../../src/components/ui/UserProfile'
const name = 'hi'
const avatar = 'there.jpg'

jest.mock('../../../src/components/ui/AvatarImage')

describe('<UserProfile /> component', () => {
    it('renders enclosing html tag', () => 
        expect(
            shallow(<UserProfile name={name} avatar={avatar} />)
                .find('section')
                .length
        ).toBe(1)
    )
})