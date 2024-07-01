import {
  BufferAttribute,
  BufferGeometry,
} from 'three';

function initGeometry(vertices = [], indexes = []){

  /* format args:

  vertices = [  
    { position: [-1, 0,  1], normal: [ 0,  0,  1], uv: [0, 1], }, // v0
    { position: [ 1, 0,  1], normal: [ 0,  0,  1], uv: [1, 1], }, // v1
    { position: [-1, 0, -1], normal: [ 0,  0,  1], uv: [0, 0], }, // v2
    { position: [ 1, 0, -1], normal: [ 0,  0,  1], uv: [1, 0], }, // v3
  ]

  indexes = [
    0,  1,  2,   2,  1,  3,  // face
  ]

  */

  const lengthVertices = vertices.length;
  const positionNumComponents = 3;
  const normalNumComponents = 3;
  const uvNumComponents = 2;
  const positions = new Float32Array(lengthVertices * positionNumComponents);
  const normals = new Float32Array(lengthVertices * normalNumComponents);
  const uvs = new Float32Array(lengthVertices * uvNumComponents);
  let positionNdx = 0;
  let normalNdx = 0;
  let uvNdx = 0;
  for (const vertex of vertices) {
    positions.set(vertex.position, positionNdx);
    normals.set(vertex.normal, normalNdx);
    uvs.set(vertex.uv, uvNdx);
    positionNdx += positionNumComponents;
    normalNdx += normalNumComponents;
    uvNdx += uvNumComponents;
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(positions, positionNumComponents));
  geometry.setAttribute('normal'  , new BufferAttribute(normals  , normalNumComponents  ));
  geometry.setAttribute('uv'      , new BufferAttribute(uvs      , uvNumComponents      ));
  geometry.attributes.uv1 = geometry.attributes.uv;

  geometry.setIndex(indexes);

  return geometry;

}

export {
  initGeometry
};