import {
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  TextureLoader,
  SRGBColorSpace,
  RepeatWrapping,
  Color,
  MathUtils,
  Vector2,
} from 'three';

const textureLoader = new TextureLoader();

function materials(name){

  let material = null;

  const anisotropy = 16;

  let repeat, diffuse, aoMap, normalMap, bumpMap,
  rotation;

  switch (name) {

    case "tile":

      repeat = 4;

      diffuse = textureLoader.load('images/textures/tile/map.jpg');
      diffuse.colorSpace = SRGBColorSpace;
      diffuse.wrapS      = diffuse.wrapT    = RepeatWrapping;
      diffuse.repeat.x   = diffuse.repeat.y = repeat;
      diffuse.anisotropy = anisotropy;

      aoMap = textureLoader.load('images/textures/tile/ao.jpg');
      aoMap.wrapS      = aoMap.wrapT    = RepeatWrapping;
      aoMap.repeat.x   = aoMap.repeat.y = repeat;
      aoMap.anisotropy = anisotropy;

      normalMap = textureLoader.load('images/textures/tile/normal.jpg');
      normalMap.wrapS      = normalMap.wrapT    = RepeatWrapping;
      normalMap.repeat.x   = normalMap.repeat.y = repeat;
      normalMap.anisotropy = anisotropy;

      material = new MeshStandardMaterial({

        // color: 0xffffff,
        
        map: diffuse,

        aoMap: aoMap,
        aoMapIntensity: 1,

        normalMap: normalMap,
        normalScale: new Vector2(0.3, 0.3),

        roughness: 0.15,
        // roughnessMap: aoMap,

        // metalness: 1,
        
      });
      
      break;
      
    case "wood-door":

      repeat = 1;

      diffuse = textureLoader.load('images/textures/wood/diffuse.jpg');
      diffuse.colorSpace = SRGBColorSpace;
      diffuse.wrapS      = diffuse.wrapT    = RepeatWrapping;
      diffuse.repeat.x   = diffuse.repeat.y = repeat;
      diffuse.anisotropy = anisotropy;

      material = new MeshPhysicalMaterial({

        color: new Color("#ffffff"),
        
        map: diffuse,

        roughness: 0.25,
        
      });
      
      break;
      
    case "red":

      material = new MeshPhysicalMaterial({

        color: 0xff0000,
				roughness: 0,
        
      });
      
      break;
      
  }

  return material;
  
}

export {
  materials
};