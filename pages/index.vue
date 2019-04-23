<template>
  <div class="home">
    <h1>{{ data.title }}</h1>
    <p>{{ data.punchline }}</p>
    <div class="wrapper">
      <h2>Featured article</h2>
      <PostCard :data="featuredPost" />
    </div>
    <div class="wrapper">
      <h2>All article</h2>
      <PostCard v-for="post in blogPosts" :key="post.slug" :data="post" />
    </div>
  </div>
</template>

<script>
import data from "~/.content/pages/index.json";

import PostCard from "~/components/dump/PostCard.vue";

export default {
  components: {
    PostCard
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
      blogPosts: process.env.cms_blogPosts.sort((a, b) => a.date < b.date)
    };
  },
  computed: {
    featuredPost() {
      return this.blogPosts.find(i => i.title === this.data.featured);
    }
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

<style scoped lang="stylus">
.home
  margin globalMargin
  padding smallMargin
  border-radius 3px
  background white
  box-shadow 0 4px 20px 0px rgba(0, 0, 0, .14)

  @media screen and (max-width tablet)
    margin mediumMargin

  @media screen and (max-width mobile)
    margin smallMargin

h1
  fontsize(48px)
  margin-bottom mediumMargin

h2
  fontsize(32px)
  margin-bottom smallMargin

.wrapper
  margin smallMargin 0
</style>
