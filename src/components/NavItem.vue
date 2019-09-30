<template>
<g-link :to="link || ''" class="nav-link">
    <div class="nav-item">
        <div class="text">
            <span>{{title}}</span>
        </div>
    </div>
</g-link>
</template>
<script>
export default {
    props: ['title', 'link']
}
</script>
<style scoped>
.nav-link {
    color: #05386a;
}
.nav-item {
    text-align: center;
    cursor:pointer;
}

.nav-item:hover{
}
.text > span{
    border-bottom: solid 6px #389583;
    transition: border .2s ease;
    padding-bottom: 10px;
}

.text:hover > span{
    border-bottom: solid 2px #389583;
}


.text{
    padding: 10px 0;
    transition: padding .2s ease;
    font-size: 24px;
    font-weight: 500;
    white-space: nowrap;
}

.text:hover {
   padding-top: 5px; 
   padding-bottom: 15px;
}
</style>