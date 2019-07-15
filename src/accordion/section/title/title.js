import { addClass, removeClass } from '../../../utils/dom';
import './title.sass';

const Title = function(element, title) {
    this.element = element;
    this.element.innerText = title;
    addClass(this.element, 'section-title');
    this.element.addEventListener('click', () => this.element.dispatchEvent(new Event('expanded')));
};

Title.prototype.getElement = function() {
    return this.element;
};

export default Title;
