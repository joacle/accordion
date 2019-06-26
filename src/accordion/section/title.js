import { addClass, removeClass } from '../../utils/dom';
import Content from './content';
import './title.sass';

const Title = function(element) {
    this.element = element;
    addClass(this.element, 'section-title');

    this.content = new Content(this.element.nextElementSibling);

    this.element.addEventListener('click', () => this.element.dispatchEvent(new Event('expanded')));
};

Title.prototype.getElement = function() {
    return this.element;
};

Title.prototype.expand = function() {
    this.content.expand();
};

Title.prototype.collapse = function() {
    this.content.collapse();
};

Title.prototype.getContent = function() {
    return this.content.getElement();
};

export default Title;
