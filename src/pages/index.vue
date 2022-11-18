<template>
<div>
  <hero/>
  <div style="display: flex; justify-content: center;">
    <navigation />
  </div>
  <div style="display: flex; justify-content: center; font-size: 38px; padding-bottom: 38px;">
    <a href="https://fredtun.org/arrangement/julebord/3df2a4e6-b79b-4c0f-bdad-c15e6078f174/" target="_blank">Påmelding til Julebord 2022</a>
  </div>
  <events-container />
  <div style="margin: 100px 0; display: flex; justify-content: center;">
    <rent-info-box  />
  </div>
  <fredtun-footer/>
</div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Navigation from '~/components/Navigation.vue'
import LastBlogPost from '~/components/LastBlogPost.vue'
import EventsContainer from '~/components/EventsContainer.vue'
import RentInfoBox from '~/components/RentInfoBox.vue'
import FredtunFooter from '~/components/FredtunFooter.vue'

export default {
  name: "Fremside",
  components: {
    Hero,
    Navigation,
    EventsContainer,
    RentInfoBox,
    FredtunFooter,
    LastBlogPost
  },
  layout: 'blank'
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title, h1 {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.wrap{
  min-width: 1024px;
}
@media (max-width: 1080px){
  .wrap{
    min-width: 80%;
  }
}
</style>
