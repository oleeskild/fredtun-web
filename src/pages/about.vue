<template>
    <Layout>
        <page-header :title="$page.about.title" />
        <div class="content">
        <div class="intro">
            {{$page.about.description}}
        </div>
        <div class="gallery">
            <h2 class="subtitle">Galleri</h2>
            <gallery />
        </div>
    </div>
    </Layout>
</template>
<page-query>
query About {
  about: sanityAbout(id: "global-om-fredtun"){
        title
        description
        id
  }
}
</page-query>
<script>
import PageHeader from '~/components/PageHeader.vue'
import Gallery from '~/components/Gallery.vue'
export default {
   components: {
       PageHeader,
       Gallery
   } 
}
</script>
<style scoped>
.gallery {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.intro{
    margin-top: 50px;
    max-width: 900px;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>