<template>
  <Layout>
    <div class="event-container">
      <div class="info">
        <h1 class="title">{{ $page.sanityEvent.title }}</h1>
        <h2 class="subtitle">{{ niceDate($page.sanityEvent.date) }}</h2>
      </div>
      <div class="content">
        <rich-content :blocks="$page.sanityEvent._rawDescription" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  sanityEvent(id: $id) {
        id
        title
        date
        _rawDescription(resolveReferences: {maxDepth: 2})
  }
}
</page-query>
<script>
import Event from '../components/Event.vue'
export default {
  components: {
    Event
  },
  methods: {
    niceDate(date) {
      if (date) {
        return new Date(date).toLocaleDateString();
      }
    }
  }
}
</script>
        RichContent
<style scoped>
.title{
  font-size: 4rem;
  font-weight: 700;
}
.subtitle{
  font-size: 2rem;
  font-weight: 500;
}
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.event-container {
  margin:25px auto auto auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  max-width: 1200px;
}

.content {
  max-width: 800px;
  width: 100%;
  margin: 20px 0;
  font-size: 1.5rem;
}

.path {
  margin: 10px;
  font-size: 1.5rem;
}
</style>
