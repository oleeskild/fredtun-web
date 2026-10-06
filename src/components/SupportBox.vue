<template>
  <section id="stott-fredtun" class="support-section">
    <div class="support-container">
      <span class="section-label">Støtt Fredtun</span>
      <h2 class="support-title">Bli fast giver</h2>
      <p class="support-description">
        Bidra til at Fredtun kan fortsette å være et godt sted for barn, ungdom,
        skoler, lag og foreninger.
      </p>
      <div class="support-buttons">
        <a href="/fast-giver" class="support-button primary">Fast giver</a>
        <a href="/fast-giver/avtalevilkar" class="support-button">Avtalevilkår</a>
        <a href="/personvernerklaering" class="support-button">Personvernerklæring</a>
      </div>
    </div>
  </section>
</template>
<style scoped>
.support-section {
  padding: 5rem 2rem;
  background: #f8faf9;
  text-align: center;
}

.support-container {
  max-width: 800px;
  margin: 0 auto;
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

.support-title {
  font-size: 2.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.support-description {
  font-size: 1.125rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.support-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.support-button {
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid #2D5A4A;
  color: #2D5A4A;
  background: white;
}

.support-button:hover {
  background: #eef4f1;
  transform: translateY(-2px);
}

.support-button.primary {
  background: #2D5A4A;
  color: white;
}

.support-button.primary:hover {
  background: #3D6A5A;
  box-shadow: 0 10px 30px rgba(45, 90, 74, 0.25);
}

@media (max-width: 768px) {
  .support-section {
    padding: 4rem 1.5rem;
  }

  .support-title {
    font-size: 2rem;
  }

  .support-buttons {
    flex-direction: column;
    align-items: center;
  }

  .support-button {
    width: 100%;
    max-width: 280px;
  }
}
</style>
