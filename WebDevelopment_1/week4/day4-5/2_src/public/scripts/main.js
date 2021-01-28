import {process} from './lib.js';

const componentNameList = [
  "app-header",
  "app-footer",
  "app-carousel",
  "app-uploader",
  "app-avator",
  "app-like",
  "app-picture-large",
  "app-comment-input",
  "app-comment-example",
]

componentNameList.forEach(name => {
  process(name);
})