import {
  Mesh,
  MeshBasicMaterial,
} from 'three';

import { initGeometry } from "./../initGeometry/index.js";

function plane(scene, data = {}){

  const n = .5 * (data.size ?? 1);

  const vertices = [
    
    { position: [-1*n, 0,    n], normal: [ 0, 1, 0], uv: [0, 1], }, // v0
    { position: [   n, 0,    n], normal: [ 0, 1, 0], uv: [1, 1], }, // v1
    { position: [-1*n, 0, -1*n], normal: [ 0, 1, 0], uv: [0, 0], }, // v2
    { position: [   n, 0, -1*n], normal: [ 0, 1, 0], uv: [1, 0], }, // v3

  ];

  const indexes = [
    0,  1,  2,   2,  1,  3,  // face
  ];

  const geometry = initGeometry(vertices, indexes);

  const material = data.material ?? new MeshBasicMaterial();

  const plane = new Mesh(geometry, material);
  // plane.castShadow = true;
  plane.receiveShadow = true;
  scene.add(plane);
  
  return plane;
  
}

export {
  plane
};