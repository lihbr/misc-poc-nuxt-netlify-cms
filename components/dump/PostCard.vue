<template>
  <SmartLink class="postCard" :href="data.route" :title="data.title">
    <div class="featured">
      <img :src="data.featured_image" :alt="data.title" />
    </div>
    <div class="info">
      <h4>{{ data.title }}</h4>
      <small>- {{ data.date }}</small>
      <p>{{ data.lead }}</p>
      <div class="cta">Read the article &gt;</div>
    </div>
  </SmartLink>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style scoped lang="stylus">
.postCard
  display flex
  margin smallMargin 0
  box-shadow 0 4px 10px 0px rgba(0, 0, 0, .14)
  border-radius 3px
  overflow hidden

  @media screen and (max-width mobile)
    flex-flow column nowrap

  .featured
    flex 1

    img
      width 100%
      height 100%
      object-fit cover

  .info
    flex 2
    padding smallMargin mediumMargin

    h4
      fontsize(24px)
      display inline

    small
      fontsize(12px)
      font-weight 300
      opacity .7
      vertical-align super

    p
      margin smallMargin 0

    .cta
      text-align right
</style>
