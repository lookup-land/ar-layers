// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import { Entity, EntityType } from "./entity";
import { Position } from "./position";

export class Anchor extends Entity<EntityType.Anchor> {
  position = new Position();

  constructor(opts?: { position: Position }) {
    super(EntityType.Anchor);

    if (opts?.position) {
      this.position = opts?.position;
    }
  }

  toJSON() {
    return {
      ...super.toJSON(),
      position: this.position?.toJSON(),
    };
  }
}
