<template>
    <g-image style="max-width: 80%" :src="asset.url" />
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