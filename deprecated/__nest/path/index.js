import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import {
  getPathMask
} from "../../pathMask.js"


console.log(getPathMask(__filename));

