<template>
    <section class="hero is-primary">
      <div class="hero-body">
        <h1 class="title">{{title}}</h1>
        <h2 class="subtitle">{{subtitle}}</h2>
      </div>
    </section>
</template>
<script>
export default {
    props: ['title', 'subtitle']
}
</script>
<style scoped>
.is-primary {
  background-color: #389583;
}
.title, .subtitle{
    text-align: center;
}
@media (max-width: 600px){
    .title {
        font-size: 48px;
    }
    .subtitle {
        font-size: 38px;
    }
}
</style>