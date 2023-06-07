const fs = require('fs');
const path = require('path');

const filter = ['scripts', '.git', 'node_modules']

function filterDir(dir) {
  return !filter.includes(dir);
}

function generateFiles() {
  const files = fs.readdirSync(path.resolve(__dirname, '../'));
  const components = files.filter((item) => {
    return fs.statSync(path.resolve(__dirname, `../${item}`)).isDirectory() && filterDir(item);
  });
  components.push('config.json');
  const componentsStr = JSON.stringify(components);
  const packageJson = fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8');
  const newPackageJson = packageJson.replace(/"files": \[([\s\S]*?)\]/, `"files": ${componentsStr}`);
  fs.writeFileSync(path.resolve(__dirname, '../package.json'), newPackageJson);
  console.log('generate files success');
}

generateFiles();