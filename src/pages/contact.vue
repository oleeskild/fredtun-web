<template>
  <Layout>
    <page-header :title="'Kontakt Oss'" />
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-square" style="background-image: url('https://www.skudenesnytt.no/wp-content/uploads/2017/12/GeirSommerfeldt.jpg')">
              
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Geir Sofus Sommerfeldt</p>
                <p class="subtitle is-6">Daglig leder</p>
              </div>
            </div>

            <div class="content">
              959 73 600
              <br />geir@sommerfeldt.no
            </div>
          </div>
        </div>
      </div>

      <div class="column is-two-thirds">
        <img
          src="https://res.cloudinary.com/dix4ngy25/image/upload/q_auto:eco/v1569176654/nekd5ypuajmdtq2se4jr.jpg"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h2 class="subtitle">Send oss en melding</h2>
        <contact-form />
      </div>
      <div class="column">
        <h2 class="subtitle">Besøksadresse</h2>
        <Map />
      </div>
      <div class="column">
        <h2 class="subtitle">Postadresse</h2>
        <ul>
          <li>Fredtun Leirsted</li>
          <li>Postboks 23</li>
          <li>4297 Skudeneshavn</li>
        </ul>
      </div>
    </div>
  </Layout>
</template>
<script>
import PageHeader from "~/components/PageHeader.vue";
import ContactForm from "~/components/ContactForm.vue";
import Map from "~/components/Map.vue";
export default {
  metaInfo: { title: "Kontakt Oss | Fredtun" },
  components: {
    PageHeader,
    ContactForm,
    Map
  }
};
</script>
<style scoped>
.columns {
  margin: 20px;
}
.header {
  font-size: 28px;
}
.address {
  display: flex;
  justify-content: center;
}
.column {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.image {
 background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
.subtitle {
    text-align: center;
}
@media (max-width: 900px){
    .subtitle{
        font-size: 32px;
    }
}
</style>