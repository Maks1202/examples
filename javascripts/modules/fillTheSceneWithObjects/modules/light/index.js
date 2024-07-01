import {
  AmbientLight,
  PointLight,
  DirectionalLight,
} from 'three';

function light(scene){

  // const ambientLight = new AmbientLight( 0xffffff ) // 0x404040 ); // soft white light
  // scene.add( ambientLight );

  const dirLight = new DirectionalLight( 0xffffff, 10 );
  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;
  dirLight.position.set( 2, 2, 2 );

  dirLight.castShadow = true;
  
  scene.add( dirLight );
  
}

export {
  light
};