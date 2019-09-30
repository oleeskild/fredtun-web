<template>
    <div class="form">
          <input class="input" type="text" placeholder="Navn" />
          <input class="input" type="text" placeholder="Din epost" />
          <textarea class="textarea" placeholder="Melding"></textarea>
          <button class="button is-medium is-link">SEND MELDING</button>

        </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
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
.subtitle {
  position: relative;
  z-index: 2;
  color: rgb(229, 240, 221);
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 25px;
}
</style>