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

<style scoped lang="stylus">
.markdown
  cursor auto
</style>
