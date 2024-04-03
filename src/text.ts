// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import { Entity, EntityType } from "./entity";

export enum TextAlignment {
  Center = "center",
}

export enum TextLineBreakMode {
  ByWordWrapping = "by-word-wrapping",
}

export class Text extends Entity<EntityType> {
  text: string;
  extrusionDepth: number;
  font: {
    name: string | "system";
    size: number;
  };
  alignment: TextAlignment;
  lineBreakMode: TextLineBreakMode;

  constructor(
    text: string,
    opts: {
      extrusionDepth: number;
      font: {
        name: string | "system";
        size: number;
      };
      alignment: TextAlignment;
      lineBreakMode: TextLineBreakMode;
    }
  ) {
    super(EntityType.Text);

    this.text = text;
    this.extrusionDepth = opts.extrusionDepth;
    this.font = opts.font;
    this.alignment = opts.alignment;
    this.lineBreakMode = opts.lineBreakMode;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      text: this.text,
      extrusionDepth: this.extrusionDepth,
      font: this.font,
      alignment: this.alignment,
      lineBreakMode: this.lineBreakMode,
    };
  }
}
