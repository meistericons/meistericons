import crypto from "node:crypto";
import { appendFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { parseSync } from "svgson";

export const toKebabCase = (string) =>
  string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

const currentDir = process.cwd();
const targetDir = path.resolve(currentDir, `../static/tags.json`);
const iconsDir = path.resolve(currentDir, `../static/icons`);

writeFileSync(targetDir, `{\n`);

// readdirSync(path.resolve(path.dirname(require('@meistericons/static')), '../../icons')).map(icon=>
//     console.log(icon,'iconDIr'))

readdirSync(iconsDir).map((category) => {
  const categoryDir = path.resolve(iconsDir, category);

  readdirSync(categoryDir).map((icon, i) => {
    let tags = [""];
    const iconName = icon.replace(".svg", "");

    if (iconName.split("-").length > 1) {
      tags = [iconName, ...iconName.split("-")];
    } else {
      tags = [iconName];
    }
    if (category === "weather" && i === readdirSync(categoryDir).length - 1) {
      appendFileSync(
        targetDir,
        `"${iconName}": [${tags.map((tag) => `"${tag}"`)}]\n`
      );
    } else {
      appendFileSync(
        targetDir,
        `"${iconName}": [${tags.map((tag) => `"${tag}"`)}],\n`
      );
    }
  });
});
appendFileSync(targetDir, `}`);
