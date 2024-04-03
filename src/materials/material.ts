// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import { v4 as uuid } from "uuid";
import type { BaseObject } from "../base-object";

export enum MaterialType {
  Simple = "simple",
}

export class Material<Type extends MaterialType> implements BaseObject {
  id: string;
  type: Type;

  constructor(type: Type) {
    this.id = uuid();
    this.type = type;
  }

  toJSON() {
    return {
      id: this.id,
      type: this.type,
    };
  }
}
