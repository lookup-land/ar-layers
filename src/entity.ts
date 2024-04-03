// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import { v4 as uuid } from "uuid";
import type { BaseObject, JSONValue } from "./base-object";
import { Transform } from "./transform";

export enum EntityType {
  Anchor = "anchor",
  Box = "box",
  Model = "model",
  Text = "text",
}

export class Entity<Type extends EntityType> implements BaseObject {
  id: string;
  type: Type;
  children = new Set<Entity<EntityType>>();
  transform = new Transform();

  constructor(type: Type) {
    this.id = uuid();
    this.type = type;
  }

  addChild(entity: Entity<EntityType>) {
    this.children.add(entity);
  }

  toJSON(): { id: string; type: Type; children: Array<JSONValue> } {
    return {
      id: this.id,
      type: this.type,
      children: Array.from(this.children).map((child) => child.toJSON()),
    };
  }
}
