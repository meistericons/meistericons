import { readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { optimize } from "svgo";
import {parseSync,stringify} from 'svgson'
import { getCurrentDir, readIconFiles, readSvgCode } from '@meistericons/build-tools';


const currentDir = getCurrentDir(import.meta.url);
const iconsDir = resolve(currentDir, "../../icons");

let totalIcons = 0

readdirSync(iconsDir).forEach((category) => {
    const categoryDir = resolve(iconsDir, category);
    const iconCategories = readIconFiles(categoryDir);

    iconCategories.forEach(async (iconFile) => {
        const svgFile = resolve(iconsDir, `${category}/${iconFile}.svg`);

        const svgCode = readSvgCode(svgFile);

        const parsedSvg = parseSync(svgCode);

        parsedSvg.children.forEach((child) => {
        if (child.attributes.fill === "#000") {
          child.attributes.fill = "currentColor";
        }
      });


        const optimizedResult = optimize(stringify(parsedSvg), {
            multipass: true,
            js2svg: {
                indent: 2,
                pretty: true,
            },
            plugins: [
                { name: "preset-default", params: { overrides: { removeViewBox: false } } },
                "removeDimensions",
                "sortAttrs",
                "prefixIds",
              "mergePaths"
            ],
        });
        writeFileSync(resolve(iconsDir, `${category}/${iconFile}.svg`), optimizedResult.data, 'utf-8')
    })



    console.log(`Optimized ${iconCategories.length} icons for ${category} Category`)
    totalIcons += iconCategories.length
})
console.log(`Optimized ${totalIcons} icons.`)