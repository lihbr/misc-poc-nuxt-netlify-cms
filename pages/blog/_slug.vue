<template>
  <div class="blog">
    <div class="hero">
      <SmartLink class="back" href="/" title="Back to home">
        <div class="cta">&lt; Back to home</div>
      </SmartLink>
      <img class="featured" :src="data.featured_image" :alt="data.title" />
    </div>
    <article>
      <h1>{{ data.title }}</h1>
      <small>- {{ data.date }}</small>
      <p class="lead">{{ data.lead }}</p>
      <Markdown :src="data.body" />
    </article>
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

<style scoped lang="stylus">
.blog
  display flex
  flex-flow column nowrap
  margin 50vh globalMargin globalMargin globalMargin

  @media screen and (max-width tablet)
    margin 50vh mediumMargin mediumMargin mediumMargin

  @media screen and (max-width mobile)
    margin 50vh smallMargin smallMargin smallMargin

  .hero
    position absolute
    top 0
    left 0
    width 100%
    height 80vh

    .back
      position absolute
      top mediumMargin
      left globalMargin

      background white
      display block
      box-shadow 0 4px 20px 0px rgba(0, 0, 0, .14)
      border-radius 3px

      @media screen and (max-width tablet)
        left mediumMargin

      @media screen and (max-width mobile)
        left smallMargin

      .cta
        padding smallMargin

    .featured
      width 100%
      height 100%
      object-fit cover

  article
    z-index 1
    padding smallMargin
    border-radius 3px
    background white
    box-shadow 0 4px 20px 0px rgba(0, 0, 0, .14)

  h1
    fontsize(48px)
    display inline

  small
    fontsize(14px)
    font-weight 300
    opacity .7
    vertical-align super

  .lead
    fontsize(22px)
    font-weight 400
    margin smallMargin 0
</style>
