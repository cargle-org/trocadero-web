const fontSizes = {
  xs: "0.7rem",
  s: "0.75rem",
  m: "0.85rem",
  l: "1rem",
  xl: "1.25rem",
  xxl: "1.5rem",
  xxxl: "2rem",
};

export const convertPXToRem = (px: number) => {
  return `${px / 16}rem`;
};

export default fontSizes;
