<template>
    <block-content :projectId="'obo7jda2'" :dataset="'production'" :blocks="blocks" :serializers="serializers" />
</template>
<script>
import BlockContent from 'sanity-blocks-vue-component'
import LazyImage from '~/components/LazyImage.vue'
export default {
    props: ['blocks'],
    components: {
        BlockContent
    },
    data(){
        return {
            serializers:{
                types: {
                    image: LazyImage
                }
            }
        }
    }
}
</script>