/* eslint-disable import/no-anonymous-default-export */
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default {
  input: "stories/index.ts",
  output: [
    {
      file: "build/index.js",
      format: "cjs",
      sourcemap: true,
      exports: 'named',
    },
    {
      file: "build/index.es.js",
      format: "esm",
      sourcemap: true,
      exports: 'named',
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './rollup.tsconfig.json' }),
    postcss()
  ],
  external: ['react', 'react-dom'],
};