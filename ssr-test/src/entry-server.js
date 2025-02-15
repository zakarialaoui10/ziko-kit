
  import {defineServerEntry} from "ziko-server/entry-server";
  
  export default defineServerEntry({
     pages: import.meta.glob("./pages/**/*{.js,.mdz}")
  })
  