import { any } from 'ramda';

const regexes = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i,
];

/**
 * @see https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
 */
export default (): boolean => any((regex) => regex.test(navigator.userAgent))(regexes);
