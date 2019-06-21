import removeClass from '../removeClass';

describe('removeClass', () => {
    test('class is added', () => {
        const div = document.createElement('div');
        div.classList = 'test';
        removeClass(div, 'test');
        expect(div.classList.contains('test')).toBeFalsy();
    });
});
