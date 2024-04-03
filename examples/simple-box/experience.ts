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

const anchor = new Anchor({
  position: new Position({ x: 0, y: 0, z: -0.5 }),
});

const box = new Box({ size: 0.1, cornerRadius: 0.005 });

const material = new SimpleMaterial({
  color: new RGBAColor({ red: 0, green: 1, blue: 0, alpha: 1 }),
  roughness: 0,
  metallic: false,
});

const model = new Model({ mesh: box, materials: [material] });

const scene = new Scene();

anchor.addChild(model);
scene.addAnchor(anchor);

scene.initialize();
scene.run();
