<template>
<Layout>
    <div class="blogpost-container">
        <div class="path"><g-link to="/blogg">Blogg</g-link> / {{$page.sanityBlogpost.title}}</div>
        <blog-post :post="$page.sanityBlogpost" />
    </div>
</Layout>
</template>

<page-query>
query ($id: ID!) {
  sanityBlogpost(id: $id) {
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
</page-query>
<script>
import BlogPost from "~/components/BlogPost.vue";
export default {
    components:{
        BlogPost
    }
}
</script>
<style scoped>
.blogpost-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.path {
    margin: 10px;
    font-size: 1.5rem;
}
</style>
