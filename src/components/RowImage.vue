<template>
    <div class="row-image">
        <g-image :src="urlFor()" />
    </div>
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
<style scoped>
.row-image {
    margin: 20px;
    text-align: center;
    
}

.row-image > img {
    min-width: 400px;
}
.row-image:nth-child(3n){
    grid-area: 1/2/3/3;
}
.row-image:nth-child(3n+2){
    grid-area: 3/2/5/3;
}
.row-image:nth-child(3n+1){
    grid-area: 3/1/5/2;
}

@media (max-width: 900px) {
    .row-image > img {
        min-width: 90%;
    }
}

</style>
