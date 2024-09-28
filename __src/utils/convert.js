/* Extension : 
.md .markdown
.adoc
.textile

*/ 
import { marked } from 'marked';
import Asciidoctor from 'asciidoctor';
import textile from 'textile-js';
const _convert = (content, converter) => typeof content !== 'string'?new Error('content arg should be a string'):converter(content);

const md2html=mdContent=> _convert(mdContent, marked);
const adoc2html= adocContent => _convert(adocContent, Asciidoctor().convert);
const textile2html= textileContent => _convert(textileContent, textile);
export{
    md2html,
    adoc2html,
    textile2html   
}
