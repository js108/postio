import { mount, shallow } from 'enzyme'
import Feed from '../../../src/components/ui/Feed'
jest.mock('../../../src/components/ui/FeedNode')


describe('<AvatarImage /> component', () => {
    it('renders enclosing html tag', () => 
        expect(
            shallow(<Feed />)
                .find('.feed')
                .length
        ).toBe(1) 
    )
})