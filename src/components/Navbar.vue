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
      <g-link to="/blogg" class="navbar-item">
        Blogg 
      </g-link>

      <g-link to="/arrangementer" class="navbar-item">
        Arrangementer
      </g-link>

      <g-link to="/leie" class="navbar-item">
        Utleie &amp; Priser
      </g-link>

      <g-link to="/om-oss" class="navbar-item">
        Om Fredtun
      </g-link>


      <g-link to="/kontakt" class="navbar-item">
        Kontakt Oss
      </g-link>

    </div>

  </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navbarToggled: false
    };
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
    padding: 5px 25px;
}

.navbar-start > .navbar-item {
  font-size: 20px;
}


.navbar-item:hover {
  /* background-color: white; */
  color: black;
  background-color: rgba(0,0,0,0.1);
}

.navbar {
  background-color: rgb(92, 219, 149);
  min-height: 7rem;
}
.navbar-brand {
  font-size: 32px;
  font-weight: 400;
  font-family: Prociono, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
