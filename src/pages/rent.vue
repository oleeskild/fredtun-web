<template>
  <Layout>
    <page-header :title="'Utleie & Priser'" />
    <div class="columns">
      <div class="column is-two-thirds">
        <div class="tiles">
          <div class="tile is-ancestor">
            <div class="tile is-vertical">
              <div class="tile is-parent is-12">
                <article class="tile is-child notification is-brand">
                  <p class="tile-title-big">Leie av hele Fredtun ved overnatting</p>
                  <p>175,- pr natt pr person</p>
                  <p class="tile-subtitle">Minstepris:</p>
                  <p>7000,- pr helg</p>
                  <p>3500,- pr helg for barneleirer</p>
                  <span @click="openModal = true" class="more-info">Mer Info</span>
                </article>
              </div>
              <div class="tile">
                <div class="tile is-parent is-6">
                  <article class="tile is-child notification">
                    <p class="tile-title">Hovedbygningen</p>
                    <p>3000,- pr døgn</p>
                    <span @click="openModal = true" class="more-info">Mer Info</span>
                  </article>
                </div>
                <div class="tile is-parent is-6">
                  <article class="tile is-child notification">
                    <p class="tile-title">Aktivitetshus</p>
                    <p>3000,- pr døgn</p>
                    <span @click="openModal = true" class="more-info">Mer Info</span>
                  </article>
                </div>
              </div>

              <div class="tile">
                <div class="tile is-parent is-6">
                  <article class="tile is-child notification">
                    <p class="tile-title">Internat (vest side)</p>
                    <p>175,- pr natt pr person</p>
                    <p class="tile-subtitle">Minstepris:</p>
                    <p>1500,- pr døgn</p>
                    <span @click="openModal = true" class="more-info">Mer Info</span>
                  </article>
                </div>
                <div class="tile is-parent is-6">
                  <article class="tile is-child notification">
                    <p class="tile-title">Internat (øst side)</p>
                    <p>175,- pr natt pr person</p>
                    <p class="tile-subtitle">Minstepris:</p>
                    <p>1500,- pr døgn</p>
                    <span @click="openModal = true" class="more-info">Mer Info</span>
                  </article>
                </div>
              </div>

              <div class="tile">
                <div class="tile is-parent is-6">
                  <article class="tile is-child notification">
                    <p class="tile-title">Kapell</p>
                    <p>1000,- pr døgn</p>
                    <span @click="openModal = true" class="more-info">Mer Info</span>
                  </article>
                </div>

                <div class="tile is-parent is-6">
                  <article class="tile is-child notification">
                    <p class="tile-title">Tillegg for vask</p>
                    <p>170,- pr time</p>
                    <span @click="openModal = true" class="more-info">Mer Info</span>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-center">
        <h2 class="subtitle">Info</h2>
        <ul>
          <li>Prisene er oppgitt i kroner.</li>
          <li>
            Disse prisene er fastsatt den 21.2.2019.
            Det er mulig at publisert prisliste ikke blir oppdatert øyeblikkelig ved endring av prisene.
            Da er det priser som oppgis ved forespørsel/bestilling som vil gjelde.
          </li>

          <li>Utleie forutsetter aksept av vilkårene som er satt for avtalen om bruk av stedet.</li>
        </ul>
        <h2 class="subtitle" style="margin-top: 40px;">Ta kontakt</h2>
        <contact-form />
      </div>
    </div>

    <div class="modal" :class="{'is-active': openModal}">
      <div @click="openModal = false" class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
         <p class="modal-card-title">Aktivitetshus</p>
      <button @click="openModal = false" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
        Huset er egnet for møte med servering i hovedetasjen samt spill aktiviteter i underetasjen.
        Det er ? rom på loftet med til sammen ? køyer som f.eks ledere kan benytte.
        <img src="http://fredtunleirsted.no/wp-content/uploads/2016/11/IMG_2705-768x432.jpg" />
        Møtesalen har ? bord og ? stoler slik at et selskap på ?? personer kan sitte ved småbord og få servering.
        Kjøkken kapasitet og dekketøy??
        Underetasjen har disse spillene:
        Pingpongbord m 2 køller og 1 ball, Biljardbord med 1 hel køe og 3 som er knekt, mangler ball nummer 8. 
        <img src="http://fredtunleirsted.no/wp-content/uploads/2016/11/IMG_2706-768x432.jpg" />
    </section>
      </div>
    </div>
  </Layout>
</template>
<script>
import PageHeader from "~/components/PageHeader.vue";
import ContactForm from "~/components/ContactForm.vue";
export default {
  components: {
    PageHeader,
    ContactForm
  },
  data() {
    return {
      openModal: false
    };
  }
};
</script>
<style scoped>
.is-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.is-vertical {
    width: 100%;
}
.columns {
  margin: 30px 20px;
}
.tile >p {
  text-align: center;
}
.tile-title {
  font-size: 32px;
  font-weight: 500;
  text-align: center;
}
.tile-title-big {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
}
.tile-subtitle {
  font-size: 28px;
  font-weight: 500;
}
.tile-subtitle-big {
  font-size: 32px;
  font-weight: 500;
}
.tile {
  font-size: 24px;
}
.notification {
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.is-brand {
  background-color: #5cdb95;
  color: #fff;
}
.more-info {
  font-size: 20px;
  cursor: pointer;
  padding-bottom: 3px;
  border-bottom: 2px solid;
}
.modal-card-body {
    border-radius: 0 0 10px 10px;
}
@media (max-width: 1020px) {
   .tile-title {
  font-size: 26px;
} 
}
@media (max-width: 900px) {
   .tile-title {
  font-size: 20px;
} 
}
@media (max-width: 770px) {
   .tile-title {
  font-size: 32px;
} 
}
</style>