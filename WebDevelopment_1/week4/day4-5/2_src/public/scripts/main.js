import {process} from './lib.js';

const componentNameList = [
  "app-header",
]

componentNameList.forEach(name => {
  process(name);
})