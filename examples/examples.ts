// © Agni Ilango
// SPDX-License-Identifier: MPL-2.0

import { spawn } from "bun";

process.env.VITE_ROOT = `examples/${process.argv[2]}`;

spawn({
  cmd: ["bun", "vite", "dev", "--host"],
  stdout: "inherit",
  env: process.env,
});
