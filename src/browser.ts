// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import { MessageEventType, transport } from "./transport";

class Browser {
  static shared = new Browser();

  private constructor() {}

  hide() {
    transport(MessageEventType.HideBrowser);
  }
}

export const browser = Browser.shared;
