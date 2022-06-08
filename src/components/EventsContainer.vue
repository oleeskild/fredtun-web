<template>
    <div class="events-container">
        <div class="wrap">
            <h2 class="event-title">Kommende Arrangement</h2>
            <div v-if="topEvents.length">
            <event  :key="edge.node.id" v-for="edge in topEvents" :event="edge.node" />
            </div>
            <div v-else>
                <no-event />
            </div>
            <g-link to="/arrangementer" class="button is-large is-dark">SE ALLE ARRANGEMENTER</g-link>
        </div>
    </div>
</template>
<static-query>
query Events {
  events: allSanityEvent(sortBy: "date", order: ASC, perPage: 10, page:1){
    edges{
      node {
        title
        date
        path
        _rawDescription(resolveReferences: {maxDepth: 2})
      }
    }
  }
}
</static-query>
<script>
import Event from '~/components/Event.vue';
import NoEvent from '~/components/NoEvent.vue';
export default {
    data(){
        return {
        }
    },
   components: {
       Event,
       NoEvent
   },
   computed: {
       allFutureEvents(){
            var date = new Date();
            date.setDate(date.getDate() -1);

            let eventsAfterToday = this.$static.events.edges.filter(e=> e.node.date > date.toISOString());
            return eventsAfterToday;
        },
        topEvents(){
            let all = this.allFutureEvents;
            if(all.length >= 0 && all.length <=2){
                return all;
            }
            return [all[0], all[1]]
        }
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
    text-align: center;
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

@media (max-width: 760px){
    .button {
        font-size: 20px;
    }
    .event-title{
        font-size: 36px;
    }
}
</style>