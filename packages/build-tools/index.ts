
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from 'node:url';


export const toCamelCase = (string: string) =>
    string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
        p2 ? p2.toUpperCase() : p1.toLowerCase()
    );

export const toKebabCase = (string: string) =>
    string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

export const toPascalCase = (string: string) =>
    toCamelCase(string).charAt(0).toUpperCase() + toCamelCase(string).slice(1);

export const getCurrentDir = (filePath: string) =>
    fileURLToPath(new URL(filePath));

export const readIconFiles = (iconDir: string) =>
    readdirSync(iconDir).map((iconFile) => iconFile.replace(/.svg/, ""));

export const readSvgCode = async (file: string) =>
    readFileSync(file)

export const readAllMetadata = (dir: string) =>
    readdirSync(dir)
        // .map((iconFile) => iconFile.replace(/.svg/, ""))
        .reduce((acc: any, fileName, i) => {
            acc[path.basename(fileName, ".svg")] = readSvgCode(fileName);
            return acc;
        }, {});

export { default as generateExportFile } from './src/generateExportFile';
export { default as generateIconFile } from './src/generateIconFile';
export { default as generateTypes } from './src/generateTypes';
