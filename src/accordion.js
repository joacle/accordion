import { addClass, removeClass } from './utils/dom';
import { SECTION_CLASSNAMES } from './utils/constants';
import './accordion.sass';

const accordion = () => {
  const element = document.getElementById('accordion');
  
  const getSections = () => {
    return element.querySelectorAll('dt');
  };
  

  const showSection = (section) => {
    removeClass(section, SECTION_CLASSNAMES.COLLAPSED);
    addClass(section, SECTION_CLASSNAMES.ACTIVE);
  };

  const hideSection = (section) => {
    addClass(section, SECTION_CLASSNAMES.COLLAPSED);
    removeClass(section, SECTION_CLASSNAMES.ACTIVE);
  }

  const toggle = (e) => {
    sections.forEach((section) => {
      if (e.target === section) {
        showSection(section);
      } else {
        hideSection(section);
      }
    });
  };

  const sections = getSections();
  
  sections.forEach((section) => {
    addClass(section, SECTION_CLASSNAMES.COLLAPSED);

    section.addEventListener('click', toggle)
  });

  // Show first section by default
  showSection(sections[0]);

};

export default accordion;
