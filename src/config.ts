// The two sides of the site. Rename the labels here and they change everywhere.
export const SIDES = {
  tech: { label: 'Tech', path: 'tech/' },
  life: { label: 'Life', path: 'life/' },
} as const;
export type Side = keyof typeof SIDES;

// Contact links, used by the Contact menu and the footer.
export const CONTACT = [
  { label: 'Email', detail: 'evharboe@gmail.com', href: 'mailto:evharboe@gmail.com' },
  { label: 'LinkedIn', detail: 'in/evaharboe', href: 'https://www.linkedin.com/in/evaharboe' },
  { label: 'Instagram', detail: '@eva.harboe', href: 'https://www.instagram.com/eva.harboe' },
  { label: 'GitHub', detail: 'evaharboe', href: 'https://github.com/evaharboe' },
];
