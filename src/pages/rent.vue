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
                  <p>{{node.minPriceAlternative}},- {{node.minPriceAlternativeDenomination}}</p>
                  <span @click="selectedNode = node; openModal = true" class="more-info">Mer Info</span>
                </article>
              </div>
              <div class="tile" v-for="index in smallRentUnits.length/2" :key="index">
                <rent-tile @moreInfo="openModal = true" @moreInfoClicked="selectNode($event)" :rentUnit="smallRentUnits[(index-1)*2].node"/>
                <rent-tile @moreInfo="openModal = true" @moreInfoClicked="selectNode($event)" :rentUnit="smallRentUnits[((index-1)*2)+1].node"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-center">
        <h2 class="subtitle">{{$page.priceInfo.title}}</h2>
          <!-- {{$page.priceInfo.description}} -->
          <rich-content :blocks="$page.priceInfo._rawDescription" />
        <h2 class="subtitle" style="margin-top: 40px;">Ta kontakt</h2>
        <contact-form />
      </div>
    </div>

    <div class="modal" :class="{'is-active': openModal}">
      <div @click="openModal = false" class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
         <p class="modal-card-title">{{selectedNode.name}}</p>
      <button @click="openModal = false" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
       <rich-content :blocks="selectedNode._rawDescription || []" />
    </section>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
   priceInfo: sanityAbout(id:"global-info-priser"){
    title
    _rawDescription
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
      this.openModal = true;
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