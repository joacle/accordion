import Title from '../title';

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
});
