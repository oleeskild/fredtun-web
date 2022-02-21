<template>
  <Layout>
    <page-header :title="'Utleie & Priser'" />
    <div class="columns">
      <div class="column is-two-thirds">
        <div class="tiles">
          <div class="tile is-ancestor">
            <div class="tile is-vertical">
              <div class="tile is-parent is-12" v-for="{node} in bigRentUnits" :key="node.id">
                <article class="tile is-child notification is-brand">
                  <p class="tile-title-big">{{node.name}}</p>
                  <p>{{node.price}},- {{node.priceDenomination}}</p>
                  <p class="tile-subtitle">Minstepris:</p>
                  <p>{{node.minPrice}},- {{node.minPriceDenomination}}</p>
                  <p v-if="node.minPriceAlternative && node.minPriceAlternative.trim()">{{node.minPriceAlternative}},- {{node.minPriceAlternativeDenomination}}</p>
                  <!-- <span @click="selectNode(node); openModal = true" class="more-info">Mer Info</span> -->
                </article>
              </div>
              <div class="tile" v-for="index in smallRentUnits.length/2" :key="index">
                <rent-tile @moreInfoClicked="selectNode($event); openModal = true" :rentUnit="smallRentUnits[(index-1)*2].node"/>
                <rent-tile @moreInfoClicked="selectNode($event); openModal = true" :rentUnit="smallRentUnits[((index-1)*2)+1].node"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-center">
        <h2 class="subtitle">{{$page.priceInfo.title}}</h2>
          <!-- {{$page.priceInfo.description}} -->
          <div style="max-width: 400px;">
            <rich-content :blocks="$page.priceInfo._rawDescription" />
          </div>
        <h2 class="subtitle" style="margin-top: 40px;">Ta kontakt</h2>
        <contact-form />
      </div>
    </div>

    <h2 class="building-title">Om bygningene</h2>
    <div v-for="{node} in allUnits" :key="node.id" class="unit-summary">
      <h3 class="summary-title">{{node.name}}</h3>
      <rich-content-row :blocks="node._rawDescription || []" />
    </div>

    <!-- <div class="modal" :class="{'is-active': openModal}">
      <div @click="openModal = false; selectNode({});" class="modal-background"></div>
      <div class="modal-content">
         <h2 class="modal-card-title">{{selectedNode.name}}</h2>
        <rich-content :blocks="selectedNode._rawDescription || []" />
      </div>
      <button @click="openModal = false; selectNode({});" class="modal-close is-large" aria-label="close"></button>
    </div> -->
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
      selectedNode: {}
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
    }
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
  max-width: 1200px;
  margin: auto;
  padding-bottom: 50px;
}
.column.is-two-thirds{
  padding-top: 0;
}
.column.is-center{
  background: #f5f5f5;
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
.modal-content {
  background-color: white;
  padding: 40px 70px;
  border-radius: 20px;
}
.modal-card-title{
  padding-bottom: 10px;
}
.summary-title {
    color: #363636;
    flex-grow: 1;
    flex-shrink: 0;
    font-size: 2rem;
    line-height: 1;
    padding-bottom: 10px;
}

.building-title {
    color: #363636;
    flex-grow: 1;
    flex-shrink: 0;
    font-size: 3rem;
    line-height: 1;
    margin:auto;
    text-align:center;
    padding-bottom: 40px;
}

.unit-summary {
  max-width: 900px; 
  margin:auto; 
  padding: 20px
}

.unit-summary:nth-child(2n) {
  background-color:white;
}
.unit-summary:nth-child(2n+1) {
  border: #5bdb955c 6px solid
}
.subtitle{
  color: #4a4a4a;
  font-weight: normal;
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
  .unit-summary {
    margin:10px; 
    padding: 15px
  }
}
@media (max-width: 770px) {
   .tile-title {
  font-size: 32px;
} 
}
</style>
