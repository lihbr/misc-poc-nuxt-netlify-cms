<template>
  <div class="markdown" v-html="output" />
</template>

<script>
import marked from "marked";

marked.setOptions({
  sanitize: true
});

export default {
  props: {
    src: {
      type: String,
      default: () => ""
    }
  },
  computed: {
    output() {
      return marked(this.src.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    }
  }
};
</script>

<style lang="stylus">
.markdown
  p
    margin-bottom smallMargin

  img
    max-height 50vh
    max-width 100%
    display block
    margin 0 auto

  a
    text-decoration underline
</style>
