import { mount, shallow } from 'enzyme'
import FavButton from '../../../src/components/ui/FavButton'

describe('<Favbutton /> component', () => {
    it('renders enclosing html tag', () => 
        expect(
            shallow(<FavButton />)
                .find('svg')
                .length
        ).toBe(1) 
    )
})