import Accordion from '../accordion';

describe('Accordion', () => {
    test('class is added', () => {
        const div = document.createElement('div');
        new Accordion(div);
        expect(div.classList.contains('accordion')).toBeTruthy();
    });


});
