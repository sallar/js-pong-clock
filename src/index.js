import { LedMatrix, createStore, Color } from 'led-matrix';
import './style.css';

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const cloud = [
  0x0, 0x0, 0x0, 0xe0, 0x1, 0xf8, 0x3b, 0xfc, 0x7f, 0xfe, 0xff, 0xff, 0xff, 0xff, 0x7f, 
  0xff, 0x3f, 0xfe, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0
];
const rain = [];
	
for (let r = 0; r < 13; r++) {
  rain[r] = random(9, 15);
}

// Constants
const LED_WIDTH = 32;
const LED_HEIGHT = 16;

// Create canvas
const $wrapper = document.createElement('div');
const $canvas = document.createElement('canvas');

$wrapper.id = 'wrapper';
$wrapper.appendChild($canvas);
document.body.appendChild($wrapper);

// Create LED matrix
const matrix = new LedMatrix($canvas, {
  x: LED_WIDTH,
  y: LED_HEIGHT,
  pixelWidth: 20,
  pixelHeight: 20,
  margin: 10
});

function loop() {
  const store = createStore(LED_WIDTH, LED_HEIGHT);

  let x = 15;
  let y = 0;

  store.drawBitmap(x, y, cloud, 16, 16, Color.rgba(255, 255, 255));

  for (let r = 0; r < 13; r++) {
    store.drawPixel(x + r + 2, rain[r]++, Color.hex('#30A9DE'));
    if(rain[r] === 16) {
      rain[r] = 9;
    }
  }

  // Render
  matrix.setData(store.matrix);
  matrix.render();

  // Repeat (10fps)
  setTimeout(loop, 100);
}

loop();
