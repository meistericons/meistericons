import {
  generateExportFile,
  generateIconFile,
  generateTypes,
  getCurrentDir,
  toKebabCase,
} from "@meistericons/build-tools";
import * as icons from "@meistericons/static";
import getCliArguments from "minimist";
import crypto from "node:crypto";
import { existsSync, unlinkSync } from "node:fs";
import path from "node:path";
import { parseSync } from "svgson";

const currentDir = getCurrentDir(import.meta.url);

const { pkg, outputDir } = getCliArguments(process.argv.slice(2));

const targetDir = path.resolve(currentDir, `../../${outputDir}`);

if (pkg !== "static" && existsSync(`${targetDir}/icons`)) {
  unlinkSync(`${targetDir}/icons/index.ts`);
  unlinkSync(`${targetDir}/lib/meistericons-${pkg}.d.ts`);
}

for (const icon of Object.entries(icons)) {
  if (icon[0] !== "icons") {
    const parsedSvg = parseSync(icon[1]);

    parsedSvg.children.forEach((child) => {
      if (!child.attributes.key) {
        child.attributes.key = crypto.randomBytes(20).toString("hex");
      }

      if (child.attributes.fill === "#000") {
        child.attributes.fill = "currentColor";
      }
    });

    const iconNodes = [
      toKebabCase(icon[0]),
      parsedSvg.children.map(({ name, attributes }) => [name, attributes]),
    ];

    generateIconFile(iconNodes, targetDir);
    generateExportFile(iconNodes[0],targetDir);
    generateTypes(icon[0], pkg,targetDir);
  }
}

console.log(
  `Generated ${
    Object.keys(icons).length - 1
  } icons for @meistericons/${pkg.replaceAll("../", "")}`
);
