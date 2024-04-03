// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import {
  Anchor,
  browser,
  Model,
  Position,
  RGBAColor,
  Scene,
  SimpleMaterial,
  Text,
  TextAlignment,
  TextLineBreakMode,
} from "../../src";

const scene = new Scene();

scene.initialize();

document.querySelector("form")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameEl = document.getElementById("name") as HTMLInputElement;

  const text = new Text(`Hello, ${nameEl.value}!`, {
    extrusionDepth: 0.01,
    font: { name: "system", size: 0.05 },
    alignment: TextAlignment.Center,
    lineBreakMode: TextLineBreakMode.ByWordWrapping,
  });

  const material = new SimpleMaterial({
    color: new RGBAColor({ red: 0, green: 0, blue: 0, alpha: 1 }),
    roughness: 1,
    metallic: false,
  });

  const model = new Model({ mesh: text, materials: [material] });

  const anchor = new Anchor({
    position: new Position({ x: 0, y: 0, z: -0.5 }),
  });

  anchor.addChild(model);
  scene.addAnchor(anchor);

  scene.run();
  browser.hide();

  nameEl.value = "";
});
