import crypto from "node:crypto";
import { appendFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { parseSync } from "svgson";

const currentDir = process.cwd();
const targetDir = path.resolve(currentDir, `../static/categories.json`);
const iconsDir = path.resolve(currentDir, `../static/icons`);

writeFileSync(targetDir, `{\n`);

readdirSync(iconsDir).map((category) => {
  const categoryDir = path.resolve(iconsDir, category);

  let categoryIcons = [];
  readdirSync(categoryDir).map((icon) => {
    const iconName = icon.replace(".svg", "");
    categoryIcons.push(iconName);
  });
  if (category === "weather") {
    appendFileSync(
      targetDir,
      `"${category}": [${categoryIcons.map((category) => `"${category}"`)}]\n`
    );
  } else {
    appendFileSync(
      targetDir,
      `"${category}": [${categoryIcons.map((category) => `"${category}"`)}],\n`
    );
  }
});

appendFileSync(targetDir, `}`);
