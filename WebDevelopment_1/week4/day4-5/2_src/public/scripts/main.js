import {process} from './lib.js';

const componentNameList = [
  "app-header",
  "app-footer",
  "app-carousel",
  "app-uploader",
  "app-avator",
]

componentNameList.forEach(name => {
  process(name);
})