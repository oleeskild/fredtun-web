<template>
    <div class="events-container">
        <div class="wrap">
            <h2 class="event-title">Kommende Arrangement</h2>
            <event :key="edge.node.id" v-for="edge in $static.events.edges" :event="edge.node" />
            <g-link to="/events" class="button is-large is-dark">SE ALLE ARRANGEMENTER</g-link>
        </div>
    </div>
</template>
<static-query>
query Events {
  events: allSanityEvent(sortBy: "date", order: ASC, perPage: 2, page:1){
    edges{
      node {
        title
        date
        description
      }
    }
  }
}
</static-query>
<script>
import Event from '~/components/Event.vue';
export default {
   components: {
       Event
   } 
}
</script>
<style scoped>
.events-container{
    width: 100%;
    background-color: #389583;
    display: flex;
    justify-content: center;
    padding: 50px;
}
.events{
    min-width: 1024px;
}
.event-title{
    color: white;
    font-size: 48px;
    font-weight: 700;
    padding: 10px 0;
}
.button{
    width: 100%;
    font-weight: 700;
    margin: 10px 0;
}
.is-link {
    background-color: rgba(5, 56, 106, 0.8);
}

.is-link:hover {
    background-color: rgba(5, 56, 106, 1);
}
</style>