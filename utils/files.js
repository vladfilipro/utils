'use strict'

const fs = require( 'fs' )
const path = require( 'path' )

let files = ( dir, each ) => {
  let all = fs.readdirSync( dir )
  all.forEach( ( file ) => {
    file = path.resolve( dir, file )
    let stat = fs.statSync( file )
    if ( stat && stat.isDirectory() ) {
      return files( file, each )
    } else {
      each( file )
    }
  } )
}

module.exports = ( dir, each ) => {
  return new Promise( ( resolve, reject ) => {
    try {
      resolve( files( dir, each ) )
    } catch ( e ) {
      reject( e )
    }
  } )
}
