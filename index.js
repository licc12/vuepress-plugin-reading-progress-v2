const { path } = require("@vuepress/utils");

module.exports = options => {
  return {
    define: {
      /** 是否展示进度条 */
      IS_SHOW_PROGRESS: options.isSHowProgress || true,
      /** 自定义进度条的class */
      OVERRIDE_CLASS: options.overrideClass || '',
      /** 进度条吸附位置:默认 top */
      FIXED: options.fixed || 'top',
      /** 过滤哪些页面不展示进度条 */
      FILTER_PAGES: options.filterPages || [],
    },
    clientAppEnhanceFiles: path.resolve(__dirname, './lib/client.js'),
    clientAppRootComponentFiles: path.resolve(__dirname, './lib/components/ReadingProgress.vue'),
  }
}
