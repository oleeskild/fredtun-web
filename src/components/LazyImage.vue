<template>
    <g-image style="width:100%" :src="urlFor()" />
</template>
<script>
import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder({projectId:"obo7jda2", dataset:"production"});
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
