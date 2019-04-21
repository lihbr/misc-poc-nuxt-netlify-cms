<template>
  <div class="blog">
    <h1>{{ data.title }}</h1>
    <h2>{{ data.punchline }}</h2>
    <Markdown :src="data.body" />
  </div>
</template>

<script>
// import Component from "~/components/Component.vue"

export default {
  components: {
    // Component
  },
  async asyncData({ params, error, payload }) {
    if (payload) return { data: payload };
    else return { data: await import(`~/.content/posts/blog/${params.slug}`) };
  }
};
</script>

<style scoped lang="stylus"></style>
