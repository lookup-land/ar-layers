// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import type { JSONObject } from "./base-object";

declare const window: {
  webkit: {
    messageHandlers: {
      ARLayers: {
        postMessage: (message: string) => void;
      };
    };
  };
};

export enum MessageEventType {
  Initialize = "initialize",
  StartScene = "scene.start",
  UpdateScene = "scene.update",
  HideBrowser = "browser.hide",
}

export const transport = (type: MessageEventType, data?: JSONObject) => {
  try {
    window.webkit.messageHandlers.ARLayers.postMessage(
      data
        ? JSON.stringify({
            type,
            data,
          })
        : JSON.stringify({
            type,
          })
    );
  } catch (error) {
    console.error("AR Layers: unsupported browser or platform");
  }
};
