/* eslint-disable no-unused-vars */
import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#1B1B1B',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: '/black.png',
  fullDecal: '/black.png',
});

export default state;
