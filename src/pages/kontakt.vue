<template>
  <Layout>
    <div class="contact-page">
      <section class="contact-hero">
        <h1>Kontakt Oss</h1>
        <p>Vi hjelper deg gjerne med spørsmål om utleie, arrangementer eller annet.</p>
      </section>

      <section class="contact-content">
        <div class="contact-grid">
          <div class="contact-info">
            <div class="contact-card">
              <div class="people-grid">
                <div class="person">
                  <div class="person-avatar">
                    <img src="https://www.skudeaakra.no/-/media/banker/skudeaakra/ansatte/Kristian-Lassesen.jpg?mw=800" alt="Kristian Lassesen" />
                  </div>
                  <div class="person-title">
                    <h3>Kristian Lassesen</h3>
                    <span class="role">Daglig leder</span>
                  </div>
                  <div class="contact-details">
                    <a href="tel:90089979" class="contact-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      900 89 979
                    </a>
                    <a href="mailto:kristian@fredtun.org" class="contact-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      kristian@fredtun.org
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div class="info-cards">
              <div class="info-card">
                <h4>Besøksadresse</h4>
                <p>Austre Karmøyveg 820<br>4260 Karmøy</p>
              </div>
              <div class="info-card">
                <h4>Postadresse</h4>
                <p>Fredtun<br>Postboks 23<br>4297 Skudeneshavn</p>
              </div>
            </div>

            <div class="map-section">
              <Map />
            </div>
          </div>

          <div class="contact-form-section">
            <h2>Send oss en melding</h2>
            <p class="form-intro">Fyll ut skjemaet under, sa tar vi kontakt med deg.</p>
            <contact-form />
          </div>
        </div>
      </section>

      <section class="contact-image">
        <img src="https://res.cloudinary.com/dix4ngy25/image/upload/q_auto:eco/v1569176654/nekd5ypuajmdtq2se4jr.jpg" alt="Fredtun" />
      </section>
    </div>
  </Layout>
</template>
<script>
import PageHeader from "~/components/PageHeader.vue";
import ContactForm from "~/components/ContactForm.vue";
import Map from "~/components/Map.vue";
export default {
  metaInfo: { title: "Kontakt Oss" },
  components: {
    PageHeader,
    ContactForm,
    Map
  }
};
</script>
<style scoped>
.contact-page {
  background: #f8faf9;
}

.contact-hero {
  background: linear-gradient(135deg, #2D5A4A 0%, #3D6A5A 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.contact-hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white !important;
}

.contact-hero p {
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 500px;
  margin: 0 auto;
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
}

.people-grid {
  display: flex;
  justify-content: center;
}

.person {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.person-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 3px solid #2D5A4A;
  margin-bottom: 1rem;
}

.person-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.person-title {
  margin-bottom: 0.75rem;
}

.person-title h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.role {
  color: #2D5A4A;
  font-size: 0.875rem;
  font-weight: 500;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #555;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.contact-link:hover {
  color: #2D5A4A;
}

.info-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.info-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.info-card h4 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #2D5A4A;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.info-card p {
  color: #444;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

.map-section {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  height: 280px;
}

.contact-form-section {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.contact-form-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.form-intro {
  color: #666;
  margin-bottom: 1.5rem;
}

.contact-image {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
}

.contact-image img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-hero h1 {
    font-size: 2rem;
  }

  .info-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .contact-content {
    padding: 2rem 1rem;
  }

  .contact-form-section {
    padding: 1.5rem;
  }

  .contact-image {
    padding: 0 1rem 2rem;
  }

}
</style>
