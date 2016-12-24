import { LedMatrix, createStore } from 'led-matrix';
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
  pixelWidth: 30,
  pixelHeight: 30
});
const store = createStore(LED_WIDTH, LED_HEIGHT);

// Render
matrix.setData(store.matrix);
matrix.render();
