import { mount, shallow } from 'enzyme'
import AvatarImage from '../../../src/components/ui/AvatarImage'

describe('<AvatarImage /> component', () => {
    it('renders enclosing html tag', () => 
        expect(
            shallow(<AvatarImage />)
                .find('img')
                .length
        ).toBe(1) 
    )
})