import { appendFileSync } from "node:fs";
import path from "node:path";
import { getCurrentDir, toPascalCase } from "../index";

export default (iconFile: string, outputDir:string) => {
  const targetDir = path.resolve(`${outputDir}/icons`)

  const importIconString = `export {default as  ${toPascalCase(
    iconFile
  )}} from './${toPascalCase(iconFile)}';\n`;

  appendFileSync(path.resolve(targetDir, `index.ts`), importIconString, "utf-8");
};