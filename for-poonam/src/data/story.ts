import { Chapter, DisclaimerCard, LittleThingCard, QuestionBranch } from '../types';

export const CHAPTERS: Chapter[] = [
  { id: 1, path: '/', number: '01', title: 'The Unexpected Message', shortLabel: 'Hello' },
  { id: 2, path: '/disclaimer', number: '02', title: 'Terms & Conditions', shortLabel: 'Disclaimer' },
  { id: 3, path: '/the-real-talk', number: '03', title: 'No Excuses This Time', shortLabel: 'The Apology' },
  { id: 4, path: '/the-question', number: '04', title: 'A Very Serious Investigation', shortLabel: 'The Question' },
  { id: 5, path: '/little-things', number: '05', title: 'The Little Things', shortLabel: 'Little Things' },
  { id: 6, path: '/unsaid-things', number: '06', title: "Things I Don't Always Say", shortLabel: 'Unsaid Things' },
  { id: 7, path: '/unsaid', number: '07', title: 'A Quiet Thought', shortLabel: 'A Thought' },
  { id: 8, path: '/final-letter', number: '08', title: 'The Final Letter', shortLabel: 'The Letter' },
];

export const DISCLAIMER_CARDS: DisclaimerCard[] = [
  {
    id: 'card-1',
    number: '01',
    title: 'Zero arguments.',
    description: 'No defending myself, no unnecessary explanations, and no trying to spin things in my favour.',
    annotation: 'Strictly forbidden. I signed a mental contract.',
  },
  {
    id: 'card-2',
    number: '02',
    title: 'Zero emotional blackmail.',
    description: 'You are not legally, morally, or emotionally obligated to forgive me just because I spent hours coding a website.',
    annotation: 'Terms are non-negotiable. Free will preserved.',
  },
  {
    id: 'card-3',
    number: '03',
    title: 'One slightly dramatic person.',
    description: 'Unfortunately, that part is hardcoded and cannot be changed through settings or regular software updates.',
    annotation: 'Bug or feature? Still up for debate.',
  },
];

export const QUESTION_BRANCHES: Record<'A' | 'B' | 'C', QuestionBranch> = {
  A: {
    id: 'A',
    label: 'Thodi si kam.',
    sublabel: 'A tiny millimeter of mercy.',
    reactionLines: [
      'Look at that. A little progress.',
      'Not celebrating yet. I know better.',
      'One step at a time.',
    ],
    note: "I'll take whatever 2% reduction I can get.",
    canProceed: true,
  },
  B: {
    id: 'B',
    label: 'Still angry. Obviously.',
    sublabel: 'The default setting currently.',
    reactionLines: [
      'Okay, noted.',
      "I'll resist my natural instinct to overexplain everything.",
      'I genuinely understand that you might need time.',
    ],
    note: 'Valid. Entirely fair.',
    canProceed: true,
  },
  C: {
    id: 'C',
    label: 'I need some time.',
    sublabel: 'No pressure, just space.',
    reactionLines: [
      'Take your time, Poonam.',
      "Some things don't need an immediate answer, and rushing never helped anyone.",
    ],
    note: 'Zero rush. Seriously.',
    canProceed: true,
  },
};

/**
 * Little Things Configuration
 * Yash can easily edit or add real shared memories here!
 */
export const LITTLE_THINGS_CONFIG: LittleThingCard[] = [
  {
    id: 1,
    number: '01',
    text: 'Some conversations become a routine without either person planning it.',
    annotation: 'Like clockwork, even on hectic days.',
  },
  {
    id: 2,
    number: '02',
    text: 'Some random conversations stay in your head longer than they probably should.',
    annotation: 'Replaying dumb jokes at odd hours.',
  },
  {
    id: 3,
    number: '03',
    text: 'Sometimes, even the smallest interaction can change the mood of an otherwise ordinary day.',
    annotation: 'An unannounced ping that just shifts the day.',
  },
  {
    id: 4,
    number: '04',
    text: 'And then there are people who can annoy you, make you laugh, and leave you wondering what just happened — all in the same conversation.',
    annotation: 'A very rare, highly specialized talent.',
  },
];
