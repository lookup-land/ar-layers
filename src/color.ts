// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import { v4 as uuid } from "uuid";
import type { BaseObject } from "./base-object";

export class RGBAColor implements BaseObject {
  id: string;
  red: number;
  green: number;
  blue: number;
  alpha: number;

  constructor(opts: {
    red: number;
    green: number;
    blue: number;
    alpha: number;
  }) {
    this.id = uuid();
    this.red = opts.red;
    this.green = opts.green;
    this.blue = opts.blue;
    this.alpha = opts.alpha;
  }

  toJSON() {
    return {
      id: this.id,
      red: this.red,
      green: this.green,
      blue: this.blue,
      alpha: this.alpha,
    };
  }
}
