<template>
  <div class="post-container" v-for="page in pages">
  
      <div class="post-card">
        <img class="article-image" src="{{ page.frontmatter.map-link }}" />
        <div class="page-detail">
          <div class="page-title">{{ page.title }}</div>
          <div class="page-description">{{ page.frontmatter.description }}</div>
          <div class="page-author">Author: <a href="{{ page.frontmatter.source-link }}" target="_blank">{{ page.frontmatter.author }}</a></div>
          <div class="read-more"><router-link :to="page.path">read more →</router-link></div> 
        </div>
      </div>
      
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
<style scoped>
.post-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.post-card {
  width: 600px;
  height: 150px;
  margin: 10px;
  border: 2px solid $accentColor;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  align-items: center;
}
.article-image {
  height: 100%;
}
.description {
  width: 100%;
  display: flex;
  justify-content: center;
}
.page-detail {
    padding: 10px;
}
.page-title {
    font-weight: bold;
}
</style>