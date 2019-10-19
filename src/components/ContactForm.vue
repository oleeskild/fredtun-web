<template>
  <div class="form">
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      v-on:submit.prevent="handleSubmit"
      data-netlify-honeypot="bot-field"
    >
      <p hidden>
        <label>
          Don’t fill this out:
          <input name="bot-field" />
        </label>
      </p>
      <input class="input" name="name" type="text" placeholder="Navn" v-model="formData.name" />
      <input class="input" name="email" type="email" placeholder="Din epost" v-model="formData.email" />
      <textarea class="textarea" name="message" placeholder="Melding" v-model="formData.message"></textarea>
      <button type="submit" class="button is-medium is-link">SEND MELDING</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {}
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
        .then(() => {alert("sendt inn"); this.formData = {}})
        .catch(error => alert(error));
    }
  }
};
</script>
<style scoped>
.form {
  position: relative;
  z-index: 2;
}
.input,
.textarea {
  margin: 10px 0;
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