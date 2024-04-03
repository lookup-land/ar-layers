// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import type { BaseObject } from "../base-object";
import type { RGBAColor } from "../color";
import { Material, MaterialType } from "./material";

export class SimpleMaterial
  extends Material<MaterialType.Simple>
  implements BaseObject
{
  color: RGBAColor;
  roughness: number;
  metallic: boolean;

  constructor(opts: {
    color: RGBAColor;
    roughness: number;
    metallic: boolean;
  }) {
    super(MaterialType.Simple);

    this.color = opts.color;
    this.roughness = opts.roughness;
    this.metallic = opts.metallic;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      color: this.color.toJSON(),
      roughness: this.roughness,
      metallic: this.metallic,
    };
  }
}
