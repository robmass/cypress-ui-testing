const fs = require("fs");

const filePath = `${__dirname}/public/index.html`;
let content = fs.readFileSync(filePath, 'utf-8');
content = content.replace(/"\/app-(\w+)./gm, '"./app-$1.');
content = content.replace(/"\/commons-(\w+)./gm, '"./commons-$1.');
content = content.replace(/"\/component---/gm, '"./component---');
content = content.replace(/"\/webpack-/gm, '"./webpack-');
content = content.replace(/"\/page-data/gm, './page-data');
fs.writeFileSync(filePath, content);
