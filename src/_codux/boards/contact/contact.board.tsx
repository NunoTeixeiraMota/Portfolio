import { createBoard } from '@wixc3/react-board';
import Contact from '../../../pages/Contact';

export default createBoard({
    name: 'Contact',
    Board: () => <Contact />,
    isSnippet: true,
});