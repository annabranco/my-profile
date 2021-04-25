import {
  INFO_PAGE_SECTION,
  SKILLS_SECTION,
  PROJECTS_SECTION,
  EXPERIENCES_SECTION,
  FORMATION_SECTION,
  OTHER_INFO_SECTION
} from '../constants';

const sections: string[] = [
  INFO_PAGE_SECTION,
  SKILLS_SECTION,
  PROJECTS_SECTION,
  EXPERIENCES_SECTION,
  FORMATION_SECTION,
  OTHER_INFO_SECTION
];

export const getNextSection = (current: string): string => {
  const currentId: number = sections.findIndex(section => section === current);

  if (currentId === 0 || currentId !== -1) {
    if (currentId === sections.length - 1) {
      return INFO_PAGE_SECTION;
    }
    return sections[currentId + 1];
  }
  return current;
};

export const getPreviousSection = (current: string): string => {
  const currentId: number = sections.findIndex(section => section === current);

  if (currentId === 0 || currentId === -1) {
    return INFO_PAGE_SECTION;
  }
  return sections[currentId - 1];
};
