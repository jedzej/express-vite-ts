import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/server/app.ts",
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.server.json",
    }),
  ],
};
