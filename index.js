function process(root, { Rule }) {
  const all = new Rule({ selector: '*' })
  all.append({ prop: 'scrollbar-width', value: 'thin' })
  all.append({ prop: 'scrollbar-color', value: '#006387 transparent' })
  root.append(all)

  const scrollbar = new Rule({ selector: '::-webkit-scrollbar' })
  scrollbar.append({ prop: 'width', value: '6px' })
  scrollbar.append({ prop: 'background-color', value: 'transparent' })
  root.append(scrollbar)

  const scrollbarTrack = new Rule({ selector: '::-webkit-scrollbar-track' })
  scrollbarTrack.append({ prop: 'background-color', value: 'transparent' })
  root.append(scrollbarTrack)

  const scrollbarVertical = new Rule({ selector: '::-webkit-scrollbar-vertical' })
  scrollbarVertical.append({ prop: 'width', value: '6px' })
  root.append(scrollbarVertical)

  const scrollbarHorizontal = new Rule({ selector: '::-webkit-scrollbar-horizontal' })
  scrollbarHorizontal.append({ prop: 'height', value: '6px' })
  root.append(scrollbarHorizontal)

  const scrollbarThumb = new Rule({ selector: '::-webkit-scrollbar-thumb' })
  scrollbarThumb.append({ prop: 'background-color', value: '#006378' })
  scrollbarThumb.append({ prop: 'border-radius', value: '6px' })
  scrollbarThumb.append({ prop: 'overflow', value: 'hidden' })
  root.append(scrollbarThumb)
}

module.exports = () => {
  return {
    postcssPlugin: 'postcss-scrollbar',
    Once: process,
  }
}

module.exports.postcss = true
