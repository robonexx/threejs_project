import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  bg: '#121212',
  color: '#efbd48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: '/supermario.png',
  fullDecal: '/threejs.png',
});
export default state;
