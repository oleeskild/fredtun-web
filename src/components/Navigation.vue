<template>
<div class="nav">
    <div class="columns">
        <div class="column ">
            <nav-item :link="'/blogg'" :title="'BLOGG'" />
        </div>
        <div class="column ">
            <nav-item :link="'/arrangementer'" :title="'ARRANGEMENTER'" />
        </div>
        <div class="column ">
            <nav-item :link="'/leie'" :title="'UTLEIE &amp; PRISER'" />
        </div>
        <div class="column ">
            <nav-item :link="'/om-oss'" :title="'OM FREDTUN'" />
        </div>
        <div class="column">
            <nav-item :link="'/kontakt'" :title="'KONTAKT OSS'" />
        </div>
    </div>
</div>
</template>
<script>
import NavItem from '~/components/NavItem.vue';
export default {
    components:{
        NavItem
    }
}
</script>
<style scoped>
.nav{
    margin: 50px 20px;
    display: flex;
    justify-content: center;
}

.column{
    padding: 2rem;
}
</style>