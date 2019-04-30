/**
 * This script should be run in order to increment the version numbers in the package.json
 * files in both the server and frontend pacakges.  It also updates version.ts file which
 * is read by the 'signin' component and displays the version at the bottom of the page.
 * 
 * The version should be bumped each time we deploy with new changes.
 */

const fs = require( 'fs' );

const newversion = process.argv[2];

if ( !newversion ) {
  console.log( '\nNew version string required!' );
  process.exit(1);
}

console.log( '\nSetting new version to:', newversion );

const serverpackage = JSON.parse( fs.readFileSync( './package.json', { encoding: 'utf8'}) );
const frontendpackage = JSON.parse( fs.readFileSync( './frontend/package.json', { encoding: 'utf8'}) );

console.log( '\nServer:  ', serverpackage.version, '=====>', newversion );
serverpackage.version = newversion;
console.log( 'Frontend:', frontendpackage.version, '=====>', newversion );
frontendpackage.version = newversion;

console.log( '\nSaving...')
fs.writeFileSync( './package.json', JSON.stringify( serverpackage, null, 2), { encoding: 'utf8'} );
fs.writeFileSync( './frontend/package.json', JSON.stringify( frontendpackage, null, 2), { encoding: 'utf8'} );

console.log( '\nUpdating injection script...' );
fs.writeFileSync( './frontend/src/app/signin/version.ts', `const version = '${newversion}';\nexport default version;\n`, { encoding: 'utf8'});

console.log( '\nDone!');

