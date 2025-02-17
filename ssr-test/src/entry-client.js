import {EntryClient} from "ziko-server/entry-client";

const pages = import.meta.glob('./pages/**/*.js')
// console.log(pages)
EntryClient({
  pages : import.meta.glob("./pages/**/*{.js,.mdz}")
})