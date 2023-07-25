<template>
  <Layout>
    <page-header :title="'Kommende arrangement'" />
    <div class="columns wrap">
      <div class="column">
        <div>
          Vi publiserer alle arrangementer på vår Facebook side
        </div>
        <a
          href="https://www.facebook.com/FredtunSkudeneshavn/"
          target="_blank"
          class="button is-large is-link"
          >Følg oss på Facebook!</a
        > 
      </div>
    </div>
  </Layout>
</template>
<script>
import PageHeader from "~/components/PageHeader.vue";
export default {
  metaInfo: { title: "Arrangementer" },
  components: {
    NoEvent,
    PageHeader
  },
    data() {
    return {
     
    };
  } 
};
</script>
<style scoped>
.columns {
  padding: 10px;
  max-width: 1200px;
  margin: auto;
}
@media (max-width: 770px){
    .calendar {
        display: none;
    }
}
.is-link {
  background-color: rgba(5, 56, 106, 0.8);
}
.is-link:hover {
  background-color: rgba(5, 56, 106, 1);
}

.button {
  margin-top: 15px;
  z-index: 2;
  position: relative;
}

</style>
