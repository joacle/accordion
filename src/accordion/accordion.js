import { addClass } from '../utils/dom';
import Section from './section';
import './accordion.sass';

const Accordion = function(element, data) {
    this.element = element;
    this.sections = [];
    
    addClass(element, 'accordion');
    
    const createSection = (data) => {
        const section = new Section(this.element, data);
        section.getElement().addEventListener('expanded', this.toggle.bind(this));
        this.sections.push(section);

        return section;
    };
    
    data.forEach((item) => {
        createSection(item);
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
