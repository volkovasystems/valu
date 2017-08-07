
const assert = require( "assert" );
const valu = require( "./valu.js" );

assert.deepEqual( valu( { "hello": "world" } ), [ "world" ], "should be equal to [ 'world' ]" );

console.log( "ok" );
