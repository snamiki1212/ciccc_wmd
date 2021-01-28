import {process} from './lib.js';

const componentNameList = [
  "app-header",
  "app-carousel"
]

componentNameList.forEach(name => {
  process(name);
})