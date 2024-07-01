import {
  Scene
} from 'three';

import Stats from 'three/addons/libs/stats.module.js';

import { camera } from "./modules/camera/index.js";
import { renderer } from "./modules/renderer/index.js";
import { orbitControls } from "./modules/orbitControls/index.js";
import { fillTheSceneWithObjects } from "./modules/fillTheSceneWithObjects/index.js";
import { environment } from "./modules/environment/index.js";
import { postprocessing } from "./modules/postprocessing/index.js";

window.__gui = new GUI();

{ // init app

  const _scene = new Scene(); // create scene

  const _camera = camera(); // create camera

  environment(_scene); // create env

  fillTheSceneWithObjects(_scene); // fill the scene with objects
  
  const _renderer = renderer(); // create webgl renderer
  _renderer.setAnimationLoop( animate ); // start rendering

  const stats = new Stats();
  document.body.appendChild( stats.dom );

  const _controls = orbitControls(_camera, _renderer);

  const _composer = postprocessing({
    renderer: _renderer,
    scene: _scene,
    camera: _camera,
  });

  function animate(){

    _controls.update();
    
    stats.begin();
    _composer.render( _scene, _camera );
    stats.end();

  }

}