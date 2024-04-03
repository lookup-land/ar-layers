// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import { Entity, EntityType } from "./entity";

export class Box extends Entity<EntityType.Box> {
  size: number;
  cornerRadius: number;

  constructor(opts: { size: number; cornerRadius: number }) {
    super(EntityType.Box);

    this.size = opts.size;
    this.cornerRadius = opts.cornerRadius;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      size: this.size,
      cornerRadius: this.cornerRadius,
    };
  }
}
