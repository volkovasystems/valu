
const assert = require( "assert" );
const valu = require( "./valu.js" );

assert.deepEqual( valu( { "hello": "world" } ), [ "world" ], "should return [ 'world' ]" );

console.log( "ok" );
