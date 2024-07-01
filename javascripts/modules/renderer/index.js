import {
  WebGLRenderer,
  ACESFilmicToneMapping,
  BasicShadowMap
} from 'three';

import WebGPURenderer from 'three/addons/renderers/webgpu/WebGPURenderer.js';

function renderer() {

  const webGLRenderer = new WebGLRenderer({antialias: true});
  webGLRenderer.setClearColor(0xf5f5f5); // set background color
  webGLRenderer.setPixelRatio( window.devicePixelRatio );
  webGLRenderer.setSize( window.innerWidth, window.innerHeight );
  webGLRenderer.shadowMap.enabled = true;
  webGLRenderer.shadowMap.type = BasicShadowMap;
  document.body.appendChild( webGLRenderer.domElement );

  webGLRenderer.toneMapping = ACESFilmicToneMapping;
  webGLRenderer.toneMappingExposure = 0.35;

  return webGLRenderer;
  
}

export {
  renderer
};