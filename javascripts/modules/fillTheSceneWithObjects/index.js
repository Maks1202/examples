import { plane } from "./modules/plane/index.js";
import { light } from "./modules/light/index.js";
import { sphere } from "./modules/sphere/index.js";
import { fbxModel } from "./modules/fbxModel/index.js";
import { materials } from "./../materials/index.js";

function fillTheSceneWithObjects(scene) {

  light(scene);

  plane(scene, {
    size: 5, // 5 meter
    material: materials("tile"), // set tile material
  });

  fbxModel(scene, {
    model: "door",
    material: materials("wood-door"),
  });

  sphere(scene, {
    size: 1,
    material: materials("red"),
  });
  
}

export {
  fillTheSceneWithObjects
};