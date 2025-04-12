import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: true,
  format: ["cjs"],
  clean: true,
  outDir: "dist",
});
