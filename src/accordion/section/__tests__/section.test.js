import Section from '../section';
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
    const data = {
            title: 'Section 1',
            data: [{ value: 'Section 1 content...' }]
        };

    test('classes are added', () => {
        const dd = getNewAccordionHtml();
        console.log(data);
        const section = new Section(dd, data);
        const element = section.getElement();
        const title = section.getTitle();
        const content = section.getContent();
        expect(element.classList.contains('section-title')).toBeTruthy();
        expect(title.classList.contains('section-title')).toBeTruthy();
        expect(content.classList.contains('section-content')).toBeTruthy();
    });

    test('collapse and expand', () => {
        const dd = getNewAccordionHtml();
        console.log(data);
        const section = new Section(dd, data);
        section.collapse();
        section.getContent().classList.contains(SECTION_CLASSNAMES.COLLAPSED);
        section.expand();
        section.getContent().classList.contains(SECTION_CLASSNAMES.ACTIVE);
    });
});
