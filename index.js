const { compileTemplate } = require("@vue/compiler-sfc");
const { optimize: optimizeSvg } = require("svgo");
const url = require("url");
const path = require("path");

const fileRegex = /\.(svg)$/;

export default function svgLoader(options = {}) {
  return {
    name: "svg-loader",

    transform(src, id) {
      console.log(`id is ${id}`);

      const svg = optimizeSvg(src);

      return {
        code: compileTemplate({
          id: path.basename(
            url.parse(id)
          ),
          source: svg,
          filename: id,
        }),
      };
    },
  };
}
