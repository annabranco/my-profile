import {
  INFO_PAGE_SECTION,
  SKILLS_SECTION,
  PROJECTS_SECTION,
  EXPERIENCES_SECTION,
  FORMATION_SECTION,
  OTHER_INFO_SECTION
} from '../constants';
import { IPageSection } from '../types/interfaces';

const sections: IPageSection[] = [
  INFO_PAGE_SECTION,
  SKILLS_SECTION,
  PROJECTS_SECTION,
  EXPERIENCES_SECTION,
  FORMATION_SECTION,
  OTHER_INFO_SECTION
];

export const getNextSection = (current: IPageSection): IPageSection => {
  const currentId: number = sections.findIndex(section => section === current);

  if (currentId === 0 || currentId !== -1) {
    if (currentId === sections.length - 1) {
      return INFO_PAGE_SECTION;
    }
    return sections[currentId + 1] as IPageSection;
  }
  return current as IPageSection;
};

export const getPreviousSection = (current: IPageSection): IPageSection => {
  const currentId: number = sections.findIndex(section => section === current);

  if (currentId === 0 || currentId === -1) {
    return INFO_PAGE_SECTION;
  }
  return sections[currentId - 1] as IPageSection;
};
