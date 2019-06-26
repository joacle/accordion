import Title from '../title';
import { SECTION_CLASSNAMES } from '../../../utils/constants';

const getNewAccordionHtml = () => {
    const div = document.createElement('div');
    const dd = document.createElement('dd');
    const dt = document.createElement('dt');
    div.appendChild(dd);
    div.appendChild(dt);

    return dd;
};

describe('Title', () => {
    test('class is added', () => {
        const dd = getNewAccordionHtml();
        const title = new Title(dd);
        const element = title.getElement();
        expect(element.classList.contains('section-title')).toBeTruthy();
    });

    test('is collapsed', () => {
        const dd = getNewAccordionHtml();
        const title = new Title(dd);
        const element = title.getContent();
        expect(element.classList.contains(SECTION_CLASSNAMES.COLLAPSED)).toBeTruthy();
    });

    test('getElement returns html element', () => {
        const dd = getNewAccordionHtml();
        const title = new Title(dd);
        expect(title.getElement()).toBe(dd);
    });

    test('element collapses and expands', () => {
        const dd = getNewAccordionHtml();
        const title = new Title(dd);
        const element = title.getContent();
        expect(element.classList.contains(SECTION_CLASSNAMES.COLLAPSED)).toBeTruthy();
        title.expand();
        expect(element.classList.contains(SECTION_CLASSNAMES.ACTIVE)).toBeTruthy();
        title.collapse();
        expect(element.classList.contains(SECTION_CLASSNAMES.COLLAPSED)).toBeTruthy();
    });
});
