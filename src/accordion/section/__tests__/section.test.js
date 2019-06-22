import Section from '../section';
import { SECTION_CLASSNAMES } from '../../../utils/constants';

describe('Section', () => {
    test('class is added', () => {
        const div = document.createElement('div');
        new Section(div);
        expect(div.classList.contains('section')).toBeTruthy();
    });

    test('is collapsed', () => {
        const div = document.createElement('div');
        new Section(div);
        expect(div.classList.contains(SECTION_CLASSNAMES.COLLAPSED)).toBeTruthy();
    });

    test('getElement returns html element', () => {
        const div = document.createElement('div');
        const section = new Section(div);
        expect(section.getElement()).toBe(div);
    });

    test('element collapses and expands', () => {
        const div = document.createElement('div');
        const section = new Section(div);
        expect(div.classList.contains(SECTION_CLASSNAMES.COLLAPSED)).toBeTruthy();
        section.expand();
        expect(div.classList.contains(SECTION_CLASSNAMES.ACTIVE)).toBeTruthy();
        section.collapse();
        expect(div.classList.contains(SECTION_CLASSNAMES.COLLAPSED)).toBeTruthy();
    });
});
