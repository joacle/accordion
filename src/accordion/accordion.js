import { addClass, removeClass } from '../utils/dom';
import Section from './section';
import './accordion.sass';

const Accordion = function(element) {
    this.element = element;
    this.sections = [];

    addClass(element, 'accordion');

    this.element.querySelectorAll('dt').forEach((s) => {
        const section = new Section(s);
        section.getElement().addEventListener('expanded', this.toggle.bind(this));
        this.sections.push(section);
    });

    this.sections.length && this.sections[0].expand();
};

Accordion.prototype.toggle = function(e) {
    this.sections.forEach((section) => {
        if (e.target === section.getElement()) {
            section.expand();
        } else {
            section.collapse();
        }
    });
};
        

export default Accordion;
