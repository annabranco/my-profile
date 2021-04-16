import {
  INFO_PAGE_SECTION,
  SKILLS_SECTION,
  PROJECTS_SECTION,
  EXPERIENCES_SECTION,
  SEABED_SECTION
} from '../constants';

const sections = [
  INFO_PAGE_SECTION,
  SKILLS_SECTION,
  PROJECTS_SECTION,
  EXPERIENCES_SECTION,
  SEABED_SECTION
];

export const getNextSection = current => {
  const currentId = sections.findIndex(section => section === current);

  if (currentId) {
    if (currentId === sections.length - 1) {
      return INFO_PAGE_SECTION;
    }
    return sections[currentId + 1];
  }
  return current;
};
