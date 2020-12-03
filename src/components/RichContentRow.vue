<template>
    <div class="content-row">
        <block-content :projectId="'r44b6dmp'" :dataset="'fredtun'" :blocks="blocks" :serializers="serializers" />
    </div>
</template>
<script>
import BlockContent from 'sanity-blocks-vue-component'
import RowImage from '~/components/RowImage.vue'
export default {
    props: ['blocks'],
    components: {
        BlockContent
    },
    data(){
        return {
            serializers:{
                types: {
                    image: RowImage
                }
            }
        }
    }
}
</script>
<style scoped>
.content-row > div{
    display: grid;
}

.content-row > div > p{
    grid-row: 1 / 3;
    padding-top: 20px;
}

</style>