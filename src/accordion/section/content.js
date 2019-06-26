import { addClass, removeClass } from '../../utils/dom';
import { SECTION_CLASSNAMES } from '../../utils/constants';
import './content.sass';

const Content = function(element) {
    this.element = element;
    addClass(this.element, 'section-content');
    addClass(this.element, SECTION_CLASSNAMES.COLLAPSED);
};

Content.prototype.getElement = function() {
    return this.element;
};

Content.prototype.expand = function() {
    removeClass(this.element, SECTION_CLASSNAMES.COLLAPSED);
    addClass(this.element, SECTION_CLASSNAMES.ACTIVE);
};

Content.prototype.collapse = function() {
    addClass(this.element, SECTION_CLASSNAMES.COLLAPSED);
    removeClass(this.element, SECTION_CLASSNAMES.ACTIVE);
};

export default Content;
