import { appendFileSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

var generateExportFile = (iconFile, pkg = "react") => {
  const currentDir = getCurrentDir(import.meta.url);
  const targetDir = path.resolve(currentDir, `../../../${pkg}/icons`);
  const importIconString = `export {default as  ${toPascalCase(
    iconFile
  )}} from './${toPascalCase(iconFile)}';
`;
  appendFileSync(path.resolve(targetDir, `index.ts`), importIconString, "utf-8");
};

var generateIconFile = (iconFile, pkg = "react") => {
  const currentDir = getCurrentDir(import.meta.url);
  const targetDir = path.resolve(currentDir, `../../../${pkg}/icons`);
  const importIconString = `export {default as  ${toPascalCase(
    iconFile
  )}} from './${toPascalCase(iconFile)}';
`;
  appendFileSync(path.resolve(targetDir, `index.ts`), importIconString, "utf-8");
};

var generateTypes = (iconFile, pkg = "react") => {
  const currentDir = getCurrentDir(import.meta.url);
  const targetDir = path.resolve(currentDir, `../../../${pkg}/icons`);
  const importIconString = `export {default as  ${toPascalCase(
    iconFile
  )}} from './${toPascalCase(iconFile)}';
`;
  appendFileSync(path.resolve(targetDir, `index.ts`), importIconString, "utf-8");
};

const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toPascalCase = (string) => toCamelCase(string).charAt(0).toUpperCase() + toCamelCase(string).slice(1);
const getCurrentDir = (filePath) => fileURLToPath(new URL(filePath));
const readIconFiles = (iconDir) => readdirSync(iconDir).map((iconFile) => iconFile.replace(/.svg/, ""));
const readSvgCode = async (file) => readFileSync(file);
const readAllMetadata = (dir) => readdirSync(dir).reduce((acc, fileName, i) => {
  acc[path.basename(fileName, ".svg")] = readSvgCode(fileName);
  return acc;
}, {});

export { generateExportFile, generateIconFile, generateTypes, getCurrentDir, readAllMetadata, readIconFiles, readSvgCode, toCamelCase, toKebabCase, toPascalCase };
