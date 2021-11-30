<template>
    <section class="hero is-primary">
      <div class="hero-body">
        <h1 class="title">{{title}}</h1>
        <h2 v-if="subtitle" class="subtitle">{{subtitle}}</h2>
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
  background-color: rgba(0,0,0,0);
}
.title, .subtitle{
    text-align: center;
    color: black !important;
}

.subtitle {
  font-size: 38px;
}

.title {
  font-size: 64px;
}
@media (max-width: 600px){
    .title {
        font-size: 48px;
    }
    .subtitle {
        font-size: 32px;
    }
}
</style>