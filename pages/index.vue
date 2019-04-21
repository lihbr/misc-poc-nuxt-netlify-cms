<template>
  <div class="home">
    <h1>{{ data.title }}</h1>
    <h2>{{ data.punchline }}</h2>
    <Markdown :src="data.body" />
    <SmartLink
      v-for="post in blogPosts"
      :key="post.slug"
      :href="post.route"
      :title="post.title"
    >
      {{ post.title }}
    </SmartLink>
  </div>
</template>

<script>
import data from "~/.content/pages/index.json";

// import Component from "~/components/Component.vue"

export default {
  components: {
    // Component
  },
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  data() {
    return {
      data,
      blogPosts: process.env.cms.blogPosts
    };
  },
  mounted() {
    // Netlify CMS redirect
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "_admin";
          });
        }
      });
    }
  }
};
</script>

<style scoped lang="stylus"></style>
