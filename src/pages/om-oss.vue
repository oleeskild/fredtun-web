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
    padding: 5rem 2rem;
    text-align: center;
}

.om-hero h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0;
    color: white !important;
}

.content {
    max-width: 900px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

.intro {
    background: white;
    border-radius: 16px;
    padding: 3rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

@media (max-width: 900px) {
    .om-hero h1 {
        font-size: 2rem;
    }

    .om-hero {
        padding: 3rem 1.5rem;
    }

    .content {
        padding: 2rem 1rem;
    }

    .intro {
        padding: 2rem 1.5rem;
    }
}
</style>

<style>
/* Global styles for rich content in om-oss page */
.om-page .intro p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #444;
    margin-bottom: 1.5rem;
}

.om-page .intro p:last-child {
    margin-bottom: 0;
}

.om-page .intro img {
    width: 100%;
    border-radius: 12px;
    margin: 2rem 0;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.om-page .intro h2,
.om-page .intro h3 {
    color: #2D5A4A;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.om-page .intro h2 {
    font-size: 1.75rem;
}

.om-page .intro h3 {
    font-size: 1.4rem;
}

.om-page .intro ul,
.om-page .intro ol {
    margin: 1rem 0 1.5rem 1.5rem;
    color: #444;
}

.om-page .intro li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
}

.om-page .intro a {
    color: #2D5A4A;
    text-decoration: underline;
    text-underline-offset: 2px;
}

.om-page .intro a:hover {
    color: #3D6A5A;
}
</style>

