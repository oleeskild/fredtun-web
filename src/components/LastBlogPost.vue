<template>
    <div class="last-blog-post">
        <div class="column is-one-third cover-image" :style="`background-size: cover; background: url(${post.cover.asset.url})`"></div>
    
        <div class="blog-info">
            <div>Siste blogginnlegg</div>
            <g-link :to="post.path">
                <h2 class="blog-title">{{post.title}}</h2>
            </g-link>
        </div>
    </div>
</template>
<static-query> 
query Post{
  posts: allSanityBlogpost (order: DESC, limit:1) {
    edges{
       node{
        path,
        title
        cover {
            asset{
                url
            }
        }
      }
    }
  }
}
</static-query>
<script>
export default {
    computed:{
        post: function(){
           return this.$static.posts.edges[0].node; 
        }
    }
}
</script>
<style scoped>
.last-blog-post {
    max-width: 1024px;
    height: 200px;
    margin: 20px auto 50px auto;
    background-color: #5cdb95;
    min-height: 200px;
    display:flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
}
.blog-title{
    font-size: 42px;
}
.cover-image{
    min-height: 200px;
    width: 20%;
    background-size: cover import !important;
    background-repeat: no-repeat;
}
.blog-info{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
}
a{
    color:white;
    padding-bottom: 2px;
    border-bottom: solid #389583 5px;
    transition: all 0.2s;
}

a:hover{
    transition: all 0.2s;
    transform: translateY(-4px);
    border-bottom-width: 2px;
}
</style>