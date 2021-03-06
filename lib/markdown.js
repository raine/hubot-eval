const { curry, join, pipe, repeat } = require('ramda')
const repeatStr = pipe(repeat, join(''))

const wrap = curry((x, s) => x + s + x)
exports.mdLink = curry((text, url) => `[${text}](${url})`)
exports.mdBold = wrap('**')
exports.mdStrike = wrap('~~')
exports.mdPre = wrap('`')
exports.mdCode = curry((lang, str) => '```' + lang + '\n' + str + '\n```')
exports.mdHeader = (n, text) => [ repeatStr('#', n), text ].join(' ')
