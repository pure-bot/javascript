import { parser } from './dist/index.js'

const templateParser = parser.configure({
    top: 'JSTemplate'
})

console.log(templateParser.parse(`aa{{ a }}aa`).toString())