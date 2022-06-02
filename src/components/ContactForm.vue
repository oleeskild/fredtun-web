<template>
  <div class="form">
    <form v-if="!submitted" name="contact" method="POST" data-netlify="true" v-on:submit.prevent="handleSubmit"
      data-netlify-honeypot="bot-field">
      <p hidden>
        <label>
          Don’t fill this out:
          <input name="bot-field" />
        </label>
      </p>
      <label for="name">Navn</label>
      <input class="input" name="name" type="text" placeholder="Navn" v-model="formData.name" />
      <label for="email">Din epost</label>
      <input class="input" name="email" type="email" placeholder="Din epost" v-model="formData.email" />
      <label for="message">Melding</label>
      <textarea class="textarea" name="message" placeholder="Melding" v-model="formData.message"></textarea>
      <ClientOnly>
        <div v-if="showDatePicker">
          <v-date-picker locale="no" v-model="formData.range" mode="date" is-range :disabled-dates="bookedDates">
            <template v-slot="{ inputValue, inputEvents }">
              <div class="dates">
                <div class="date-input">
                  <label for="fromDate">Fra dato</label>
                  <input name="fromDate" id="fromDate" class="input" :value="inputValue.start"
                    v-on="inputEvents.start" />
                </div>
                <font-awesome style="margin-top:20px" :icon="['fas', 'arrow-right']" />
                <div class="date-input">
                  <label for="toDate">Til dato</label>
                  <input name="toDate" id="toDate" class="input" :value="inputValue.end" v-on="inputEvents.end" />
                </div>
              </div>
            </template>
          </v-date-picker>
          <span class="explanation">Datoene som er grået ut er ikke tilgjengelige for leie og kan derfor ikke
            velges.</span>
        </div>
      </ClientOnly>
      <button type="submit" class="button is-medium is-dark">SEND MELDING</button>
    </form>
    <div v-else style="display: flex; flex-direction: column; align-items: center">
      <span style="font-size: 150px; margin: 50px 0" class="icon has-text-white">
        <font-awesome :icon="['fas', 'envelope']" />
      </span>
      <h2 style="font-size: 20px; color:black;">Takk, vi har motatt meldingen din!</h2>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    VDatePicker: () =>
      import('v-calendar')
        .then(m => m.DatePicker).catch()
  },
  data() {
    return {
      formData: {},
      submitted: false
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => { this.submitted = true; this.formData = {} })
        .catch(error => alert(error));
    }
  },
  props: ["showDatePicker"],
  computed: {
    bookedDates() {
      if (!this.showDatePicker) {
        return [];
      }

      const dates = this.$page.bookedDates.edges.map(e => ({ from: e.node.fra, to: e.node.til }));
      console.log(dates);
      const allDatesList = [];
      for (let i = 0; i < dates.length; i++) {
        let dateToAdd = new Date(dates[i].from);
        if (!dates[i].to) {
          allDatesList.push(dateToAdd);
        } else {

          const toDate = new Date(dates[i].to);
          while (dateToAdd <= toDate) {
            allDatesList.push(new Date(dateToAdd));
            dateToAdd.setDate(dateToAdd.getDate() + 1);
          }

        }
      }

      return allDatesList;
    }
  }
};
</script>
<style scoped>
.dates {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.date-input {
  width: 45%;
}

.form {
  position: relative;
  z-index: 2;
}

.input,
.textarea {
  margin: 10px 0;
}

.explanation {
  font-size: 16px;
}

.button {
  margin: 20px 0;
  width: 100%;
}

.is-link {
  background-color: rgba(5, 56, 106, 0.8);
}

.is-link:hover {
  background-color: rgba(5, 56, 106, 1);
}

.subtitle {
  position: relative;
  z-index: 2;
  color: rgb(229, 240, 221);
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 25px;
}
</style>
