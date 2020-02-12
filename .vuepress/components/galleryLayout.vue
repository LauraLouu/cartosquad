<template>
  <div class="post-container" v-for="page in pages">
      <div class="post-card">
        <img class="article-image" v-bind:src="page.frontmatter.mapLink" />
        <div class="page-detail">
          <div class="page-title">{{ page.title }}</div>
          <div class="page-categroy"><span class="list">Category: </span>{{ page.frontmatter.category }}</div>
          <div class="page-author"><span class="list">Author: </span><a target="_blank" v-bind:href="page.frontmatter.authorLink">{{ page.frontmatter.author }}</a></div>
          <div class="page-location"><span class="list">Location: </span><a target="_blank" v-bind:href="page.frontmatter.locationLink">{{ page.frontmatter.location }}</a></div>
          <div class="page-description">{{ page.frontmatter.description }}</div>
          <!--div class="read-more"><router-link :to="page.path">read more →</router-link></div--> 
          <div class="read-more"><a target="_blank" v-bind:href="page.frontmatter.sourceLink">see original →</a></div> 
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
  border: 1px solid #ffffff;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: rgba(211,228,236,0.2);
}
.article-image {
  height: 100%;
}
.page-detail {
    padding: 10px;
}
.page-title {
    font-weight: bold;
    font-size: 1.25em;
}
.post-description {
  padding:10px 0;
}
.list {
  font-weight:550;
}
</style>