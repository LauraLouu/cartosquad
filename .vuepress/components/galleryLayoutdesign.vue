<template>
<div>
   <select id="categories" v-model="selectedCategory">
    <option :value="null">All Categories</option>
    <option v-for="(category,index) in filterCategories" :key="index" :value="category">{{ category }}</option>
  </select>
  <div class="post-container" v-for="page in filteredPages">
      <div class="post-card">
        <div class="page-detail">
        <img class="article-image" v-bind:src="page.frontmatter.mapLink" />
          <div class="page-title">{{ page.title }}</div>
          <div class="page-categroy"><span class="list">Category: </span>{{ page.frontmatter.category }}</div>
          <div class="page-author"><span class="list">Author: </span><a target="_blank" v-bind:href="page.frontmatter.authorLink">{{ page.frontmatter.author }}</a></div>
          <div class="page-location"><span class="list">Location: </span>{{ page.frontmatter.location }}</div>
          <div class="page-description">{{ page.frontmatter.description }}</div>
          <div class="read-more">
            <div><a class="button" target="_blank" v-bind:href="page.frontmatter.sourceLink">explore map →</a></div>
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
      pages: [],
      filterCategories: [],
      selectedCategory: null
    }
  },
  mounted() {
    this.$site.pages.forEach(page => {
      if (page.frontmatter.type === 'desmap') {
        this.pages.push(page);

        //filter
        const categories = page.frontmatter.category.split(', ');
        categories.forEach(category => {
          if (!this.filterCategories.includes(category)){
            this.filterCategories.push(category);
          }
        })
      }
    })
    console.log(this.pages);
    
  },
  computed: {
    filteredPages(){
      return this.selectedCategory ? this.pages.filter((page) => {
         const categories = page.frontmatter.category.split(', ');
         return categories.includes(this.selectedCategory);
      }) : this.pages;
    }
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
.page-description {
  padding:5px 0;
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
  color:#fff;
  margin-right: 10px;
  line-height: 3em;
  padding: 5px 7px;
  text-decoration: none !important;
  border-radius: 3px;
}

.read-more .button:hover {
  background-color: #123d50;
  color: #ffffff;
}

#categories {
  padding: 10px;
  display: block;
  margin: 0 auto;
  font-size: 1em;
}

</style>