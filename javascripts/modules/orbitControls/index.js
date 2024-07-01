import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function orbitControls(camera, renderer) {
  
  const controls = new OrbitControls( camera, renderer.domElement );
  controls.update();

  return controls;
  
}

export {
  orbitControls
};