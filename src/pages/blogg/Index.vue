<template>
  <Layout>
    <page-header :title="'Fredtun blogg'" />
    <div class="posts">
      <div class="divider" v-for="edge in $page.posts.edges" :key="edge.node.id">
        <blog-post :post="edge.node"/>
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
        path
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
import BlogPost from "~/components/BlogPost.vue";
//import axios from "~/plugins/axios";
//import marked from "marked";
export default {
  metaInfo: { title: "Blogg" },
  components: {
    PageHeader,
    BlogPost
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
.divider {
  display: flex;
  justify-content: center;
  border-bottom: 2px rgba(0,0,0,0.4) solid;
  padding: 20px 0;
}

</style>
