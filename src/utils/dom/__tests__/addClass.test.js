import addClass from '../addClass';

describe('addClass', () => {
    test('class is added', () => {
        const div = document.createElement('div');
        addClass(div, 'test');
        expect(div.classList.contains('test')).toBeTruthy();
    });
});
