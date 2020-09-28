<template>
<div class="nav">
    <div class="columns">
        <div class="column ">
            <nav-item :link="'/blog'" :title="'BLOGG'" />
        </div>
        <div class="column ">
            <nav-item :link="'/events'" :title="'ARRANGEMENTER'" />
        </div>
        <div class="column ">
            <nav-item :link="'/rent'" :title="'UTLEIE &amp; PRISER'" />
        </div>
        <div class="column ">
            <nav-item :link="'/about'" :title="'OM FREDTUN'" />
        </div>
        <div class="column">
            <nav-item :link="'/contact'" :title="'KONTAKT OSS'" />
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
    color: black;
}
.columns {
    width: 100%;
}
</style>