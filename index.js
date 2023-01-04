module.exports = (opts) => {
  const options = Object.assign(
    { color: '#006387', width: '6px', height: '6px', radius: '6px' },
    opts
  )

  return {
    postcssPlugin: 'postcss-scrollbar',
    Once: (root, { Rule }) => {
      const all = new Rule({ selector: '*' })
      all.append({ prop: 'scrollbar-width', value: 'thin' })
      all.append({ prop: 'scrollbar-color', value: `${options.color} transparent` })
      root.append(all)

      const scrollbar = new Rule({ selector: '::-webkit-scrollbar' })
      scrollbar.append({ prop: 'width', value: options.width })
      scrollbar.append({ prop: 'background-color', value: 'transparent' })
      root.append(scrollbar)

      const scrollbarTrack = new Rule({ selector: '::-webkit-scrollbar-track' })
      scrollbarTrack.append({ prop: 'background-color', value: 'transparent' })
      root.append(scrollbarTrack)

      const scrollbarVertical = new Rule({ selector: '::-webkit-scrollbar-vertical' })
      scrollbarVertical.append({ prop: 'width', value: options.width })
      root.append(scrollbarVertical)

      const scrollbarHorizontal = new Rule({ selector: '::-webkit-scrollbar-horizontal' })
      scrollbarHorizontal.append({ prop: 'height', value: options.height })
      root.append(scrollbarHorizontal)

      const scrollbarThumb = new Rule({ selector: '::-webkit-scrollbar-thumb' })
      scrollbarThumb.append({ prop: 'background-color', value: options.color })
      scrollbarThumb.append({ prop: 'border-radius', value: options.radius })
      scrollbarThumb.append({ prop: 'overflow', value: 'hidden' })
      root.append(scrollbarThumb)
    },
  }
}

module.exports.postcss = true
