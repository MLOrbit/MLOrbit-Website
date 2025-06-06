// mlorbit_frontend/src/setupTests.js

// 1) Add jest-dom matchers:
import '@testing-library/jest-dom';

// 2) Polyfill TextEncoder/TextDecoder for Undici in Firebase Auth:
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

// 3) Polyfill ReadableStream for Undici in Firebase Auth:
if (typeof global.ReadableStream === 'undefined') {
  global.ReadableStream = require('stream/web').ReadableStream;
}

// 4) Mock all Firebase modules so Jest never tries to load undici or real Firebase code:
jest.mock('firebase/app', () => {
  return {
    initializeApp: jest.fn(() => ({})),
  };
});
jest.mock('firebase/auth', () => {
  return {
    getAuth: jest.fn(() => ({})),
  };
});
jest.mock('firebase/firestore', () => {
  return {
    getFirestore: jest.fn(() => ({})),
  };
});

// 5) Mock “ogl” so Jest doesn’t parse its ESM:
jest.mock('ogl', () => ({
  Renderer: class { constructor() {} },
  Camera: class { constructor() {} },
  Transform: class { constructor() {} },
}));

// 6) Mock the Three.js example that uses ESM syntax:
jest.mock(
  'three/examples/jsm/environments/RoomEnvironment.js',
  () => ({
    RoomEnvironment: class { constructor() {} },
  }),
  { virtual: true }
);
