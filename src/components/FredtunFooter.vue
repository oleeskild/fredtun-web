<template>
  <div class>
    <div class="columns">
      <div class="column contact-form">
        <div class="lightgreen"></div>
        
        <div style="display:flex; flex-direction: column; align-items: center">
        <h2 class="subtitle">Ta kontakt</h2>
        <div style="margin:0 10px;">
        <contact-form />
        </div>
        </div>

        <Bezier :color="'#8ee4af'" class="curve" />
      </div>
      <div class="column address">
        <div>
          <h2 class="subtitle">Besøksadresse</h2>
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
  justify-content: center;
}
.contact-form {
  position: relative;
  display: flex; 
  flex-direction: column; 
  align-items: center;
}
.address {
  background-color: #389583;
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
}
.text {
  font-size: 18px;
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

@media (max-width: 600px){
   .subtitle {
       margin-left: 10px;
   } 
}

@media (max-width: 1100px){

   .curve{
       display: none;
   } 
    .lightgreen {
        width: 100%;
    }
}
</style>