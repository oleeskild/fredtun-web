<template>
  <Layout>
    <div class="leie-page">
      <section class="leie-hero">
        <h1>Utleie & Priser</h1>
        <p>Fredtun tilbyr overnatting og lokaler for grupper, arrangementer og pilegrimsvandrere.</p>
      </section>

      <section class="pricing-section">
        <div class="pricing-container">
          <div class="pricing-grid">
            <div class="pricing-cards">
              <div v-for="{node} in bigRentUnits" :key="node.id" class="pricing-card featured">
                <div class="card-header">
                  <h3>{{node.name}}</h3>
                </div>
                <div class="card-body">
                  <div class="price-main">
                    <span class="price">{{node.price}},-</span>
                    <span class="period">{{node.priceDenomination}}</span>
                  </div>
                  <div class="price-min">
                    <span class="label">Minstepris:</span>
                    <span class="value">{{node.minPrice}},- {{node.minPriceDenomination}}</span>
                  </div>
                  <div v-if="node.minPriceAlternative && node.minPriceAlternative.trim()" class="price-alt">
                    {{node.minPriceAlternative}},- {{node.minPriceAlternativeDenomination}}
                  </div>
                </div>
              </div>

              <div class="secondary-cards">
                <div v-for="{node} in smallRentUnits" :key="node.id" class="pricing-card">
                  <div class="card-header">
                    <h3>{{node.name}}</h3>
                  </div>
                  <div class="card-body">
                    <div v-if="getPrice(node)" class="price-main">
                      <span class="price">{{getPrice(node)}},-</span>
                      <span class="period">{{getPriceDenomination(node)}}</span>
                    </div>
                    <div v-if="node.minPrice" class="price-min">
                      <span class="label">Minstepris:</span>
                      <span class="value">{{node.minPrice}},- {{node.minPriceDenomination}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="info-sidebar">
              <div class="info-box">
                <h2>{{$page.priceInfo.title}}</h2>
                <div class="info-content">
                  <rich-content :blocks="$page.priceInfo._rawDescription" />
                </div>
              </div>

              <div class="contact-box">
                <h2>Ta kontakt angaende leie</h2>
                <p>Fyll ut skjemaet sa tar vi kontakt med deg.</p>
                <contact-form :showDatePicker="false"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="buildings-section">
        <div class="buildings-container">
          <div class="section-header">
            <span class="section-label">Fasiliteter</span>
            <h2 class="section-title">Om bygningene</h2>
            <p class="section-subtitle">Les mer om de ulike byggene og fasilitetene vi tilbyr</p>
          </div>
          <div class="buildings-grid">
            <div v-for="({node}, index) in allUnits" :key="node.id" class="building-card" :class="{'building-card-alt': index % 2 === 1}">
              <div class="building-number">{{ String(index + 1).padStart(2, '0') }}</div>
              <div class="building-info">
                <h3>{{node.name}}</h3>
                <div class="building-content">
                  <rich-content-row :blocks="node._rawDescription || []" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>
<page-query>
query {
   priceInfo: sanityAbout(id:"global-info-priser"){
    title
    _rawDescription(resolveReferences: {maxDepth: 2})
  }
  units: allSanityRentunit(sortBy: "order", order: ASC){
    edges{
      node{
        id
        name
        price
        priceDenomination
        minPrice
        minPriceDenomination
        minPriceAlternative
        minPriceAlternativeDenomination
        _rawDescription
        isprimary
      }
    }
  }
}
</page-query>
<script>
import PageHeader from "~/components/PageHeader.vue";
import ContactForm from "~/components/ContactForm.vue";
import RentTile from "~/components/RentTile.vue";
export default {
  components: {
    PageHeader,
    ContactForm,
    RentTile
  },
  data() {
    return {
      openModal: false,
      selectedNode: {},
      fallbackPrices: {
        'Aktivitetshus': { price: 250, denomination: 'pr person for overnatting' },
        'Pilegrimsherberge': { price: 250, denomination: 'pr person for overnatting' }
      }
    };
  },
  computed: {
    allUnits:function(){
      return this.$page.units.edges;
    },
    smallRentUnits: function(){
      return this.$page.units.edges.filter(x=> !x.node.isprimary);
    },
    bigRentUnits: function(){
      return this.$page.units.edges.filter(x=> x.node.isprimary);
    }
  },
  methods: {
    selectNode(node){
      this.selectedNode = {};
      this.selectedNode = node;
    },
    getPrice(node) {
      if (node.price) return node.price;
      const fallback = this.fallbackPrices[node.name];
      return fallback ? fallback.price : null;
    },
    getPriceDenomination(node) {
      if (node.price && node.priceDenomination) return node.priceDenomination;
      const fallback = this.fallbackPrices[node.name];
      return fallback ? fallback.denomination : '';
    }
  }
};
</script>
<style scoped>
.leie-page {
  background: #f8faf9;
}

.leie-hero {
  background: linear-gradient(135deg, #2D5A4A 0%, #3D6A5A 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.leie-hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white !important;
}

.leie-hero p {
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.pricing-section {
  padding: 4rem 2rem;
}

.pricing-container {
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
}

.pricing-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.pricing-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.pricing-card.featured {
  border: 2px solid #2D5A4A;
}

.pricing-card.featured .card-header {
  background: linear-gradient(135deg, #2D5A4A 0%, #3D6A5A 100%);
  color: white;
}

.card-header {
  padding: 1.25rem 1.5rem;
  background: #f8f8f8;
}

.card-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.card-body {
  padding: 1.5rem;
}

.price-main {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2D5A4A;
}

.period {
  color: #666;
  font-size: 1rem;
}

.price-min {
  display: flex;
  gap: 0.5rem;
  color: #666;
  font-size: 0.95rem;
}

.price-min .label {
  font-weight: 500;
}

.price-alt {
  margin-top: 0.5rem;
  color: #666;
  font-size: 0.9rem;
}

.secondary-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.secondary-cards .pricing-card .card-header {
  padding: 1rem 1.25rem;
}

.secondary-cards .pricing-card .card-header h3 {
  font-size: 1.1rem;
}

.secondary-cards .pricing-card .card-body {
  padding: 1.25rem;
}

.secondary-cards .price {
  font-size: 1.75rem;
}

.info-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-box,
.contact-box {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.info-box h2,
.contact-box h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.info-content {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.7;
}

.contact-box p {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.buildings-section {
  background: linear-gradient(180deg, #f8faf9 0%, #fff 100%);
  padding: 5rem 2rem;
}

.buildings-container {
  max-width: 1000px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-label {
  display: inline-block;
  background: rgba(45, 90, 74, 0.1);
  color: #2D5A4A;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
}

.section-subtitle {
  color: #666;
  font-size: 1.1rem;
  max-width: 500px;
  margin: 0 auto;
}

.buildings-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.building-card {
  background: white;
  padding: 2rem 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  transition: transform 0.2s, box-shadow 0.2s;
}

.building-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.building-card-alt {
  background: linear-gradient(135deg, #f8faf9 0%, #fff 100%);
}

.building-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2D5A4A;
  opacity: 0.2;
  line-height: 1;
  flex-shrink: 0;
  min-width: 60px;
}

.building-info {
  flex: 1;
}

.building-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #2D5A4A;
  display: inline-block;
}

.building-content {
  color: #555;
  line-height: 1.8;
  font-size: 0.95rem;
}

/* Override rich content row styles for building cards */
.building-content ::v-deep .content-row > div {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 1rem !important;
  align-items: start;
}

.building-content ::v-deep .content-row > div > p {
  grid-column: 1 / -1;
  grid-row: auto;
  padding-top: 0;
  margin-bottom: 0.5rem;
}

/* Create uniform image styling */
.building-content ::v-deep .row-image {
  margin: 0 !important;
  grid-area: auto !important;
}

.building-content ::v-deep .row-image > img {
  width: 100% !important;
  min-width: 0 !important;
  height: 160px !important;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.building-content ::v-deep .row-image > img:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

@media (max-width: 900px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .secondary-cards {
    grid-template-columns: 1fr;
  }

  .leie-hero h1 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .building-card {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }

  .building-number {
    font-size: 1.5rem;
    min-width: auto;
  }

  .section-title {
    font-size: 2rem;
  }

  .building-content ::v-deep .content-row > div {
    grid-template-columns: 1fr 1fr !important;
  }

  .building-content ::v-deep .row-image > img {
    height: 140px !important;
  }
}

@media (max-width: 600px) {
  .pricing-section,
  .buildings-section {
    padding: 2rem 1rem;
  }

  .info-box,
  .contact-box {
    padding: 1.5rem;
  }

  .building-card {
    padding: 1.25rem;
  }

  .building-card h3 {
    font-size: 1.2rem;
  }

  .price {
    font-size: 2rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .building-content ::v-deep .content-row > div {
    grid-template-columns: 1fr 1fr !important;
  }

  .building-content ::v-deep .row-image > img {
    height: 120px !important;
  }
}
</style>

<style>
/* Global styles for building content images (not scoped) */
.building-content .content-row > div {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 1rem !important;
}

.building-content .content-row > div > p {
  grid-column: 1 / -1 !important;
  padding-top: 0 !important;
}

/* Hide empty paragraphs that break the grid */
.building-content .content-row > div > p:empty {
  display: none !important;
}

.building-content .row-image {
  margin: 0 !important;
  grid-area: auto !important;
}

.building-content .row-image > img {
  width: 100% !important;
  min-width: 0 !important;
  height: 160px !important;
  object-fit: cover !important;
  border-radius: 10px !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
}

.building-content .row-image > img:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

@media (max-width: 768px) {
  .building-content .content-row > div {
    grid-template-columns: 1fr 1fr !important;
  }

  .building-content .row-image > img {
    height: 140px !important;
  }
}

@media (max-width: 500px) {
  .building-content .content-row > div {
    grid-template-columns: 1fr !important;
  }

  .building-content .row-image > img {
    height: 180px !important;
  }
}
</style>
