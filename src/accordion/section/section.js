import { addClass } from '../../utils/dom';
import Content from './content';
import Title from './title';

const Section = function(accordionElement, sectionData) {
    this.accordionElement = accordionElement;

    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    this.accordionElement.appendChild(dt);
    this.accordionElement.appendChild(dd);

    this.title = new Title(dt, sectionData.title);
    this.content = new Content(dd, sectionData.data);
};

Section.prototype.getElement = function() {
    return this.title.getElement();
};

Section.prototype.getTitle = function() {
    return this.title.getElement();
};

Section.prototype.expand = function() {
    this.content.expand();
};

Section.prototype.collapse = function() {
    this.content.collapse();
};

Section.prototype.getContent = function() {
    return this.content.getElement();
};

export default Section;
