<template>
  <Layout>
    <div class="events-page">
      <section class="events-hero">
        <h1>Arrangementer</h1>
        <p>Fredtun er et levende sted med konserter, samlinger og aktiviteter gjennom hele aret.</p>
      </section>

      <section class="events-content">
        <div class="events-container">
          <div class="events-intro">
            <div class="intro-card">
              <div class="intro-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h2>Følg med på arrangementer</h2>
              <p>Vi publiserer alle våre arrangementer på vår Facebook-side. Følg oss for å holde deg oppdatert på konserter, samlinger og andre aktiviteter på Fredtun.</p>
              <a
                href="https://www.facebook.com/FredtunSkudeneshavn/"
                target="_blank"
                rel="noopener"
                class="facebook-button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Følg oss pa Facebook
              </a>
            </div>
          </div>

          <div class="facebook-feed">
            <h3>Siste fra Facebook</h3>
            <div class="feed-container">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFredtunSkudeneshavn%2F&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                width="500"
                height="600"
                style="border:none;overflow:hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <section class="event-types">
        <div class="types-container">
          <h2>Hva skjer pa Fredtun?</h2>
          <div class="types-grid">
            <div class="type-card">
              <div class="type-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <h4>Konserter</h4>
              <p>Lokale og regionale artister i unike omgivelser</p>
            </div>
            <div class="type-card">
              <div class="type-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4>Samlinger</h4>
              <p>Konfirmasjonsleir, familiesamlinger og mer</p>
            </div>
            <div class="type-card">
              <div class="type-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
              </div>
              <h4>Pilegrimsvandring</h4>
              <p>Stopp langs pilegrimsleden til Avaldsnes</p>
            </div>
            <div class="type-card">
              <div class="type-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h4>Leirskole</h4>
              <p>Laering og opplevelser for skoleklasser</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>
<script>
export default {
  metaInfo: { title: "Arrangementer" }
};
</script>
<style scoped>
.events-page {
  background: #f8faf9;
}

.events-hero {
  background: linear-gradient(135deg, #2D5A4A 0%, #3D6A5A 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.events-hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white !important;
}

.events-hero p {
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.events-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.events-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.intro-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.intro-icon {
  width: 60px;
  height: 60px;
  background: rgba(45, 90, 74, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2D5A4A;
  margin-bottom: 1.5rem;
}

.intro-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.intro-card p {
  color: #666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.facebook-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: #1877F2;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.facebook-button:hover {
  background: #166FE5;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24, 119, 242, 0.3);
}

.facebook-feed h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.feed-container {
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
}

.feed-container iframe {
  border-radius: 8px;
  max-width: 100%;
}

.event-types {
  background: white;
  padding: 4rem 2rem;
}

.types-container {
  max-width: 1200px;
  margin: 0 auto;
}

.types-container h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 2.5rem;
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.type-card {
  background: #f8faf9;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.2s ease;
}

.type-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.type-icon {
  width: 56px;
  height: 56px;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2D5A4A;
  margin: 0 auto 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.type-card h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.type-card p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .events-container {
    grid-template-columns: 1fr;
  }

  .types-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .events-hero h1 {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .events-content {
    padding: 2rem 1rem;
  }

  .intro-card {
    padding: 1.5rem;
  }

  .types-grid {
    grid-template-columns: 1fr;
  }

  .event-types {
    padding: 2rem 1rem;
  }
}
</style>
