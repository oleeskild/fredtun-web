<template>
    <Layout>
        <page-header :title="'Om Fredtun'" />
        <div class="content">
        <div class="intro">
            Fredtun leirsted ligger et par km nord for Skudeneshavn på østsiden av Karmøy. Stedet er omkranset av fjell og vender mot sjøen ved sør-enden
av Karmsundet. Man kommer inn på området gjennom et naturlig smalt pass mellom de to fjellryggene som strekker seg ned mot sjøen på hver
side av området. Innenfor er det opparbeidet med fotballbane, lekeplass, plener og grusveier mellom bygningene.
        </div>
        <div class="gallery">
            <h2 class="subtitle">Galleri</h2>
            <gallery />
        </div>
    </div>
    </Layout>
</template>
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