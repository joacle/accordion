import Accordion from '../accordion';
import { SECTION_CLASSNAMES } from '../../utils/constants';

describe('Accordion', () => {
    test('class is added', () => {
        const div = document.createElement('div');
        new Accordion(div);
        expect(div.classList.contains('accordion')).toBeTruthy();
    });


});
