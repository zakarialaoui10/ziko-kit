import { defineConfig } from "vite";
import { ZikoViteCsv } from "../../src/transformers/csv.js";
import { ZikoViteMarkdown } from "../../src/transformers/markdown.js"
import { ZikoViteComponent } from "../../src/transformers/ziko.js";
export default defineConfig({
    plugins:[
        ZikoViteCsv(),
        ZikoViteMarkdown(),
        ZikoViteComponent()
    ]
})