<template>
  <Layout>
    <page-header :title="'Kontakt Oss'" />
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-square" style="background-image: url('https://scontent.fosl3-2.fna.fbcdn.net/v/t1.6435-9/37250876_422842198229006_3681242569917857792_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=343CPbOozxwAX_EaVtA&_nc_ht=scontent.fosl3-2.fna&oh=00_AfA5_-dq1mNJNLU8nCETyBMdlra22H32kgvuc9rBciUleg&oe=64EDFF43')">
              
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
        <div class="card">
          <div class="card-content">
            <h2 class="subtitle" style="text-align: center;">Send oss en melding</h2>
            <contact-form />
          </div>
        </div>
      </div>
      <div class="column">
        <h2 class="subtitle">Besøksadresse</h2>
        <Map />
      </div>
      <div class="column">
         <div class="card">
          <div class="card-content" style="text-align:center;">
        <h2 class="subtitle">Postadresse</h2>
        <ul>
          <li>Fredtun</li>
          <li>Postboks 23</li>
          <li>4297 Skudeneshavn</li>
        </ul>
            <font-awesome :icon="['fas', 'envelope']" class="envelope"/>
          </div>
         </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import PageHeader from "~/components/PageHeader.vue";
import ContactForm from "~/components/ContactForm.vue";
import Map from "~/components/Map.vue";
export default {
  metaInfo: { title: "Kontakt Oss" },
  components: {
    PageHeader,
    ContactForm,
    Map
  }
};
</script>
<style scoped>
.columns {
  margin: auto;
  max-width: 1200px;
}
.content{
  padding-left:0;
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
    font-size: 42px;
}
.card {
  width: 100%;
  height: 100%;
  border: #5bdb955c 6px solid
}

.card-content {
  max-width: 400px;
  margin: auto;
}

.envelope {
  margin-top: 30px;
  font-size: 128px;
}

li {
  font-size: 24px;
  text-align: center;
}
@media (max-width: 900px){
    .subtitle{
        font-size: 32px;
    }
}
</style>
