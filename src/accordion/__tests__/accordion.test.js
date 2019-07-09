import Accordion from '../accordion';

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


});
