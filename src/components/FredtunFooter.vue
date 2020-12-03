<template>
  <div class>
    <div class="columns">
      <div class="column contact-form">
        <div class="lightgreen"></div>
        <div style="display: flex; flex-direction: column; z-index: 10; margin-right: 150px">
          <h2 class="subtitle">Fredtun Leirsted</h2>
          <div class="footer-link-container">
            <g-link class="footer-link" to="/kontakt">Kontakt Oss</g-link>
          </div>
          <div class="footer-link-container">
            <g-link class="footer-link" to="/">Hjem</g-link>
          </div>
          <div class="footer-link-container">
            <g-link class="footer-link" to="/leie">Utleie</g-link>
          </div>
          <div class="footer-link-container">
            <g-link class="footer-link" to="/om-oss">Om Fredtun</g-link>
          </div>
           <div class="footer-link-container">
            <g-link class="footer-link" to="/blogg">Blogg</g-link>
          </div>
          <div style="z-index:10; margin-top: auto; color: black">© 2020 Fredtun </div>
        </div>
          

        <Bezier :color="'#8ee4af'" class="curve" />
      </div>
      <div class="column address">
        <div>
          <h2 class="subtitle address-title">Besøksadresse</h2>
          <div class="text">Austre Karmøyveg 820, Karmøy</div>
          <Map />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bezier from "~/components/Bezier.vue";
import Map from "~/components/Map.vue";
import ContactForm from "~/components/ContactForm.vue";
export default {
  components: {
    Bezier,
    Map,
    ContactForm
  }
};
</script>
<style scoped>
.columns {
  min-height: 500px;
  color: rgb(229, 240, 221);
  background-color: #389583;
}
.column {
  display: flex;
  justify-content: flex-end;
  padding-left: 30px;
}
.contact-form {
  position: relative;
 
}
.address {
  background-color: #389583;
  justify-content: flex-start;
  margin-left: 250px;
}

.address-title{
  margin-bottom: 0 !important;
}
.curve {
  position: absolute;
  right: -50px;
  top: 0;
  height: 100%;
  z-index: 1;
}
.lightgreen {
  position: absolute;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  width: 80%;
  background-color: #8ee4af;
}
.subtitle {
  position: relative;
  z-index: 2;
  color: white;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 25px;
  padding:0;
}
.text {
  font-size: 24px;
  color:white;
  padding-bottom: 10px;
}
.form{
    position: relative;
    z-index: 2;
}
.input, .textarea {
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

.footer-link {
  color: white;
  font-size: 24px;
  padding: 5px;
  border-radius: 10px;
}

.footer-link-container {
  margin-bottom: 10px;
}


.footer-link:hover {
  background-color: rgba(0,0,0,0.1);
}

@media (max-width: 600px){
   .subtitle {
       margin-left: 10px;
   } 
}

@media (max-width: 1400px){
  .address {
    display: none;
  }
  .column {
    justify-content: flex-start;
  }
  .lightgreen{
    display:none;
  }

}

@media (max-width: 1000px){
  .curve {
    display: none;
  }
}

@media (max-width: 1100px){
    .lightgreen {
        width: 100%;
    }
}
</style>