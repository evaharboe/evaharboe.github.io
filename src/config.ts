// The two sides of the site. Rename the labels here and they change everywhere.
export const SIDES = {
  tech: { label: 'Tech', path: 'tech/' },
  life: { label: 'Life', path: 'life/' },
} as const;
export type Side = keyof typeof SIDES;
