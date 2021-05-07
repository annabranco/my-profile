import { IExperiencesType, ICountry, ILanguageCode } from '../interfaces';

declare module 'experiences.json' {
  // interface IExperiences extends IExperiencesType {

  // }
  const experiences: IExperiencesType[];
  export default experiences;
}

declare module 'languages.json' {
  export const active: boolean;
  export const flagCode: ICountry;
  export const language: string;
  export const languageCode: ILanguageCode;
  export const languageEn: string;
  export const order: number;
}

// TOFIXME: DELETE
