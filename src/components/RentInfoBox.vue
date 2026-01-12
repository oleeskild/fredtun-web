<template>
  <section class="rent-section">
    <div class="rent-container">
      <div class="rent-content">
        <span class="section-label">Utleie</span>
        <h2 class="rent-title">Hva vi tilbyr</h2>
        <p class="rent-description">
          Fredtun er et flott sted for leirskole, konfirmasjonsleir,
          familiesamlinger, eller andre arrangementer.
        </p>
        <div class="features-grid">
          <div class="feature-item">
            <span class="feature-number">70</span>
            <span class="feature-label">Sengeplasser</span>
          </div>
          <div class="feature-item">
            <span class="feature-number">14</span>
            <span class="feature-label">Soverom</span>
          </div>
          <div class="feature-item">
            <span class="feature-number">7</span>
            <span class="feature-label">Dusjfasiliteter</span>
          </div>
          <div class="feature-item">
            <span class="feature-number">1</span>
            <span class="feature-label">Fotballbane</span>
          </div>
        </div>
        <ul class="features-list">
          <li>Pilegrimsherberge</li>
          <li>Volleyballbane</li>
          <li>Lekeplass</li>
          <li>Kaniner og høner i sommerhalvåret</li>
        </ul>
        <g-link to="/leie" class="rent-button">
          Se priser og mer info
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </g-link>
      </div>
      <div class="rent-image">
        <div class="image-wrapper"></div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.rent-section {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #f8faf9 0%, #ffffff 100%);
}

.rent-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.section-label {
  display: inline-block;
  color: #2D5A4A;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.rent-title {
  font-size: 2.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.rent-description {
  font-size: 1.125rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature-item {
  text-align: center;
  padding: 1.25rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #eee;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}

.feature-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #2D5A4A;
  line-height: 1;
}

.feature-label {
  display: block;
  font-size: 0.8rem;
  color: #666;
  margin-top: 0.5rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.features-list li {
  font-size: 1rem;
  color: #444;
  padding-left: 1.5rem;
  position: relative;
}

.features-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 8px;
  height: 8px;
  background: #2D5A4A;
  border-radius: 50%;
}

.rent-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: #2D5A4A;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.rent-button:hover {
  background: #3D6A5A;
  transform: translateX(4px);
}

.rent-button svg {
  transition: transform 0.3s ease;
}

.rent-button:hover svg {
  transform: translateX(4px);
}

.rent-image {
  position: relative;
}

.image-wrapper {
  width: 100%;
  height: 500px;
  background-image: url('https://res.cloudinary.com/dix4ngy25/image/upload/q_auto/v1569176653/l3ildjarl499nq5uv9hn.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.image-wrapper::before {
  content: '';
  position: absolute;
  inset: -20px;
  background: linear-gradient(135deg, #2D5A4A 0%, #4A8B7A 100%);
  border-radius: 20px;
  z-index: -1;
  opacity: 0.1;
}

@media (max-width: 900px) {
  .rent-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .rent-content {
    order: 2;
  }

  .rent-image {
    order: 1;
  }

  .image-wrapper {
    height: 350px;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .rent-title {
    font-size: 2rem;
  }
}

@media (max-width: 500px) {
  .rent-section {
    padding: 4rem 1rem;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .features-list {
    grid-template-columns: 1fr;
  }

  .rent-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
