<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="footer-container">
        <div class="footer-brand">
          <a href="/" class="footer-logo">
            <img src="/logofred.png" alt="Fredtun" />
            <span>Fredtun</span>
          </a>
          <p class="footer-tagline">
            Et unikt sted ved Karmsundet for leirskole, arrangementer og overnatting.
          </p>
          <div class="social-links">
            <a href="https://www.facebook.com/FredtunSkudeneshavn/" target="_blank" rel="noopener" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
          <div class="pilgrim-badge">
            <span class="badge-label">Tilknyttet</span>
            <a href="https://pilegrimsleden.no/pilegrimssentrene/avaldsnes" target="_blank" rel="noopener">
              <img src="https://res.cloudinary.com/dix4ngy25/image/upload/v1696341681/image_y2khig.png" alt="Pilegrimssenter Avaldsnes" />
            </a>
          </div>
        </div>

        <div class="footer-nav">
          <h3>Sider</h3>
          <nav>
            <a href="/">Hjem</a>
            <a href="/leie">Utleie & Priser</a>
            <a href="/arrangementer">Arrangementer</a>
            <a href="/om-oss">Om Fredtun</a>
            <a href="/kontakt">Kontakt Oss</a>
          </nav>
        </div>

        <div class="footer-contact">
          <h3>Besøksadresse</h3>
          <address>
            Austre Karmøyveg 820<br />
            4260 Karmøy
          </address>
          <div class="map-container">
            <Map />
          </div>
        </div>

        <div class="footer-support">
          <h3>Støtt Fredtun</h3>
          <p>Ønsker du å bidra til driften av Fredtun?</p>
          <div class="support-info">
            <div class="support-item">
              <span class="support-label">Vipps</span>
              <span class="support-value">565166</span>
            </div>
            <div class="support-item">
              <span class="support-label">Konto</span>
              <span class="support-value">3361.23.85160</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-container">
        <p>&copy; {{ currentYear }} Fredtun. Alle rettigheter reservert.</p>
      </div>
    </div>
  </footer>
</template>
<script>
import Map from "~/components/Map.vue";
export default {
  components: {
    Map
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>
<style scoped>
.footer {
  background: #1a1a1a;
  color: #fff;
}

.footer-main {
  padding: 4rem 2rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 3rem;
}

.footer-brand {
  max-width: 280px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: white;
  font-family: Prociono, Georgia, serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-logo img {
  height: 40px;
  width: auto;
}

.footer-tagline {
  color: #999;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #333;
  border-radius: 8px;
  color: #fff;
  transition: all 0.2s ease;
}

.social-links a:hover {
  background: #2D5A4A;
  transform: translateY(-2px);
}

.pilgrim-badge {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.pilgrim-badge .badge-label {
  font-size: 0.7rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.pilgrim-badge a {
  display: inline-block;
  transition: transform 0.2s ease;
}

.pilgrim-badge a:hover {
  transform: translateY(-2px);
}

.pilgrim-badge img {
  height: 40px;
  width: auto;
  border-radius: 6px;
  background: white;
  padding: 6px 10px;
}

.footer-nav h3,
.footer-contact h3,
.footer-support h3 {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fff;
  margin-bottom: 1.25rem;
}

.footer-nav nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-nav a {
  color: #999;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.footer-nav a:hover {
  color: #fff;
}

.footer-contact address {
  font-style: normal;
  color: #999;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.map-container {
  border-radius: 8px;
  overflow: hidden;
  height: 150px;
}

.footer-support p {
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.support-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.support-item {
  display: flex;
  flex-direction: column;
  background: #252525;
  padding: 0.75rem 1rem;
  border-radius: 8px;
}

.support-label {
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.support-value {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  font-family: monospace;
}

.footer-bottom {
  background: #111;
  padding: 1.5rem 2rem;
}

.footer-bottom .footer-container {
  display: flex;
  justify-content: center;
}

.footer-bottom p {
  color: #666;
  font-size: 0.875rem;
  margin: 0;
}

@media (max-width: 900px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  .footer-brand {
    grid-column: 1 / -1;
    max-width: none;
    text-align: center;
  }

  .footer-logo {
    justify-content: center;
  }

  .footer-tagline {
    max-width: 400px;
    margin: 0 auto 1.5rem;
  }

  .social-links {
    justify-content: center;
  }

  .pilgrim-badge {
    align-items: center;
  }
}

@media (max-width: 600px) {
  .footer-main {
    padding: 3rem 1.5rem;
  }

  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-nav nav {
    align-items: center;
  }

  .footer-contact address {
    text-align: center;
  }

  .map-container {
    display: none;
  }
}
</style>
