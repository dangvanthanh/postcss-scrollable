# PostCSS Scrollbar

> [Postcss](https://github.com/postcss/postcss) plugin for pure css scrollbar.

## Usage

### Installation

```bash
$ npm i --save postcss-scrollable
```

#### Configure

```js
module.exports = {
	plugins: {
		require('postcss-scrollable')
	}
}
```

With options

```js
module.exports = {
	plugins: {
		require('postcss-scrollable')({
      color: '#20692b',
      width: '4px',
      height: '4px',
      radius: '4px'
    })
	}
}
```

See [Postcss](https://github.com/postcss/postcss) docs for examples for your environment.

## Options

| Options | Description         | Value                                  |
| ------- | ------------------- | -------------------------------------- |
| color   | Color of scrollbar  | HEX, RGB, RGBA, HSL. Default `#006387` |
| width   | Width of scrollbar  | px, em, rem. Default `6px`             |
| height  | Height of scrollbar | px, em, rem. Default `6px`             |
| radius  | Radius of scrollbar | px, em, rem. Default `6px`             |

## License

MIT © [Dang Van Thanh](http://dangthanh.org)
