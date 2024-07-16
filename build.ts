import * as esbuild from "esbuild";
import type { ServeOptions } from "esbuild";

// eslint-disable-next-line
// @ts-ignore
import postCssPlugin from "@deanc/esbuild-plugin-postcss";
import * as tailwindcss from "tailwindcss";

/*
build
-----

Bundling for the browser with esbuild 
has a primary interface with the `esbuild.build` function.


Context
-------

Advanced bundling involve using the `esbuild.context` function.
Three different incremental build modes are available:

- **watch mode** with `ctx.watch()` to automatically rebuild on file changes
- **serve mode** with `ctx.serve()`, starts a development server. Incoming requests start a new build
- **rebuild mode** with `ctx.rebuild()`, manually trigger a rebuild

                      
  When you are done with a context object, you can call dispose() on
  the context to wait for existing builds to finish, stop watch and/or
  serve
  mode, and free up resources.


* */

async function buildAndServe(opts: ServeOptions): Promise<void> {
  let ctx;
  try {
    ctx = await esbuild.context({
      entryPoints: ["src/app/main.tsx"],
      bundle: true,
      outfile: "dist/main.js",
      define: { "process.env.IS_PRODUCTION": "true" },
      loader: { ".tsx": "tsx" },
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
      plugins: [postCssPlugin({ plugins: [], foo: "bar" })],
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  await ctx.watch();
  await ctx.serve(opts);

  console.log(`Server started at http://${serveOpts.host}:${serveOpts.port}`);
}

const serveOpts = {
  servedir: "dist",
  port: 8080,
  host: "localhost",
};
buildAndServe(serveOpts);
