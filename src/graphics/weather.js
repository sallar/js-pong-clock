import { Color } from 'led-matrix';
import * as images from './bitmaps';
import { random } from '../tools';

const rain = [];
	
for (let r = 0; r < 13; r++) {
  rain[r] = random(9, 15);
}

export function raining(store, x, y, color = Color.hex('#30A9DE')) {
  store.drawBitmap(x, y, images.cloud, 16, 16, Color.rgba(255, 255, 255));

  for (let r = 0; r < 13; r++) {
    store.drawPixel(x + r + 2, rain[r]++, color);
    if(rain[r] === 16) {
      rain[r] = 9;
    }
  }
}

export function snowing(store, x, y) {
  raining(store, x, y, Color.hex('#EDEDED'));
}

export function sunny(store, x, y) {
  store.fillRect(x, y, 16, 16, Color.hex('#8EC0E4'));
  store.drawBitmap(x, y, images.bigSun, 16, 16, Color.hex('#f9c00c'));
}

export function sunnyCloudy(store, x, y) {
  store.drawBitmap(x, y, images.cloud, 16, 16, Color.hex('#FFFFFF'));
  store.drawBitmap(x, y, images.bigSun, 16, 16, Color.hex('#f9c00c'));
}
