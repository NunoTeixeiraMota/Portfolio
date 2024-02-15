import { createBoard } from '@wixc3/react-board';
import Projects from '../../../pages/Projects';

export default createBoard({
    name: 'Projects',
    Board: () => <Projects />,
    isSnippet: true,
});