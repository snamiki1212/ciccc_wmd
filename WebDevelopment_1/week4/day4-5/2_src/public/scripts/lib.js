export const process = (componentName) => {
  const htmlDir = convertComponentNameToDir(componentName);

  fetch(htmlDir)
    .then((res) => res.text())
    .then((strHtml) => renderCssImportLine(componentName) + strHtml)
    .then((strHtml) => define(componentName, strHtml));
};

const convertComponentNameToDir = (name) => `../components/${name}.html`;

const renderCssImportLine = (componentName) =>
  `<link href="../css/${componentName}.css" rel="stylesheet" />`;
  

const define = (componentName, strHtml) => {
  customElements.define(
    componentName,
    class extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = strHtml;
      }
    }
  );
};
