import { addClass, removeClass } from '../../utils/dom';
import { SECTION_CLASSNAMES } from '../../utils/constants';
import './section.sass';

const Section = function(element) {
    this.element = element;
    addClass(this.element, 'section');

    addClass(this.element, SECTION_CLASSNAMES.COLLAPSED);
    this.element.addEventListener('click', () => this.element.dispatchEvent(new Event('expanded')));
};

Section.prototype.getElement = function() {
    return this.element;
};

Section.prototype.expand = function() {
    removeClass(this.element, SECTION_CLASSNAMES.COLLAPSED);
    addClass(this.element, SECTION_CLASSNAMES.ACTIVE);
};

Section.prototype.collapse = function() {
    addClass(this.element, SECTION_CLASSNAMES.COLLAPSED);
    removeClass(this.element, SECTION_CLASSNAMES.ACTIVE);
};

export default Section;
