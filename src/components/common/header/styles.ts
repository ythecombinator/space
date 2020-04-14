export const header = { mb: [5, 6] };

export const flex = { alignItems: `center`, justifyContent: `space-between` };

export const navigationContainer = {
  boxSizing: `border-box`,
  display: `flex`,
  variant: `dividers.bottom`,
  alignItems: `center`,
  justifyContent: `space-between`,
  mt: 3,
  color: `secondary`,
  a: { color: `secondary`, ":hover": { color: `heading` } },
  flexFlow: `wrap`,
};

export const linkContainer = {
  "a:not(:first-of-type)": { ml: 3 },
  fontSize: [1, `18px`],
};

export const link = { color: `heading`, textDecoration: `none` };
