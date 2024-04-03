// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

export type JSONValue =
  | string
  | number
  | boolean
  | { [key: string]: JSONValue }
  | JSONValue[];

export type JSONObject = Record<string, JSONValue>;

export interface BaseObject {
  id: string;
  toJSON: () => JSONObject;
}
