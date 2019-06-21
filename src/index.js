import { addClass, removeClass } from './utils/dom';

const accordion = () => {
  const element = document.getElementById('accordion');
  
  const getSections = () => {
    return element.querySelectorAll('dt');
  };
  

  const showSection = (section) => {
    removeClass(section, 'collapsed');
    addClass(section, 'active');
  };

  const hideSection = (section) => {
    addClass(section, 'collapsed');
    removeClass(section, 'active');
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
    addClass(section, 'collapsed');

    section.addEventListener('click', toggle)
  });

  // Show first section by default
  showSection(sections[0]);

};

accordion();

export default accordion;
