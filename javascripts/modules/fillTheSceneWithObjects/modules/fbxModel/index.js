import {
  MeshPhysicalMaterial,
  Vector3,
  DynamicDrawUsage,
} from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

function fbxModel(scene, data = {}){

  loader.load(

    `models/${data.model}/model.glb`,

    function(glb){

      let mesh = null;

      glb.scene.traverse(function(child){

        if(child.isMesh){
          child.material = data.material ?? new MeshPhysicalMaterial();
					child.castShadow = true;
					child.receiveShadow = true;

          mesh = child;


        }
          
      });
  
      scene.add(glb.scene);

      window.__transform = function(type = null, num = 0.3){

        if(type){

          mesh.geometry.computeBoundingBox();

          const middle = new Vector3();
          middle.x = (mesh.geometry.boundingBox.max.x + mesh.geometry.boundingBox.min.x) / 2;
          middle.y = (mesh.geometry.boundingBox.max.y + mesh.geometry.boundingBox.min.y) / 2;
          middle.z = (mesh.geometry.boundingBox.max.z + mesh.geometry.boundingBox.min.z) / 2;

          const positionAttribute = mesh.geometry.getAttribute( 'position' );
          positionAttribute.setUsage( DynamicDrawUsage );
          // const uvAttribute = mesh.geometry.getAttribute( 'uv' );
          // uvAttribute.setUsage( DynamicDrawUsage );

          const vertex = new Vector3();
          // const vertexUV = new Vector2();

          if(type === "height"){

            const a = new Vector3(0, mesh.geometry.boundingBox.min.y, 0);
            const b = new Vector3(0, mesh.geometry.boundingBox.max.y, 0);
            const disAB = a.distanceTo(b);

            const subVal = num - disAB;
            const subValProcent = (subVal / (disAB / 100));

            const sizeTexture = mesh.material.map.repeat.y;
            const newSize = ((sizeTexture / 100) * subValProcent);
            
            mesh.material.map.repeat.y += newSize;

          }else if(type === "width"){

            const a = new Vector3(0, mesh.geometry.boundingBox.min.z, 0);
            const b = new Vector3(0, mesh.geometry.boundingBox.max.z, 0);
            const disAB = a.distanceTo(b);

            const subVal = num - disAB;
            const subValProcent = (subVal / (disAB / 100));
            

            const sizeTexture = mesh.material.map.repeat.x;
            const newSize = ((sizeTexture / 100) * subValProcent);
            
            mesh.material.map.repeat.x += newSize;
            
          }

          for(let i=0; i<positionAttribute.count; i++){

            vertex.fromBufferAttribute(positionAttribute, i); // read vertex

            // vertexUV.fromBufferAttribute(uvAttribute, i); // read vertexUV

            if(type === "height"){

              if(vertex.y >= middle.y){

                const a = new Vector3(0, mesh.geometry.boundingBox.min.y, 0);
                const b = new Vector3(0, mesh.geometry.boundingBox.max.y, 0);
                const disAB = a.distanceTo(b);

                const subVal = num - disAB;

                vertex.y += subVal;
                
              }
              
            }else if(type === "width"){

              if(vertex.z <= middle.z){

                const a = new Vector3(0, mesh.geometry.boundingBox.min.z, 0);
                const b = new Vector3(0, mesh.geometry.boundingBox.max.z, 0);
                const disAB = a.distanceTo(b);

                const subVal = num - disAB;
      
                vertex.z -= subVal;
                
              }
              
            }

            positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
            // uvAttribute.setXY(i, vertexUV.x, vertexUV.y);

          }

          positionAttribute.needsUpdate = true;
          // uvAttribute.needsUpdate = true;

        }

      }

      { // gui | Door

        const folder = __gui.addFolder( 'Door' );

        folder.add( {height: 2.1}, 'height', 1.05, 3, 0.001 )
          .name("Height")
          .onChange(val => {

            __transform("height", val);
            
          });

        folder.add( {height: 0.9}, 'height', 0.55, 3, 0.001 )
          .name("Width")
          .onChange(val => {

            __transform("width", val);
            
          });
          
      }

    },

    function(xhr){

      // console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    },

    function(error){

      console.log( "Error:", error );

    }

  );
  
}

export {
  fbxModel
};