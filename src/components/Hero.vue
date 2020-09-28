<template>
  <section class="hero is-primary">
      <div class="columns">
        <div class="column is-two-fifths text-container">
            <div class="text">
          <h1 class="subtitle">Fredtun Leirsted</h1>
          <p>
            Fredtun leirsted ligger et par km nord for Skudeneshavn
            på østsiden av Karmøy. Stedet er omkranset av fjell og vender mot
            sjøen ved sør-enden av Karmsundet. Man kommer inn på området gjennom et
            naturlig smalt pass mellom de to fjellrggene som strekker seg ned
            mot sjøen på hver side av området. Innenfor er det opparbeidet med
            fotballbane, lekeplass, plener og grusveier mellom bygningene.
          </p>
          </div>
          <a href="https://www.facebook.com/FredtunSkudeneshavn/" target="_blank" class="button is-large is-link">FØLG OSS PÅ FACEBOOK</a>
          <Bezier class="curve" />
        </div>
        <div class="column cover-image" >
        </div>
      </div>
  </section>
</template>
<script>
import Bezier from '~/components/Bezier.vue';
export default {
    components: {
        Bezier
    }
    
}
</script>
<style scoped>
.cover-image {
    background-image: url('https://res.cloudinary.com/dix4ngy25/image/upload/q_auto/v1569176653/k9ibuwgqxliidk9wu2ay.jpg');
    background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  min-height: 250px;
}
.is-primary {
    background-color: rgb(92, 219, 149);
}
.columns {
    height: 100%;
    margin: 0;
}
.text-container{
    padding: 3rem 1.5rem;
    position: relative;
}
.text, .button {
    z-index: 2;
    position: relative;
}
.button{
    margin-top: 15px;
}
.hero{
    min-height: 300px;
}
.curve {
    position: absolute;
    right: -200px;
    top: 0;
    height: 100%;
    z-index: 1;
}

.subtitle {
    font-weight: 700;
}
.is-link {
    background-color: rgba(5, 56, 106, 0.8);
}
.is-link:hover {
    background-color: rgba(5, 56, 106, 1);
}

p {
    font-size: 20px;
    padding-bottom: 20px;
}

@media (max-width: 760px){
    .columns {
        display: flex;
        flex-direction: column-reverse;
    }
    .curve {
        display: none;
    }
}
</style>