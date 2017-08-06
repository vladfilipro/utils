'use strict'

class DateTime extends Date {

  toString () {
    return this.toISOString().slice( 0, 19 ).replace( 'T', ' ' )
  }

  static diff ( start, end ) {
    let duration = end.getTime() - start.getTime()
    let milliseconds = parseInt( ( duration % 1000 ) / 100 )
    let seconds = parseInt( ( duration / 1000 ) % 60 )
    let minutes = parseInt( ( duration / ( 1000 * 60 ) ) % 60 )
    let hours = parseInt( ( duration / ( 1000 * 60 * 60 ) ) % 24 )

    hours = ( hours < 10 ) ? '0' + hours : hours
    minutes = ( minutes < 10 ) ? '0' + minutes : minutes
    seconds = ( seconds < 10 ) ? '0' + seconds : seconds

    return hours + ':' + minutes + ':' + seconds + '.' + milliseconds
  }

}

module.exports = DateTime
