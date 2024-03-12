import {describe, expect, test} from 'vitest'
import { getCurrentDir} from '@meistericons/build-tools'
import path from 'node:path'

describe('it should generate icons for given package', ()=>{
    const currentDir=getCurrentDir(import.meta.url)
    test("it should generate icons for all svgs in given package.", ()=>{
        const iconsDir = (path.resolve(currentDir, '../../../react/icons')) 
        expect(iconsDir).toBeTruthy()
    })    
    test("it should generate export for all icons in given package.", ()=>{
        const indexTS = (path.resolve(currentDir, '../../../react/icons/index.ts')) 
        expect(indexTS).toBeTruthy()
    })    
    test("it should generate export for all icons in given package.", ()=>{
        const typesFile = (path.resolve(currentDir, '../../../react/lib/meistericons-react.d.ts')) 
        expect(typesFile).toBeTruthy()
    })    
})
