// Life-side content. IMPORTANT (visa): until the Graduate visa, keep the Life side about practice and community.
// No prices, booking links or "hire me". An "Offerings" / "For workplaces" page can go in from July 2027.

export type Photo = { src: string; alt: string };
export type Retreat = { place: string; when: string; kind: string; text: string; upcoming?: boolean; featured?: boolean; photos?: Photo[] };

export const img = (f: string) => `${import.meta.env.BASE_URL}images/retreats/${f}`;

// Retreats Eva has planned for the Surrey Yoga Society, newest first.
export const pastRetreats: Retreat[] = [
  { place: 'Mountains, somewhere snow-free', when: 'April 2027', kind: 'Hiking & yoga', upcoming: true,
    text: 'In planning. Probably the Alps, with long days on the trails and yoga either side of them.' },
  { place: 'West Lexham, Norfolk', when: 'October 2026', kind: 'Yoga retreat', featured: true,
    photos: [
      { src: 'west-lexham-meditation.webp', alt: 'Morning meditation in the sunlit yoga room at West Lexham' },
      { src: 'west-lexham-garden.webp', alt: 'Walking through the gardens at West Lexham at sunset' },
      { src: 'west-lexham-breakfast.webp', alt: 'Breakfast spread at West Lexham' },
      { src: 'west-lexham-pond.webp', alt: 'The pond at West Lexham in autumn' },
      { src: 'west-lexham-smores.webp', alt: "Toasting s'mores by the fire" },
    ],
    text: "The one I'm proudest of, and where I worked out what I want a retreat to be. Fully catered with family-style meals, wild swimming, a little library, film nights and s'mores, so people could properly switch off. I taught all the yoga." },
  { place: 'Cyprus', when: 'April 2026', kind: 'Yoga & island',
    photos: [
      { src: 'cyprus-yoga.webp', alt: 'Beach yoga among the palms in Cyprus' },
      { src: 'cyprus-swim.webp', alt: 'Wading into the sea at sunset' },
      { src: 'cyprus-caves.webp', alt: 'Sea caves and turquoise water on the boat trip' },
      { src: 'cyprus-boat-2.webp', alt: 'On the boat tour, looking out over turquoise water' },
      { src: 'cyprus-dinner.webp', alt: 'Dinner out: chicken, potatoes and salad' },
    ],
    text: 'A younger, more social one that I oversaw: boat tours, yoga on the beach and a karaoke night. We hired local teachers for the yoga, to try something different.' },
  { place: 'South Downs', when: 'November 2025', kind: 'Hiking & yoga',
    text: 'Our own space for the weekend, with hikes, yoga and bracelet making. I taught the yoga and cooked every meal myself. Next time, someone else can do the catering.',
    photos: [
      { src: 'south-downs-stretch-crop.webp', alt: 'Side stretches under the fairy lights' },
      { src: 'south-downs-woods.webp', alt: 'Walking through autumn beech woods' },
      { src: 'south-downs-cooking.webp', alt: 'Cooking dinner for everyone' },
      { src: 'south-downs-horses.webp', alt: 'Horses grazing next to the house' },
      { src: 'south-downs-village.webp', alt: 'Walking through a village on the downs' },
    ] },
  { place: 'Newquay, Cornwall', when: 'May 2025', kind: 'Surf & yoga',
    text: 'The first one I planned, together with Blue Surf School, who ran the beach yoga and the surf lessons. A test run that taught me how much the venue matters.',
    photos: [
      { src: 'newquay-tree-pose-2.webp', alt: 'Tree pose together on the beach in Cornwall' },
      { src: 'newquay-ice-cream.webp', alt: 'Ice cream above the beach' },
      { src: 'newquay-coast-2.webp', alt: 'Turquoise water and rocks along the Cornish coast' },
      { src: 'newquay-sunset-3.webp', alt: 'Sunset over the Atlantic' },
      { src: 'newquay-surf.webp', alt: 'Heading out for the surf lesson with Blue Surf School' },
    ] },
];

// Retreat styles Eva wants to build towards. Edit freely.
export const retreatIdeas = [
  { title: 'Run & yoga', text: 'Morning flow, a run in the middle of the day, and a slow stretch in the evening. One workshop on mobility for runners.' },
  { title: 'Hike & yoga', text: 'Morning flow, a long day in the mountains, and an evening session to recover.' },
  { title: 'Ski & yoga', text: 'Morning flow, a day on the mountain, and a long evening stretch for tired legs.' },
  { title: 'Golf & yoga', text: "Morning mobility, a round in the afternoon, and an evening stretch. For people who'd rather not wait until retirement to take up golf." },
  { title: 'Pure yoga', text: 'Three sessions a day, with workshops like handstands and inversions, and plenty of time to rest in between.' },
];


export const upcomingRetreat = pastRetreats.find((r) => r.upcoming);
export const pastWithPhotos = pastRetreats.filter((r) => !r.upcoming && r.photos);
export const pastNoPhotos = pastRetreats.filter((r) => !r.upcoming && !r.photos);
