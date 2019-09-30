<template>
    <g-image :src="asset.url" />
</template>
<script>
export default {
    props:{
        asset: {
            type: Object
        }
    }
}
</script>