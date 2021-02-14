<template>
    <div class="post" :key="post.id">
        <g-link :to="post.path"><h2 class="title">{{post.title}}</h2></g-link>
        <div class="date">{{niceDate(post._createdAt)}}</div>
        <g-image class="post-image" :src="`${post.cover.asset.url}`" />
        <rich-content :blocks="post._rawBody" />
      </div>
</template>
<script>
export default {
    props: ['post'],
    methods: {
        niceDate(date){
            if(date){
                return new Date(date).toLocaleDateString();
            }
        }
    }
}
</script>
<style scoped>
.post {
  margin: 20px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  max-width: 750px;
}
.post > p {
  align-self: flex-start;
}
.post-image {
  max-width: 500px;
  width: 100%;
  margin: 20px 0;
}
.date {
  color: rgba(0, 0, 0, 0.4);
}
.title {
  text-align: center;
  font-size: 42px;
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