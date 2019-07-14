import Accordion from '../accordion';
import { SECTION_CLASSNAMES } from '../../utils/constants';

describe('Accordion', () => {
    const data = [
        {
            title: 'Section 1',
            data: [{ value: 'Section 1 content...' }]
        },
        {
            title: 'Section 2',
            data: [{ value: 'Section 2 content...' }]
        },
        {
            title: 'Section 3',
            data: [{ value: 'Section 3 content...' }]
        }
    ];

    test('class is added', () => {
        const div = document.createElement('div');
        new Accordion(div, data);
        expect(div.classList.contains('accordion')).toBeTruthy();
    });

    test('sections are created', () => {
        const div = document.createElement('div');
        const accordion = new Accordion(div, data);
        expect(accordion.sections.length).toBe(3);
    });

    test('first section is expanded', () => {
        const div = document.createElement('div');
        const accordion = new Accordion(div, data);
        expect(accordion.sections[0].content.getElement().classList.contains(SECTION_CLASSNAMES.ACTIVE)).toBeTruthy();
    });
});
