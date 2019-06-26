import Title from '../title';
import { SECTION_CLASSNAMES } from '../../../utils/constants';

describe('Title', () => {
    test('class is added', () => {
        const div = document.createElement('div');
        new Title(div);
        expect(div.classList.contains('section-title')).toBeTruthy();
    });

    test('is collapsed', () => {
        const div = document.createElement('div');
        new Title(div);
        expect(div.classList.contains(SECTION_CLASSNAMES.COLLAPSED)).toBeTruthy();
    });

    test('getElement returns html element', () => {
        const div = document.createElement('div');
        const title = new Title(div);
        expect(title.getElement()).toBe(div);
    });

    test('element collapses and expands', () => {
        const div = document.createElement('div');
        const title = new Title(div);
        expect(div.classList.contains(SECTION_CLASSNAMES.COLLAPSED)).toBeTruthy();
        title.expand();
        expect(div.classList.contains(SECTION_CLASSNAMES.ACTIVE)).toBeTruthy();
        title.collapse();
        expect(div.classList.contains(SECTION_CLASSNAMES.COLLAPSED)).toBeTruthy();
    });
});
