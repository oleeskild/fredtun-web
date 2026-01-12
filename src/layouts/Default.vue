<template>
  <div class="layout">
    <navbar class="navbar-scrolled" />
    <main class="main-content">
      <slot/>
    </main>
    <fredtun-footer />
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue';
import FredtunFooter from '~/components/FredtunFooter.vue';
export default {
 components: {
   Navbar,
   FredtunFooter
 },
 layout: 'blank'
}
</script>

<style>
html {
  font-family: 'Inter', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  background-color: #fff;
  color: #333;
  line-height: 1.6;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 80px;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.navbar-scrolled .navbar-logo {
  color: #2D5A4A !important;
}

.navbar-scrolled .navbar-item {
  color: #333 !important;
}

.navbar-scrolled .navbar-cta {
  background: #2D5A4A !important;
  color: white !important;
}
</style>
