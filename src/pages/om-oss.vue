<template>
    <Layout>
        <div class="om-page">
            <section class="om-hero">
                <h1>{{ $page.about.title }}</h1>
            </section>
            <div class="content">
                <div class="intro">
                    <rich-content :blocks="$page.about._rawDescription" />
                </div>
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
<style scoped>
.om-page {
    background: #f8faf9;
}

.om-hero {
    background: linear-gradient(135deg, #2D5A4A 0%, #3D6A5A 100%);
    color: white;
    padding: 4rem 2rem;
    text-align: center;
}

.om-hero h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0;
    color: white !important;
}

.gallery {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.intro {
    max-width: 900px;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 20px;
}

h3 {
    text-align: center;
    font-weight: 500;
}

@media (max-width: 900px) {
    .om-hero h1 {
        font-size: 2rem;
    }
}
</style>

