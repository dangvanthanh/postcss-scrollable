const postcss = require('postcss')

const plugin = require('./')

function run(input, output) {
  let result = postcss([plugin]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('Append default scrollbar', () => {
  run(
    '',
    `
  * {
    scrollbar-width: thin;
    scrollbar-color: #006387 transparent
}
::-webkit-scrollbar {
    width: 6px;
    background-color: transparent
}
::-webkit-scrollbar-track {
    background-color: transparent
}
::-webkit-scrollbar-vertical {
    width: 6px
}
::-webkit-scrollbar-horizontal {
    height: 6px
}
::-webkit-scrollbar-thumb {
    background-color: #006378;
    border-radius: 6px;
    overflow: hidden
}
  `
  )
})
