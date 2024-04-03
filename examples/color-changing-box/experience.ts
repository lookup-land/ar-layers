// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import {
  Anchor,
  Box,
  Model,
  Position,
  RGBAColor,
  Scene,
  SimpleMaterial,
} from "../../src";

const scene = new Scene();

scene.initialize();

const box = new Box({ size: 0.1, cornerRadius: 0.005 });

const material = new SimpleMaterial({
  color: new RGBAColor({ red: 1, green: 0, blue: 0, alpha: 1 }),
  roughness: 0,
  metallic: false,
});

const model = new Model({ mesh: box, materials: [material] });

const anchor = new Anchor({
  position: new Position({ x: 0, y: 0, z: -0.5 }),
});

anchor.addChild(model);
scene.addAnchor(anchor);

scene.run();

const colors = [
  new RGBAColor({ red: 0, green: 1, blue: 0, alpha: 1 }),
  new RGBAColor({ red: 0, green: 0, blue: 1, alpha: 1 }),
  new RGBAColor({ red: 1, green: 0, blue: 0, alpha: 1 }),
];

let colorIndex = 0;

setInterval(() => {
  material.color = colors[colorIndex];
  colorIndex = colorIndex === 2 ? 0 : colorIndex + 1;

  scene.update(material.id, material);
}, 2 * 1000);
