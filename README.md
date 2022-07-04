# vuepress-plugin-reading-progress-v2

> a reading progress bar plugin for vuepress

[README](README.md) | [CHANGELOG](CHANGELOG.md)

add reading progress bar for vuepress

# vuepress-plugin-reading-progress-v2 <GitHubLink repo="licc12/vuepress-plugin-reading-progress-v2"/>

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-reading-progress-v2" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-reading-progress-v2.svg"></a>
   <a href="https://github.com/licc12/vuepress-plugin-reading-progress-v2/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/licc12/vuepress-plugin-reading-progress-v2"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-reading-progress-v2" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-reading-progress-v2.svg"></a>
   <a href="https://github.com/licc12/vuepress-plugin-dynamic-title-v2/blob/main/LICENSE"><img alt="GitHub license" src="https://camo.githubusercontent.com/20e20fd59f11d3ae8c122e7dd277e524a97ca731ff34dbff7070918e9730ae39/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f6d6f65667969742f76756570726573732d706c7567696e2d64796e616d69632d7469746c65" data-canonical-src="https://img.shields.io/github/license/licc12/vuepress-plugin-dynamic-title-v2" style="max-width: 100%;"></a>
</p>

![vuepress-plugin-reading-progress-v2](https://ououe.com/img/vuepress_plugin_reading_progress.gif)

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
      'reading-progress-v2',
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
