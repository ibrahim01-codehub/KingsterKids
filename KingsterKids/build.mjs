// Run with:  npm run build
import { build } from "esbuild";
import path from "node:path";
const define = { "process.env.NODE_ENV": '"production"' };

// 1) React itself (minified, rarely changes)
await build({
  entryPoints: ["src/vendor.js"], bundle: true, minify: true, format: "iife",
  outfile: "assets/js/vendor.js", define, target: "es2018", legalComments: "none"
});

// 2) The site code (NOT minified, so you can read and edit text in it)
await build({
  entryPoints: ["src/main.jsx"], bundle: true, minify: false, format: "iife",
  outfile: "assets/js/app.js", define, target: "es2018", legalComments: "none",
  jsx: "transform", loader: { ".js": "jsx" },
  alias: {
    react: path.resolve("src/shims/react.js"),
    "react-dom/client": path.resolve("src/shims/react-dom-client.js")
  }
});
console.log("Build finished: assets/js/vendor.js + assets/js/app.js");
