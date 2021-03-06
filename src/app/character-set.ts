import { Character } from './character';

export const CHARACTERS: Character[] = [
  {id: 1, name: 'Fox', image: 'assets/images/icons/fox.png',
  matchups: [null, 0, 0, 1, 1, 1, 1, 2, 2, 0, 1, 3, 2, 2, 1, 2, 2, 3, 3, 2, 3, 3, 3, 3, 3, 3]},
  {id: 2, name: 'Falco', image: 'assets/images/icons/falco.png',
  matchups: [0, null, 0, 0, 0, 0, 0, 2, 2, 0, 1, 3, 2, 1, 1, 3, 2, 3, 2, 2, 3, 2, 3, 3, 3, 3]},
  {id: 3, name: 'Marth', image: 'assets/images/icons/marth.png',
  matchups: [0, 0, null, -1, -1, 1, 1, 0, 2, 1, 2, 2, 2, 0, 2, 2, 2, 2, 3, 2, 3, 2, 3, 3, 3, 3]},
  {id: 4, name: 'Sheik', image: 'assets/images/icons/sheik.png',
  matchups: [-1, 0, 1, null, -1, 1, -1, 1, 3, 1, 1, 3, 2, 2, 1, 2, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3]},
  {id: 5, name: 'Jigglypuff', image: 'assets/images/icons/jigglypuff.png',
  matchups: [-1, 0, 1, 1, null, 1, 0, 1, 1, 1, 0, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 3, 3, 2, 2]},
  {id: 6, name: 'Peach', image: 'assets/images/icons/peach.png',
  matchups: [-1, 0, -1, -1, -1, null, 2, -1, 1, 0, 1, 3, 1, 0, 1, 1, 1, 1, 2, 3, 2, 1, 2, 3, 2, 1]},
  {id: 7, name: 'Ice Climbers', image: 'assets/images/icons/ice-climbers.png',
  matchups: [-1, 0, -1, 1, 0, -2, null, 0, 1, -1, 0, 2, 0, -2, 1, 1, 1, 0, 1, 3, 2, 1, 2, 3, 2, 1]},
  {id: 8, name: 'Captain Falcon', image: 'assets/images/icons/falcon.png',
  matchups: [-2, -2, 0, -1, -1, 1, 0, null, 0, 1, 1, 2, 1, 1, 1, 2, 1, 3, 2, 2, 3, 2, 3, 3, 3, 3]},
  {id: 9, name: 'Pikachu', image: 'assets/images/icons/pikachu.png',
  matchups: [-2, -2, -2, -3, -1, -1, -1, 0, null, 0, -1, 1, -1, 0, -2, 1, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2]},
  {id: 10, name: 'Samus', image: 'assets/images/icons/samus.png',
  matchups: [0, 0, -1, -1, -1, 0, 1, -1, 0, null, 0, 3, 1, -1, 1, 1, -1, -1, 1, 3, 1, 0, 2, 3, 2, 2]},
  {id: 11, name: 'Doctor Mario', image: 'assets/images/icons/doc.png',
  matchups: [-1, -1, -2, -1, 0, -1, 0, -1, 1, 0, null, 2, 0, -1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 3, 2, 3]},
  {id: 12, name: 'Yoshi', image: 'assets/images/icons/yoshi.png',
  matchups: [-3, -3, -2, -3, -2, -3, -2, -2, -1, -3, -2, null, -2, -2, -2, -2, -1, -2, 0, 0, 0, -1, 0, 0, 0, 1]},
  {id: 13, name: 'Luigi', image: 'assets/images/icons/luigi.png',
  matchups: [-2, -2, -2, -2, -2, -1, 0, -1, 1, -1, 0, 2, null, -1, 0, 1, -1, 1, 1, 2, 1, 1, 2, 2, 2, 2]},
  {id: 14, name: 'Ganondorf', image: 'assets/images/icons/ganondorf.png',
  matchups: [-2, -1, 0, -2, -1, 0, 2, -1, 0, 1, 1, 2, 1, null, 1, 1, 1, 1, 2, 2, 2, 1, 2, 3, 2, 3]},
  {id: 15, name: 'Mario', image: 'assets/images/icons/mario.png',
  matchups: [-1, -1, -2, -1, -2, -1, -1, -1, 2, -1, 0, 2, 0, -1, null, 2, 0, 1, 1, 2, 1, 0, 2, 3, 2, 2]},
  {id: 16, name: 'Young Link', image: 'assets/images/icons/young-link.png',
  matchups: [-2, -3, -2, -2, -1, -1, -1, -2, -1, -1, -1, 2, -1, -1, -2, null, -1, 1, 1, 2, 1, 2, 2, 2, 2, 2]},
  {id: 17, name: 'Donkey Kong', image: 'assets/images/icons/dk.png',
  matchups: [-2, -2, -2, -2, -2, -1, -1, -1, 0, 1, 0, 1, 1, -1, 0, 1, null, 0, 1, 2, -1, 2, 2, 2, 2, 2]},
  {id: 18, name: 'Link', image: 'assets/images/icons/link.png',
  matchups: [-3, -3, -2, -3, -1, -1, 0, -3, 0, 1, -1, 2, -1, -1, -1, -1, 0, null, 1, 1, 1, 2, 1, 2, 3, 0]},
  {id: 19, name: 'Mr. Game & Watch', image: 'assets/images/icons/gnw.png',
  matchups: [-3, -2, -3, -3, -2, -2, -1, -2, -1, -1, -1, 0, -1, -2, -1, -1, -1, -1, null, 0, 1, -1, 1, 1, 2, 2]},
  {id: 20, name: 'Roy', image: 'assets/images/icons/roy.png',
  matchups: [-2, -2, -2, -3, -2, -3, -3, -2, -2, -3, -2, 0, -2, -2, -2, -2, -2, -1, 0, null, -1, -1, 1, 2, 1, -1]},
  {id: 21, name: 'Mewtwo', image: 'assets/images/icons/mewtwo.png',
  matchups: [-3, -3, -3, -2, -2, -2, -1, -3, -1, -1, -1, 0, -1, -2, -1, -1, 1, -1, -1, 1, null, 1, 1, 1, 1, 2]},
  {id: 22, name: 'Zelda', image: 'assets/images/icons/zelda.png',
  matchups: [-3, -2, -2, -3, -2, -1, -1, -2, -2, 0, 0, 1, -1, -1, 0, -2, -2, -2, 1, 1, -1, null, 1, 1, 1, 1]},
  {id: 23, name: 'Ness', image: 'assets/images/icons/ness.png',
  matchups: [-3, -3, -3, -3, -3, -2, -2, -3, -2, -2, -1, 0, -2, -2, -2, -2, -2, -1, -1, -1, -1, -1, null, 1, 1, 1]},
  {id: 24, name: 'Pichu', image: 'assets/images/icons/pichu.png',
  matchups: [-3, -3, -3, -3, -3, -3, -3, -3, -2, -3, -3, 0, -2, -3, -3, -2, -2, -2, -1, -2, -1, -1, -1, null, 0, 0]},
  {id: 25, name: 'Bowser', image: 'assets/images/icons/bowser.png',
  matchups: [-3, -3, -3, -3, -2, -2, -2, -3, -2, -2, -2, 0, -2, -2, -2, -2, -2, -3, -2, -1, -1, -1, -1, 0, null, -1]},
  {id: 26, name: 'Kirby', image: 'assets/images/icons/kirby.png',
  matchups: [-3, -3, -3, -3, -2, -1, -2, -3, -2, -2, -3, -1, -2, -3, -2, -2, -2, 0, -2, 1, -2, -1, -1, 0, 1, null]}
];
