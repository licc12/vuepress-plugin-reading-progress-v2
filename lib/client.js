import ReadingProgress from './components/ReadingProgress.vue'
import { defineClientAppEnhance } from "@vuepress/client";

export default defineClientAppEnhance(({ app, Vue }) => {
  app.component('ReadingProgress', ReadingProgress)
});

