export const getFlagURL = (country, style, size) => {
  const BASE_URL = 'https://www.countryflags.io';
  const SIZES = {
    small: '16',
    medium: '32',
    big: '64'
  };

  return `${BASE_URL}/${country}/${style}/${SIZES[size]}.png`;
};
