import { ICountry, IStyle } from '../types/interfaces';

export interface Props {
  country: ICountry;
  style: IStyle;
  size?: string;
}

export const getFlagURL = ({
  country,
  style = 'flat'
}: // size
Props): string => {
  const BASE_URL = 'https://cdn.countryflags.com/thumbs';
  const ALTERNATIVE_URL =
    'https://www.countryflags.com/wp-content/uploads/flags';
  const COUNTRIES = {
    br: 'brazil',
    es: 'spain',
    fr: 'france',
    gr: 'greece',
    ie: 'ireland',
    ru: 'russia',
    us: 'united-states-of-america'
  };
  const STYLES = {
    flat: 'flag-400',
    flat3d: 'flag-3d-250',
    round: 'flag-button-round-250',
    round3d: 'flag-3d-round-250',
    heart: 'flag-heart-3d-250',
    square: 'flag-button-square-250',
    wave: 'flag-wave-250'
  };

  if (style === 'flat') {
    return `${ALTERNATIVE_URL}/${country}.png`;
  }
  return `${BASE_URL}/${COUNTRIES[country]}/${STYLES[style]}.png`;
};

// export const getFlagURL = (country, style, size) => {
//   const BASE_URL = 'https://www.countryflags.io';
//   const SIZES = {
//     small: '16',
//     medium: '32',
//     big: '64'
//   };

//   return `${BASE_URL}/${country}/${style}/${SIZES[size]}.png`;
// };
