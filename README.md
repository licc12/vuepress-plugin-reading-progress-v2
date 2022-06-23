# vuepress-plugin-reading-progress-v2

> a reading progress bar plugin for vuepress

[README](README.md) | [CHANGELOG](CHANGELOG.md)

add reading progress bar for vuepress

# vuepress-plugin-reading-progress-v2 <GitHubLink repo="moefyit/vuepress-plugin-reading-progress-v2"/>

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-reading-progress-v2" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-reading-progress-v2.svg"></a>
   <a href="https://github.com/moefyit/vuepress-plugin-reading-progress-v2/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/moefyit/vuepress-plugin-reading-progress-v2"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-reading-progress-v2" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-reading-progress-v2.svg"></a>
   <a href="https://github.com/licc12/vuepress-plugin-reading-progress-v2/blob/main/LICENSE" target="_blank"><img alt="GitHub license" src="https://www.npmjs.com/package/vuepress-plugin-reading-progress-v2"></a>
</p>

---

## Dependencies vuepress version

vuepress version v2.0.0+

## Installation

```sh
yarn add vuepress-plugin-reading-progress-v2
# or
npm i vuepress-plugin-reading-progress-v2
```

## Usage

```js
module.exports = {
   plugins: [
      'reading-progress',
      {
         /** 是否展示进度条: 默认true */
         isSHowProgress: true,
         /** 自定义进度条的class: 默认‘’ */
         overrideClass: '',
         /** 进度条吸附位置:默认top; */
         fixed: 'top',
         /** 过滤哪些页面不展示进度条,默认[] */
         filterPages: [],
      },
   ],
}
```

[ Vuepress documentation](https://vuepress.vuejs.org/plugin/using-a-plugin.html)

## Thanks

-  [vuepress-plugin-reading-progress](https://github.com/tolking/vuepress-plugin-reading-progress)

## License

[MIT](http://opensource.org/licenses/MIT)
