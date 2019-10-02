<template>
  <div class="tile is-parent is-6">
    <article class="tile is-child notification">
      <p class="tile-title">{{rentUnit.name}}</p>
      <p>{{rentUnit.price}},- {{rentUnit.priceDenomination}}</p>
      <p v-if="rentUnit.minPrice" class="tile-subtitle">Minstepris:</p>
      <p v-if="rentUnit.minPrice">{{rentUnit.minPrice}},- {{rentUnit.minPriceDenmonination}}</p>
      <p v-if="rentUnit.minPriceAlternative">{{rentUnit.minPriceAlternative}},- {{rentUnit.minPriceAlternativeDenomination}}</p>
      <span @click="moreInfoClicked()" class="more-info">Mer Info</span>
    </article>
  </div>
</template>
<script>
export default {
  props: ['rentUnit'],
  methods: {
      moreInfoClicked(){
          this.$emit('moreInfo');
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