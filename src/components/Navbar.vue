<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
      <g-link to="/" class="navbar-item">
        Fredtun Leirsted
      </g-link>
    <a role="button" class="navbar-burger burger" @click="navbarToggled = !navbarToggled" aria-label="menu" aria-expanded="false" :class="{'is-active': navbarToggled}" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': navbarToggled}">
    <div class="navbar-start">
      <g-link to="/blog" class="navbar-item">
        Blogg 
      </g-link>

      <g-link to="/events" class="navbar-item">
        Arrangementer
      </g-link>

      <g-link to="/rent" class="navbar-item">
        Utleie &amp; Priser
      </g-link>

      <g-link to="/about" class="navbar-item">
        Om Fredtun
      </g-link>


      <g-link to="/contact" class="navbar-item">
        Kontakt Oss
      </g-link>

    </div>

  </div>
  </nav>

  <!-- <div class="tabs is-centered is-large is-fullwidth">
    <ul>
      <li>
        <g-link to="/" class="navbar-item">Hjem</g-link>
      </li>
      <li :class="{'is-active':isBlogRoute}">
        <g-link to="/blog" class="navbar-item">Blogg</g-link>
      </li>
      <li :class="{'is-active':isEventRoute}">
        <g-link to="/events" class="navbar-item">Arrangementer</g-link>
      </li>
      <li :class="{'is-active':isRentRoute}">
        <g-link to="/rent" class="navbar-item">Utleie &amp; Priser</g-link>
      </li>
      <li :class="{'is-active':isAboutRoute}">
        <g-link to="/about" class="navbar-item">Om Fredtun</g-link>
      </li>
      <li :class="{'is-active':isContactRoute}">
        <g-link to="/contact" class="navbar-item">Kontakt Oss</g-link>
      </li>
    </ul>
  </div> -->
</template>
<script>
export default {
  data() {
    return {
      navbarToggled: false
    };
  },
  computed: {
      isEventRoute: function(){
          return this.$route.path === '/events'
      },
      isRentRoute: function(){
          return this.$route.path === '/rent'
      },
      isAboutRoute: function(){
          return this.$route.path === '/about'
      },
      isContactRoute: function(){
          return this.$route.path === '/contact'
      },
      isBlogRoute: function(){
          return this.$route.path === '/blog'
      },
  }
};
</script>
<style scoped>
.tabs li.is-active a {
    border-bottom-color: #389583;
    color: #389583;
}
.tabs{
    margin-bottom: 0 !important;
}
.navbar-item {
    color: black;
}

.navbar-item:hover {
  background-color: white;
  color: black;
}

.navbar {
  background-color: rgb(92, 219, 149);
}
.navbar-brand {
  font-size: 32px;
  font-weight: 600;
}
</style>
