<template>
  <Layout>
    <page-header :title="'Blogg'" />
    <div class="posts">
      <div class="post" v-for="edge in $page.posts.edges" :key="edge.node.id">
        <h2 class="title">{{edge.node.title}}</h2>
        <div class="date">{{niceDate(edge.node._createdAt)}}</div>
        <g-image class="post-image" :src="`${edge.node.cover.asset.url}`" />
        <rich-content :blocks="edge.node._rawBody" />
      </div>
    </div>
  </Layout>
</template>
<page-query>
query Posts {
  posts: allSanityBlogpost {
    edges {
      node {
        _createdAt
        id
        title
        cover{
          asset {
            url 
          }
        }
        _rawBody(resolveReferences: {maxDepth: 2})
      }
    }
  }
}
</page-query>
<script>
import PageHeader from "~/components/PageHeader.vue";
//import axios from "~/plugins/axios";
//import marked from "marked";
export default {
  components: {
    PageHeader
  },
  data() {
    return {
      articles: [],
      
    };
  },
  computed: {
    apiUrl: function() {
      return process.env.baseUrl;
    }
  },
  methods: {
    niceDate(date){
      if(date){
        return new Date(date).toLocaleDateString();
      }
    }
  }
};
</script>
<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.post {
  margin: 20px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  max-width: 900px;
}
.post > p {
  align-self: flex-start;
}
.post-image {
  max-width: 900px;
  width: 100%;
  margin: 20px 0;
}
.date {
  color: rgba(0, 0, 0, 0.4);
}
.title {
  text-align: center;
}
@media (max-width: 800px) {
  .title {
    font-size: 48px;
  }
  .subtitle {
    font-size: 38px;
  }
}
</style>