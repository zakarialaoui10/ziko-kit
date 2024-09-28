import { defineConfig } from "vite";
import { ZikoViteCsv } from "../../src/transformers/csv.js"
export default defineConfig({
    plugins:[
        ZikoViteCsv() 
    ]
})