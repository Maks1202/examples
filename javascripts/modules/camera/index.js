import {
  PerspectiveCamera
} from 'three';

function camera() {

  const perspectiveCamera = new PerspectiveCamera(
    65, 
    window.innerWidth / window.innerHeight, 
    0.001, 
    1000
  );

  perspectiveCamera.position.set(2, 2, 2); // set position

  return perspectiveCamera;
  
}

export {
  camera
};