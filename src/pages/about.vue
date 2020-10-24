<template>
    <Layout>
        <page-header :title="$page.about.title" />
        <div class="content">
        <div class="intro">
            <rich-content :blocks="$page.about._rawDescription" />
        </div>
    </div>
    </Layout>
</template>
<page-query>
query About {
  about: sanityAbout(id: "global-om-fredtun"){
        title
        _rawDescription(resolveReferences: {maxDepth: 2})
        id
  }
}
</page-query>
<script>
import PageHeader from '~/components/PageHeader.vue'
import Gallery from '~/components/Gallery.vue'
export default {
    metaInfo: {
        title: "Om Fredtun"
    },
   components: {
       PageHeader,
       Gallery
   } 
}
</script>
<style>
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
    padding: 0px 20px 20px 20px;
}
</style>