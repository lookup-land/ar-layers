// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import { Entity, EntityType } from "./entity";
import type { Material, MaterialType } from "./materials";

export class Model extends Entity<EntityType.Model> {
  mesh: Entity<EntityType>;
  materials: Set<Material<MaterialType>>;

  constructor(opts: {
    mesh: Entity<EntityType>;
    materials: Array<Material<MaterialType>>;
  }) {
    super(EntityType.Model);

    this.mesh = opts.mesh;
    this.materials = new Set(opts.materials);
  }

  toJSON() {
    return {
      ...super.toJSON(),
      mesh: this.mesh.toJSON(),
      materials: Array.from(this.materials).map((material) =>
        material.toJSON()
      ),
    };
  }
}
