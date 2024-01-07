import type { ItemInfo } from './components/ListItem';

export const PADDING = 6;
export const HEIGHT = 80;
export const ITEM_HEIGHT = HEIGHT + PADDING * 2;
export const MAX_BORDER_RADIUS = 10;

export const LINEAR_GRADIENT_COLORS = [
  'rgba(255,255,255,1)',
  'rgba(255,255,255,0.05)',
  'rgba(255,255,255,0.025)',
];

export const ITEMS: ItemInfo[] = [
  {
    title: 'Meditation',
    subtitle: 'Every day',
    activeValues: [true, false, false, true, false],
    color: 'rgba(238, 130, 238, 0.2)',
    squareColor: 'rgba(238, 130, 238, 0.5)',
    textIcon: '🧘',
  },
  {
    title: 'Coding',
    subtitle: 'Every day',
    activeValues: [true, false, true, true, false],
    color: 'rgba(0, 0, 255, 0.2)',
    squareColor: 'rgba(0, 0, 255, 0.3)',
    textIcon: '💻',
  },
  {
    title: 'Workout',
    subtitle: 'Every day',
    activeValues: [true, true, true, true, false],
    color: 'rgba(0, 105, 0, 0.2)',
    squareColor: 'rgba(0, 105, 0, 0.3)',
    textIcon: '🏋️‍♀️',
  },
  {
    title: 'Reading',
    subtitle: 'Every day',
    activeValues: [true, true, false, true, true],
    color: 'rgba(255, 0, 0, 0.2)',
    squareColor: 'rgba(255, 0, 0, 0.2)',
    textIcon: '📖',
  },
  {
    title: 'Sleep',
    subtitle: 'Every day',
    activeValues: [true, true, true, true, true],
    color: 'rgba(0, 200, 210, 0.2)',
    squareColor: 'rgba(0, 200, 210, 0.4)',
    textIcon: '😴',
  },
  {
    title: 'Eat healthy',
    subtitle: 'Every day',
    activeValues: [true, true, true, true, true],
    color: 'rgba(255, 150, 0, 0.2)',
    squareColor: 'rgba(255, 150, 0, 0.5)',
    textIcon: '🥗',
  },
  {
    title: 'Drink water',
    subtitle: 'Every day',
    activeValues: [true, true, true, true, true],
    color: 'rgba(0, 100, 0, 0.2)',
    squareColor: 'rgba(0, 100, 0, 0.4)',
    textIcon: '🚰',
  },
  {
    title: 'Walk',
    subtitle: 'Every day',
    activeValues: [true, false, true, false, true],
    color: 'rgba(0, 0, 100, 0.2)',
    squareColor: 'rgba(0, 0, 100, 0.4)',
    textIcon: '🚶',
  },
  {
    title: 'Playing Piano',
    subtitle: 'Every day',
    activeValues: [true, false, true, true, true],
    color: 'rgba(0, 0, 200, 0.2)',
    squareColor: 'rgba(0, 0, 200, 0.4)',
    textIcon: '🎹',
  },
];
