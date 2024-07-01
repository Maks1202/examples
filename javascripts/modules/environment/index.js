import {
  TextureLoader,
  EquirectangularReflectionMapping,
  PMREMGenerator,
  LinearFilter,
} from 'three';

import {RGBELoader} from 'three/addons/loaders/RGBELoader.js';

const rgbeLoader = new RGBELoader();

async function environment(scene){

  const hdrTexture = await rgbeLoader.loadAsync("images/environment/studio.hdr");
  
  hdrTexture.mapping = EquirectangularReflectionMapping;
  
  scene.environment = hdrTexture;
  scene.background = hdrTexture;
  
}

export {
  environment
};