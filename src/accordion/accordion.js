import { addClass } from '../utils/dom';
import Section from './section';
import './accordion.sass';

const Accordion = function(element, data) {
    this.element = element;
    this.sections = [];
    
    addClass(element, 'accordion');
    
    const createSection = (dt) => {
        const section = new Section(dt);
        section.getElement().addEventListener('expanded', this.toggle.bind(this));
        this.sections.push(section);

        return section;
    };
    
    const addDynamicSection = () => {
        const dt = document.createElement('dt');
        const dd = document.createElement('dd');
        this.element.appendChild(dt);
        this.element.appendChild(dd);

        dt.innerText = "Users";

        const section = createSection(dt);

        const content = section.getContent();

        JSON.parse(data).forEach((item) => {
            const p = document.createElement('p');
            p.innerHTML += item.name;
            content.appendChild(p);
        });
    };

    this.element.querySelectorAll('dt').forEach((dt) => {
        createSection(dt);
    });
    
    if (data) {
        addDynamicSection();
    }

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
