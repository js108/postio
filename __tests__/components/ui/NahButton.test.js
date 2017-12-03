import { mount, shallow } from 'enzyme'
import NahButton from '../../../src/components/ui/NahButton'

describe('<Nahbutton /> component', () => {
    it('renders enclosing html tag', () => 
        expect(
            shallow(<NahButton />)
                .find('svg')
                .length
        ).toBe(1) 
    )
})