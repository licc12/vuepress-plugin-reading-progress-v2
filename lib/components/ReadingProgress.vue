<template>
  <ClientOnly>
    <div v-if="isShowProgress" :class="overrideClass" class="reading-progress">
      <div :style="progressStyle" class="progress"></div>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'ReadingProgress',
  data() {
    return {
      readingTop: 0,
      readingHeight: 1,
      progressStyle: null,
      transform: undefined,
      running: false,
      isShowProgress: IS_SHOW_PROGRESS,
      overrideClass: OVERRIDE_CLASS,
      fixed: FIXED,
      filterPages: FILTER_PAGES,
    }
  },
  mounted() {
    this.transform = this.getTransform()
    this.progressStyle = this.getProgressStyle()
    this.isShowProgress && window.addEventListener('scroll', this.base)
  },
  beforeDestroy() {
    this.isShowProgress && window.removeEventListener('scroll', this.base)
  },
  methods: {
    base() {
      const isFilterPage = this.filterPages.includes(location.pathname)
      if (!this.running && !isFilterPage) {
        this.running = true
        this.getReadingBase()
      }
    },
    getReadingBase() {
      this.readingHeight = this.getReadingHeight() - this.getScreenHeight()
      this.readingTop = this.getReadingTop()
      this.progressStyle = this.getProgressStyle()
      this.running = false
    },
    getReadingHeight() {
      return Math.max(document.body.scrollHeight, document.body.offsetHeight, 0)
    },
    getScreenHeight() {
      return Math.max(window.innerHeight, document.documentElement.clientHeight, 0)
    },
    getReadingTop() {
      return Math.max(window.pageYOffset, document.documentElement.scrollTop, 0)
    },
    getTransform() {
      const div = document.createElement('div')
      const transformList = [
        'transform',
        '-webkit-transform',
        '-moz-transform',
        '-o-transform',
        '-ms-transform',
      ]
      return transformList.find((item) => item in div.style) || undefined
    },
    getProgressStyle() {
      const progress = this.readingTop / this.readingHeight
      switch (this.fixed) {
        case 'top':
        case 'bottom':
          if (this.transform) {
            return `${this.transform}: scaleX(${progress})`
          } else {
            return `width: ${progress * 100}%`
          }
          break
        case 'left':
        case 'right':
          if (this.transform) {
            return `${this.transform}: scaleY(${progress})`
          } else {
            return `height: ${progress * 100}%`
          }
          break
        default:
          return null
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$readingBgColor: transparent;
$readingZIndex: 1000;
$readingSize: 6px;
$readingProgressColor: #3eaf7c;
$readingProgressImage: linear-gradient(
  -120deg,
  #e50743 0%,
  #f9870f 15%,
  #e8ed30 30%,
  #3fa62e 45%,
  #3bb4d7 60%,
  #2f4d9e 75%,
  #71378a 80%
);
.reading-progress {
  position: fixed;
  z-index: $readingZIndex;
  background: $readingBgColor;
  overflow: hidden;
  height: 2px;
  width: 100%;
  top: 0;
  .progress {
    width: 100%;
    height: 100%;
    background: $readingProgressColor;
    background-image: $readingProgressImage;
    transform-origin: 0% 0%;
    transition: transform 0.2s ease-out;
  }
}

.top {
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: $readingSize;
}

.bottom {
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: $readingSize;
}

.left {
  left: 0;
  top: 0;
  bottom: 0;
  width: $readingSize;
  height: 100%;
}

.right {
  right: 0;
  top: 0;
  bottom: 0;
  width: $readingSize;
  height: 100%;
}
</style>
