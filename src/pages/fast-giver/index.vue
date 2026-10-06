<template>
  <Layout>
    <text-page
      label="Støtt Fredtun"
      title="Fredtun – Fast Giver"
    >
      <p class="lead">
        Bli fast giver og bidra til at Fredtun kan fortsette å være et godt sted
        for barn, ungdom, skoler, lag og foreninger.
      </p>
      <p>Du bestemmer selv beløpet. Du kan når som helst avslutte avtalen.</p>

      <div class="vipps-cta">
        <span class="vipps-button" aria-disabled="true">
          <img src="/vipps-logo.png" alt="" />
          Bli fast giver med Vipps
        </span>
        <p class="vipps-note">Kommer snart – vi holder på å sette opp løsningen hos Vipps.</p>
      </div>

      <h2>Avtalevilkår</h2>
      <p>
        Les våre <a href="/fast-giver/avtalevilkar">avtalevilkår for Fredtun – Fast Giver</a>.
      </p>

      <h2>Personvern</h2>
      <p>
        Les vår <a href="/personvernerklaering">personvernerklæring</a>.
      </p>
    </text-page>
  </Layout>
</template>
<script>
import TextPage from '~/components/TextPage.vue'
export default {
  metaInfo: {
    title: "Fast Giver"
  },
  components: {
    TextPage
  }
}
</script>
<style scoped>
.lead {
  font-size: 1.25rem !important;
  color: #1a1a1a !important;
}

.vipps-cta {
  margin: 2.5rem 0;
  padding: 2rem;
  background: #f8faf9;
  border-radius: 12px;
  text-align: center;
}

.vipps-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  background: #ff5b24;
  color: white;
  font-size: 1.05rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.55;
  cursor: not-allowed;
}

.vipps-button img {
  height: 24px;
  width: auto;
  filter: brightness(0) invert(1);
}

.vipps-note {
  margin: 1rem 0 0 !important;
  font-size: 0.95rem !important;
  color: #777 !important;
}
</style>
