import { createBoard } from '@wixc3/react-board';
import About from '../../../pages/About';

export default createBoard({
    name: 'About',
    Board: () => <About />,
    isSnippet: true,
    environmentProps: {
windowHeight: 699,
canvasWidth: 1032,
windowWidth: 1128
}
});