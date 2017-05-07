
const assert = require( "assert" );
const valu = require( "./valu.js" );

assert.deepEqual( valu( { "hello": "world" } ), [ "world" ], "should return array containing 'world'" );

console.log( "ok" );
