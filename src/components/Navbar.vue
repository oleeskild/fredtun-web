<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }" role="navigation" aria-label="main navigation">
    <div class="navbar-container">
      <div class="navbar-brand">
        <g-link to="/" class="navbar-logo">
          <img src="/logofred.png" alt="Fredtun" />
          <span>Fredtun</span>
        </g-link>
        <button
          class="navbar-burger"
          :class="{ 'is-active': navbarToggled }"
          @click="navbarToggled = !navbarToggled"
          aria-label="menu"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': navbarToggled }">
        <g-link to="/arrangementer" class="navbar-item">Arrangementer</g-link>
        <g-link to="/leie" class="navbar-item">Utleie & Priser</g-link>
        <g-link to="/om-oss" class="navbar-item">Om Fredtun</g-link>
        <g-link to="/kontakt" class="navbar-item navbar-cta">Kontakt Oss</g-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navbarToggled: false,
      isScrolled: false
    };
  },
  watch: {
    '$route': {
      handler() {
        // Scroll to top and reset state on route change
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
        this.isScrolled = false;
        this.navbarToggled = false;
      },
      immediate: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Check initial scroll position
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  }
};
</script>
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: white;
  font-family: Prociono, Georgia, serif;
  font-size: 1.5rem;
  font-weight: 400;
  transition: color 0.3s ease;
  margin-right: 2rem;
}

.navbar.scrolled .navbar-logo {
  color: #2D5A4A;
}

.navbar-logo img {
  height: 36px;
  width: auto;
  vertical-align: middle;
}

.navbar-logo span {
  line-height: 1;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.navbar-item {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.navbar.scrolled .navbar-item {
  color: #333;
}

.navbar-item:hover {
  background: rgba(255, 255, 255, 0.15);
}

.navbar.scrolled .navbar-item:hover {
  background: rgba(45, 90, 74, 0.1);
  color: #2D5A4A;
}

.navbar-cta {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.navbar.scrolled .navbar-cta {
  background: #2D5A4A;
  color: white;
  border-color: #2D5A4A;
}

.navbar.scrolled .navbar-cta:hover {
  background: #3D6A5A;
  color: white;
}

.navbar-burger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  width: 40px;
  height: 40px;
  position: relative;
}

.navbar-burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  margin: 5px auto;
  transition: all 0.3s ease;
}

.navbar.scrolled .navbar-burger span {
  background: #2D5A4A;
}

.navbar-burger.is-active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.navbar-burger.is-active span:nth-child(2) {
  opacity: 0;
}

.navbar-burger.is-active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 900px) {
  .navbar-burger {
    display: block;
  }

  .navbar-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 1rem;
    gap: 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    display: none;
  }

  .navbar-menu.is-active {
    display: flex;
  }

  .navbar-item {
    color: #333;
    padding: 1rem;
    width: 100%;
    text-align: center;
    border-radius: 0;
  }

  .navbar-item:hover {
    background: rgba(45, 90, 74, 0.1);
  }

  .navbar-cta {
    background: #2D5A4A;
    color: white;
    margin-top: 0.5rem;
    border-radius: 6px;
  }
}
</style>
