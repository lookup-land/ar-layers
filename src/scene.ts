// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import { v4 as uuid } from "uuid";
import { Anchor } from "./anchor";
import type { BaseObject } from "./base-object";
import { RGBAColor } from "./color";
import { Entity, type EntityType } from "./entity";
import { Material, SimpleMaterial } from "./materials";
import { Model } from "./model";
import { MessageEventType, transport } from "./transport";

interface Data {
  anchors: Set<Entity<EntityType>>;
}

export class Scene implements BaseObject {
  id = uuid();
  data: Data = { anchors: new Set<Entity<EntityType>>() };

  addAnchor(anchor: Anchor) {
    this.data.anchors.add(anchor);
  }

  toJSON() {
    return {
      anchors: Array.from(this.data.anchors).map((anchor) => anchor.toJSON()),
    };
  }

  initialize() {
    transport(MessageEventType.Initialize);
  }

  run() {
    transport(MessageEventType.StartScene, this.toJSON());
  }

  private updateChild(
    child: Entity<EntityType>,
    targetID: string,
    nextItem: BaseObject
  ): Entity<EntityType> {
    if (child.id === targetID && nextItem instanceof Entity) {
      return nextItem;
    }

    if (child instanceof Model) {
      child.materials = new Set(
        Array.from(child.materials).map((material) => {
          if (material.id === targetID && nextItem instanceof Material) {
            return nextItem;
          }

          if (material instanceof SimpleMaterial) {
            if (
              material.color.id === targetID &&
              nextItem instanceof RGBAColor
            ) {
              material.color = nextItem;
            }
          }

          return material;
        })
      );
    }

    child.children = new Set(
      Array.from(child.children).map((child) => {
        return this.updateChild(child, targetID, nextItem);
      })
    );

    return child;
  }

  update(targetID: string, item: BaseObject) {
    Array.from(this.data.anchors).map((anchor) => {
      anchor.children = new Set(
        Array.from(anchor.children).map((child) => {
          return this.updateChild(child, targetID, item);
        })
      );

      return anchor;
    });

    transport(MessageEventType.UpdateScene, this.toJSON());
  }
}
