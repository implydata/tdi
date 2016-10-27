require('shelljs/global');
var path = require('path');
var fs = require('fs');

function exitError(msg) {
  console.error(msg);
  process.exit(1);
}

const argv = require('yargs')
  .usage('tdi')
  .boolean('q')
  .describe('q', 'quiet, do not print')
  .help('h')
  .alias('h', 'help')
  .argv;

const quiet = Boolean(argv.q)

function log(s) {
  if (quiet) return;
  console.log(s);
}

// Gather my known typing

var myTypings = {};
var typingDir = __dirname + '/typings';
var problems = [];
ls(typingDir).forEach((typing) => {
  var dtsFiles = ls(`${typingDir}/${typing}/*.d.ts`).map(f => path.basename(f));
  if (!dtsFiles.length) {
    exitError(`${typing} has not .d.ts files defined`);
  }
  if (dtsFiles.length === 1) {
    myTypings[typing] = dtsFiles[0];
  } else {
    var hasIndex = dtsFiles.indexOf('index.d.ts') !== -1;
    var hasSelf = dtsFiles.indexOf(typing + '.d.ts') !== -1;
    if (!hasIndex && !hasSelf) problems.push(typing);
    myTypings[typing] = hasIndex ? 'index.d.ts' : (typing + '.d.ts');
  }
});

if (problems.length) {
  problems.forEach(p => console.error(`${p} must have index.d.ts or ${p}.d.ts defined`));
  exitError(`There were problems`);
}

// Look where to inject

var nm = ls('node_modules');
if (nm.code !== 0) {
  exitError('can not run here');
}

nm.forEach(mod => {
  var packageFile = `node_modules/${mod}/package.json`;
  var entryFile = myTypings[mod];
  if (!entryFile) return;
  var modPackage = JSON.parse(cat(packageFile));

  var setByMe = Boolean(modPackage['_tdi']);
  var hasTypings = Boolean(modPackage['typings']);

  if (hasTypings && !setByMe) {
    exitError(`module ${mod} already has natural typings (not set by TDI). What gives?`);
  }

  if (hasTypings) {
    log(`TDI: Skipping module ${mod}`);
  } else {
    log(`TDI: Injecting types into '${mod}'`);
    modPackage['_tdi'] = true;
    modPackage['typings'] = entryFile;
    cp(`${typingDir}/${mod}/*.d.ts`, `node_modules/${mod}`);
    fs.writeFileSync(packageFile, JSON.stringify(modPackage, null, 2), { encoding: 'utf8'});
  }
})

