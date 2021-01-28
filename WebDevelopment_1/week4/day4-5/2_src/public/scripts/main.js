import {process} from './lib.js';

const componentNameList = [
  "app-header",
  "app-carousel",
  "app-uploader",
]

componentNameList.forEach(name => {
  process(name);
})