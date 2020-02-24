<template>
<div>
  <div class="post-container" v-for="page in pages">
      <div class="post-card">
        <div class="page-detail">
        <img class="article-image" v-bind:src="page.frontmatter.mapLink" />
          <div class="page-title">{{ page.title }}</div>
          <div class="page-categroy"><span class="list">Category: </span>{{ page.frontmatter.category }}</div>
          <div class="page-author"><span class="list">Author: </span><a target="_blank" v-bind:href="page.frontmatter.authorLink">{{ page.frontmatter.author }}</a></div>
          <div class="page-location"><span class="list">Location: </span><a target="_blank" v-bind:href="page.frontmatter.locationLink">{{ page.frontmatter.location }}</a></div>
          <div class="page-description">{{ page.frontmatter.description }}</div>
          <div class="read-more">
            <div><a class="button medium-zoom-image" v-bind:href="page.frontmatter.mapLink">view map </a></div>
            <div><a class="button" target="_blank" v-bind:href="page.frontmatter.sourceLink">see original →</a></div>
            </div> 
        </div>
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
    console.log(this.pages);
    
  }
}
</script>
<style scoped>
.post-container {
  display:flex;
  width: 100%;
  padding: 15px 0;
}
.post-card {
  width: 600px;
  margin: 10px;
  border: 1px solid #ffffff;
  border-radius: 3px;
  padding: 2em;
  display: inline;
  align-items: center;
  background-color: rgba(211,228,236,0.2);
}
.article-image {
  width: 100%;
  height: 4em;
  object-fit: cover;
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

.read-more {
  display:inline-grid;
  grid-template-columns: auto auto;
}

.read-more .button {
  background-color: #247ba0;
  color: #ffffff;
}

.read-more .button:hover {
  background-color: #123d50;
  color: #ffffff;
}
</style>