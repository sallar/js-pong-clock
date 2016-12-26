import { LedMatrix, createStore, Color } from 'led-matrix';
import * as weather from './graphics/weather';
import './style.css';

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

  let x = 16;
  let y = 0;

  weather.raining(store, x, y);

  // Render
  matrix.setData(store.matrix);
  matrix.render();

  // Repeat (10fps)
  setTimeout(loop, 100);
}

loop();
