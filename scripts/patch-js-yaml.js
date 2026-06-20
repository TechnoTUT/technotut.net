const fs = require('fs');
const path = require('path');

const filepath = path.resolve(__dirname, '../node_modules/js-yaml/index.js');
if (fs.existsSync(filepath)) {
  let content = fs.readFileSync(filepath, 'utf8');
  if (content.includes("module.exports.safeLoad = renamed('safeLoad', 'load')")) {
    content = content.replace(
      "module.exports.safeLoad = renamed('safeLoad', 'load')",
      "module.exports.safeLoad = loader.load"
    );
    content = content.replace(
      "module.exports.safeLoadAll = renamed('safeLoadAll', 'loadAll')",
      "module.exports.safeLoadAll = loader.loadAll"
    );
    content = content.replace(
      "module.exports.safeDump = renamed('safeDump', 'dump')",
      "module.exports.safeDump = dumper.dump"
    );
    fs.writeFileSync(filepath, content, 'utf8');
    console.log('Successfully patched js-yaml for backward compatibility.');
  } else {
    console.log('js-yaml is already patched or format differs.');
  }
} else {
  console.log('js-yaml not found at ' + filepath);
}
