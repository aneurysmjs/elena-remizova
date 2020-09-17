import React from 'react';

import { allPass, complement, compose, ifElse, isNil, map, path, pick, propSatisfies } from 'ramda';

import isMobileBrowser from '~/utils/isMobileBrowser';

type ZoomElementType = HTMLImageElement | HTMLElement | HTMLDivElement;

type OnMouseMoveEvent = React.MouseEvent<ZoomElementType>;

type OnTouchMoveEvent = React.TouchEvent<ZoomElementType>;

type ZoomEventType = OnMouseMoveEvent | OnTouchMoveEvent;

interface ZoomFnType {
  (type: ZoomEventType): OffsetType;
}

type OffsetType = {
  offsetY: number;
  offsetX: number;
} & { pageY: number; pageX: number };

interface MapCoord {
  (coord: string): (x: { [Key: string]: string }) => boolean;
}

/**
 * Coordinates for mapping between `offsetX`, `offsetY` and `pageX`, `pageY`
 */
const coords = ['X', 'Y'];

/**
 *
 * @param {MapCoord} pred - curried predicate function
 */
const mapToCoords = (pred: MapCoord) => map(pred, coords);

/**
 * returns a interpolated string of the form offset`Value`.
 * @param {string} coord - coordinate
 */
const offset = (coord: string): string => `offset${coord}`;

/**
 * returns a interpolated string of the form page`Value`.
 * @param {string} coord - coordinate
 */
const page = (coord: string): string => `page${coord}`;

/**
 * Verifies wheter or not the event has an `offset` or `offset` property
 * @param {string} coord - coordinate
 */
const itHasOffsetProp = (coord: string) => propSatisfies(complement(isNil), offset(coord));

/**
 *
 * @param {(coord: string) => string} fn - transformation function to map properties from coords
 */
const pickCoord = (fn: (coord: string) => string) => pick(map(fn, coords));

/**
 * Gets `offsetX` and `offSetY` from event
 */
const getOffset = pickCoord(offset);

/**
 * Gets `pageX` and `pageY` from event
 */
const getPage = pickCoord(page);

/**
 * Gets the offset from touch event by retrieving from `changedTouches.0`
 */
const getOffsetTouch = compose(getPage, path(['changedTouches', '0']));

/**
 * Checks that the event has an `offsetX` or `offsetY` properties
 */
const checkOffset = allPass(mapToCoords(itHasOffsetProp));

/**
 * gets the pageX/Y properties from MouseEvent or TouchEvent
 */
const getPageCoords: ZoomFnType = (evt) =>
  ifElse(checkOffset, getOffset, getOffsetTouch)(evt.nativeEvent);

/**
 * calculates offset's coordinates from web or mobile
 * @param {ZoomEventType} evt
 */
const calculateCoords = (evt: ZoomEventType): string => {
  const img = evt.currentTarget;
  const result = getPageCoords(evt);

  const rec = img.getBoundingClientRect();

  /**
   * В чем разница между pageX/Y, clientX/Y, screenX/Y в Javascript?
   * @link https://ru.stackoverflow.com/questions/653693/%D0%92-%D1%87%D0%B5%D0%BC-%D1%80%D0%B0%D0%B7%D0%BD%D0%B8%D1%86%D0%B0-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-pagex-y-clientx-y-screenx-y-%D0%B2-javascript
   *
   * get e.offsetX/Y on mobile/iPad
   *
   * @see https://stackoverflow.com/questions/11287877/how-can-i-get-e-offsetx-on-mobile-ipad
   */
  const x = ((result.offsetX || result.pageX - rec.left) / img.offsetWidth) * 100;
  const y = ((result.offsetY || result.pageY - rec.top) / img.offsetHeight) * 100;

  return `${x}% ${y}%`;
};

/**
 * @see https://codepen.io/galulex/pen/eNZRVq?editors=1010
 */
export default function imageZoom(evt: ZoomEventType): string {
  // Here we avoid scrolling when user touches the screen
  if (isMobileBrowser()) {
    evt.preventDefault();
  }

  return calculateCoords(evt);
}
