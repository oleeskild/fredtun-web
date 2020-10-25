<template>
  <div class="banner">
    <g-link to="/">
      <div style="display: flex; align-items: center">
        <h2 class="subtitle">Fredtun Leirsted</h2>
      </div>
    </g-link>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style scoped>
.banner {
  min-height: 20px;
  background-color: rgb(92, 219, 149);
}
.subtitle {
  padding: 20px 0 2px 5px;
  margin-left: 10px;
  margin-bottom: 15px;
  color: black;
  /* border-bottom: solid 2px black; */
  font-weight: 600;
}
</style>