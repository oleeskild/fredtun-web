<template>
<div @click="select()">
  <div class="event-container">
    <div class="columns is-gapless">
      <div class="column is-one-fifth">
        <div class="calendar-day">
          <div class="day">{{day}}</div>
          <div class="month">{{month}}</div>
          <div class="year">{{year}}</div>
        </div>
      </div>
      <div class="column">
        <div class="event-description-container">
          <span class="event-time">{{time}}</span>
          <span class="event-description">{{event? event.title : 'Tittel'}}</span>
          <span @click="openModal = true" class="event-link">Les Mer</span>
        </div>
      </div>
    </div>
  </div>

    <div class="modal" :class="{'is-active': openModal}">
      <div @click="openModal = false" class="modal-background"></div>
       <div class="modal-content">
         <h2 class="modal-card-title">{{event? event.title : ''}}</h2>
        <rich-content :blocks="event ? event.description : ''" />
      </div>
      <button @click="openModal = false" class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openModal: false,
      months: [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAI',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OKT',
        'NOV',
        'DES'
      ]
    };
  },
  props: ['event'],
  computed: {
    eventDate: function(){
      return this.event ? new Date(this.event.date) : new Date();
    },
    day: function(){
      return this.eventDate.getDate();
    },
    month: function(){
      return this.months[this.eventDate.getMonth()];
    },
    time: function(){
      return `${this.eventDate.getHours()}:${this.eventDate.getMinutes().toString().padStart(2,0)}`
    },
    year: function(){
      return this.eventDate.getFullYear();
    }
  },
  methods: {
    select(){
      this.$emit('selected');
    }
  }
};
</script>
<style scoped>
.event-container {
  width: 100%;
  padding: 10px 0;
  font-size: 32px;
  font-weight: 700;
}
.calendar-day {
  display: flex;
  flex-direction: column;
  background-color: rgb(92, 219, 149);
  justify-content: center;
  height: 180px;
  /* color: #389583; */
}
.day {
  text-align: center;
}

.month {
  text-align: center;
}
.year {
  text-align: center;
  font-size: 0.6em;
}
.event-description-container {
  background-color: rgb(142, 228, 175);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.event-description {
  padding: 0px 15px;
  color: white;
  font-size: 42px;
}
.event-time {
  padding: 0 15px;
  color: white;
  font-size: 28px;
}
.event-link {
  padding-left: 15px;
  font-size: 20px;
  padding-bottom: 10px;
  text-decoration: underline;
  cursor: pointer;
}

.modal-content {
  background-color: white;
  padding: 40px 70px;
  border-radius: 20px;
}
</style>