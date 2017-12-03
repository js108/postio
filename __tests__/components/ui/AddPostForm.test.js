import { mount, shallow } from 'enzyme'
import AddPostForm from '../../../src/components/ui/AddPostForm'
const user = 'hi'
const avatar = 'how.jpg'
const onNewPost = f=>f

describe('<AddPostForm /> component', () => {
    it('renders enclosing html tag', () => 
        expect(
            shallow(<AddPostForm user={user} avatar={avatar} onNewPost={onNewPost} />)
                .find('section')
                .length
        ).toBe(1) 
    )
})