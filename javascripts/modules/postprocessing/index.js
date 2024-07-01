// import {
// } from 'three';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

function postprocessing(app){

  const width = window.innerWidth;
  const height = window.innerHeight;

  const composer = new EffectComposer(app.renderer);

  const renderPass = new RenderPass(app.scene, app.camera);
  composer.addPass(renderPass);

  const gtaoPass = new GTAOPass(app.scene, app.camera, width, height);
  gtaoPass.enabled = false;
  composer.addPass( gtaoPass );

  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  { // gui | AO shadow

    const folder = __gui.addFolder('AO shadow');
    
    folder.add(gtaoPass, 'enabled');

  }

  return composer;
  
}

export {
  postprocessing
};