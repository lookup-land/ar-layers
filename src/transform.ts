// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import { v4 as uuid } from "uuid";
import type { BaseObject } from "./base-object";
import { Position } from "./position";

export class Transform implements BaseObject {
  id: string;
  translation = new Position();

  constructor(opts?: { translation: Position }) {
    this.id = uuid();

    if (opts?.translation) {
      this.translation = opts.translation;
    }
  }

  toJSON() {
    return {
      id: this.id,
      translation: this.translation.toJSON(),
    };
  }
}
