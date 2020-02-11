<template>
  <div class="post-container">
    <router-link v-for="page in pages" :to="page.path">
      <div class="post-card">
        <img class="article-image" src="{{ page.frontmatter.map-link }}" />
        <div class="page-detail">
          <div class="page-title">{{ page.title }}</div>
          <div class="page-description">{{ page.frontmatter.description }}</div>
          <div class="page-author">Author: <a href="{{ page.frontmatter.source-link }}" target="_blank">{{ page.frontmatter.author }}</a></div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: []
    }
  },
  mounted() {
    this.$site.pages.forEach(page => {
      if (page.frontmatter.type === 'map') {
        this.pages.push(page)
      }
    })
  }
}
</script>