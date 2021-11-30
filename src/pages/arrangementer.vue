<template>
  <Layout>
    <page-header :title="'Kommende arrangement'" />
    <div class="columns wrap">
      <div class="column">
        <div v-if="allEvents.length">
          <event @selected="selectEvent(edge.node)" :key="edge.node.id" v-for="edge in allEvents" :event="edge.node" />
        </div>
        <div v-else>
            <no-event />
        </div>
      </div>
      <!-- <div class="column is-one-third calendar"> -->
        <!--input
          type="date"
          ref="calendarTrigger"
          data-display-mode="inline"
          data-today-label="Idag"
          data-show-clear-button="false"
        /-->
      <!-- </div> -->
    </div>
  </Layout>
</template>
<page-query>
query Events {
  events: allSanityEvent(sortBy: "date", order: ASC){
    edges{
      node {
        id
        title
        date
        description
      }
    }
  }
}
</page-query>
<script>
import Event from "~/components/Event.vue";
import NoEvent from '~/components/NoEvent.vue';
import PageHeader from "~/components/PageHeader.vue";
import "bulma-calendar/dist/css/bulma-calendar.min.css";
//import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js';
export default {
  metaInfo: { title: "Arrangementer" },
  components: {
    Event,
    NoEvent,
    PageHeader
  },
    data() {
    return {
      date: new Date(),
      selectedEvent: {}
    };
  },
  mounted() {
    //const calendar = bulmaCalendar.attach(this.$refs.calendarTrigger, {
     // startDate: this.date,
     // lang: "nb"
    //})[0];
    //calendar.on("select", e => {
     //   this.date = e.data.startDate|| null; console.log(e)
    //});
  },
  computed: {
    niceDate() {
      if (this.date) {
        return `${this.date.getDate()}.${this.date.getMonth()+1}.${this.date.getFullYear()}`
      }
    },
    allEvents(){
      var date = new Date();
      date.setDate(date.getDate() -1);

      return this.$page.events.edges.filter(e=> e.node.date > date.toISOString())
    }
  },
  methods: {
    selectEvent(event){
      this.selectedEvent = event;
    }
  }
};
</script>
<style scoped>
.columns {
  padding: 10px;
  max-width: 1200px;
  margin: auto;
}
@media (max-width: 770px){
    .calendar {
        display: none;
    }
}

</style>
