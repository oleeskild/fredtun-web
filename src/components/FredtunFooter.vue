<template>
  <div class>
    <div class="columns">
      <div class="column contact-form">
        <div class="lightgreen"></div>
        <div class="footer-container">
          <h2 class="footer-header subtitle"> <img style="height: 75px; margin-right: 12px" src="/logofred.png" /> Fredtun</h2>
          <div class="footer-links">
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
          </div>
          <div class="support">
            <div>Ønsker du å støtte Fredtun? </div>
            <h3 class="vipps">Vipps: 565166</h3>
            <h3 class="account">Kontonummer: 3361.23.85160 </h3>
            <img class="mobile-only" src="https://res.cloudinary.com/dix4ngy25/image/upload/v1696341681/image_y2khig.png" style="transform: translate(-4%, 15px);">
          </div>
          <div class="copyright" style="z-index:10; margin-top: auto; color: black">© 2023 Fredtun </div>
        </div>
        
          

        <Bezier :color="'#8ee4af'" class="curve" />
      </div>
      <div class="column address">
        <div>
          <h2 class="subtitle address-title">Besøksadresse</h2>
          <div class="text">Austre Karmøyveg 820, Karmøy</div>
          <Map />
          <img src="https://res.cloudinary.com/dix4ngy25/image/upload/v1696341681/image_y2khig.png" style="transform: translate(-16%, 15px);">
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
.footer-container {
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header"
    "links links"
    "vipps ."
    "footer footer";
  z-index: 10; 
  margin-right: 150px;
}

.footer-header{
  grid-area: header;
  font-family: Prociono, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  align-items: center;
}

.footer-links {
  display: flex; 
  flex-direction: column; 
  grid-area: links;
}
.support{
  grid-area: vipps;
  font-size: 24px;
  max-width: 500px;
  color:white;
  margin: 10px 0 25px 0;
  padding: 10px;
  text-align:start;
  /* border-bottom: 6px solid #389583; */
  /* border-top: 6px solid #389583; */
  /* border-left: 6px solid #389583; */
    border: 2px solid rgba(56,149,131, 0.3);
    border-radius: 10px;
  
 
}
.support>h3{
  font-size: 32px;
  text-align: start;
}

.support>.vipps{
  font-weight: 600;
}

.support>.account{
  font-weight: 600;
}


.copyright {
  grid-area: footer;
}

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
  right: -120px;
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
  padding: 10px 0;
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

.mobile-only{
  display: none;
}

@media (max-width: 600px){
  .subtitle {
       margin-left: 10px;
   } 
  .footer-container {
    margin: 0;
    grid-template-areas: 
      "header header"
      "links links"
      "vipps vipps"
      "footer footer";
  }
  .vipps {
    margin: auto;
  }
}




@media (max-width: 1400px){
  .address {
    display: none;
  }

  .mobile-only {
    display: block;
  }
  
  .column {
    justify-content: flex-start;
  }
  .lightgreen{
    display:none;
  }
  .curve {
    display: none;
  }
  .vipps {
    border-color: rgb(142, 228, 175);
  }

}

@media (max-width: 1000px){
  
  
}

@media (max-width: 1100px){
    .lightgreen {
        width: 100%;
    }
    
}
</style>
