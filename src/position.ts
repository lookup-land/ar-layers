// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import { v4 as uuid } from "uuid";
import type { BaseObject } from "./base-object";

export class Position implements BaseObject {
  id: string;
  x = 0;
  y = 0;
  z = 0;

  constructor(opts?: { x: number; y: number; z: number }) {
    this.id = uuid();

    if (opts) {
      this.x = opts.x;
      this.y = opts.y;
      this.z = opts.z;
    }
  }

  toJSON() {
    return {
      id: this.id,
      x: this.x,
      y: this.y,
      z: this.z,
    };
  }
}
