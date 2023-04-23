import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  bg: '#121212',
    color: '#efbd48',
  textColor: '#fff',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: '/supermario.png',
  fullDecal: '/supermario.png',
});
export default state;
