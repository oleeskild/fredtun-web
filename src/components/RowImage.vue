<template>
    <div class="row-image">
        <g-image :src="urlFor()" />
    </div>
</template>
<script>
import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder({projectId:"r44b6dmp", dataset:"fredtun"});
export default {
    props:{
        _key: {
            type: String
        },
        _type: {
            type: String
        },
        asset: {
            type: Object
        }
    },
    mounted:function() {
    },
    methods:{
        urlFor(){
            return builder.image(this.$props).quality(80).width(600).url();
        }
    }
}
</script>
<style scoped>
.row-image {
    margin: 20px;
    text-align: center;
    
}
.row-image > img {
    min-width: 400px;
}
.row-image:nth-child(4n){
    grid-area: 1/2/3/3;
}
.row-image:nth-child(4n+1){
    grid-area: 4/2/6/2;
}

</style>
