import {
  Mesh,
  MeshBasicMaterial,
  SphereGeometry,
} from 'three';

function sphere(scene, data = {}){

  const size = .5 * (data.size ?? 1);

  const material = data.material ?? new MeshBasicMaterial();
  
  const geometry = new SphereGeometry(size, 32, 16);
  const mesh = new Mesh(geometry, material);
  mesh.position.set(1, size, 1);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);
  
  return mesh;
  
}

export {
  sphere
};