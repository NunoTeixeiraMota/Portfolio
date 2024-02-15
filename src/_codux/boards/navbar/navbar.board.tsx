import { createBoard } from '@wixc3/react-board';
import Navbar from '../../../navbar';

export default createBoard({
    name: 'Navbar',
    Board: () => <Navbar links={[]} />,
    isSnippet: true,
    environmentProps: {
windowWidth: 1024
}
});