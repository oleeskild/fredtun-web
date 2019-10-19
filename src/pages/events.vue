<template>
  <Layout>
    <page-header :title="'Arrangementer'" :subtitle="`Fra og med ${niceDate}`" />
    <div class="columns wrap">
      <div class="column">
        <event @selected="selectEvent(edge.node)" :key="edge.node.id" v-for="edge in allEvents" :event="edge.node" />
      </div>
      <div class="column is-one-third calendar">
        <!-- <input
          type="date"
          ref="calendarTrigger"
          data-display-mode="inline"
          data-today-label="Idag"
          data-show-clear-button="false"
        /> -->
      </div>
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
import PageHeader from "~/components/PageHeader.vue";
import "bulma-calendar/dist/css/bulma-calendar.min.css";
let bulmaCalendar;
export default {
  components: {
    Event,
    PageHeader
  },
  data() {
    return {
      date: new Date(),
      selectedEvent: {}
    };
  },
  mounted() {
    bulmaCalendar = require('bulma-calendar');
    const calendar = bulmaCalendar.attach(this.$refs.calendarTrigger, {
      startDate: this.date
    })[0];
    calendar.on("select", e => {
        this.date = e.data.startDate|| null; console.log(e)
    });
  },
  computed: {
    niceDate() {
      if (this.date) {
        return this.date.toLocaleDateString();
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
  margin: 10px;
}
@media (max-width: 770px){
    .calendar {
        display: none;
    }
}

</style>