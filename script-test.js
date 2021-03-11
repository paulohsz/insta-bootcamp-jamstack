/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require('shelljs');

console.log('Ola mundo');

const result = shell.exec('git diff --name-only main...', { silent: true });
const resultado = shell.exec('git diff --name-only origin/main...', { silent: true });

console.log(resultado.stdout.split('\n'));
console.log(result.stdout.split('\n'));
