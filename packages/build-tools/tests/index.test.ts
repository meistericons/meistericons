import {describe, expect, test} from 'vitest'
import { getCurrentDir, readAllMetadata, readIconFiles, readSvgCode, toCamelCase, toKebabCase, toPascalCase } from '..'
import path from 'node:path'

describe('it should export build tools for meistericons', ()=>{
    const currentDir = getCurrentDir(import.meta.url) 

    test("it should convert the given string to PascalCase.", ()=>{
        const pascalString = 'AddBlockB'
        expect(toPascalCase('add-block-b')).toEqual(pascalString)
    })
    test("it should convert the given string to camelCase.", ()=>{
        const camelCaseString = 'addBlockB'
        expect(toCamelCase('add-block-b')).toEqual(camelCaseString)
    })
    test("it should convert the given string to kebabcase.", ()=>{
        const kebabString='add-block-b' 
        expect(toKebabCase('AddBlockB')).toEqual(kebabString)
    })
    test("it should return the current working directory.", ()=>{
        expect(currentDir).toEqual(path.resolve(process.cwd(), './tests/index.test.ts'))
    })
    test("it should read the files of a svg directory.", ()=>{
        const svgIconFiles = readIconFiles(path.resolve(currentDir, '../../../static/icons/arrows')) 
        svgIconFiles.forEach(svgIconFile=>expect(svgIconFile).toBe(svgIconFile))
    })
    test("it should read the contents of a file.", ()=>{
        const svgCode = readSvgCode(path.resolve(currentDir, '../../../static/icons/arrows/arrow-left.svg')) 
        expect(svgCode).toBeTruthy()
    })
    test("it should generate a types file for given package.", ()=>{
        const typesFile = (path.resolve(currentDir, '../../../react/lib/meistericons-react.d.ts')) 
        expect(typesFile).toBeTruthy()
    })
    test("it should generate js/ts file for given package.", ()=>{
        const iconFile = (path.resolve(currentDir, '../../../react/icons/Add.ts')) 
        expect(iconFile).toBeTruthy()
    })
    test("it should generate a export index file for given package.", ()=>{
        const indexFile = (path.resolve(currentDir, '../../../react/icons/index.ts')) 
        expect(indexFile).toBeTruthy()
    })
})
