<template>
  <section class="hero">
    <div class="hero-background"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="title">
          <img class="logo" src="/logofred.png" alt="Fredtun logo" />
          Fredtun
        </h1>
        <p class="tagline">Et unikt sted ved Karmsundet</p>
        <p class="description">
          Fredtun ligger et par km nord for Skudeneshavn på østsiden av Karmøy.
          Omkranset av fjell og vendt mot sjøen - et naturlig smalt pass mellom
          to fjellrygger leder deg inn til dette unike stedet.
        </p>
        <div class="hero-badges">
          <span class="badge">Pilegrimsherberge</span>
          <span class="badge">70 sengeplasser</span>
          <span class="badge">Leirskole</span>
        </div>
        <div class="hero-buttons">
          <g-link to="/leie" class="button primary">Se utleie & priser</g-link>
          <a
            href="https://www.facebook.com/FredtunSkudeneshavn/"
            target="_blank"
            rel="noopener"
            class="button secondary"
          >Følg oss på Facebook</a>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <span></span>
    </div>
  </section>
</template>
<script>
export default {
  name: "Hero",
};
</script>
<style scoped>
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  background-image: url("https://res.cloudinary.com/dix4ngy25/image/upload/q_auto/v1569176653/k9ibuwgqxliidk9wu2ay.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: scale(1.05);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(45, 90, 74, 0.85) 0%,
    rgba(45, 90, 74, 0.7) 50%,
    rgba(45, 90, 74, 0.5) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 2rem;
  text-align: center;
}

.hero-text {
  color: white;
}

.title {
  font-size: 4rem;
  font-weight: 300;
  font-family: Prociono, Georgia, serif;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  letter-spacing: 0.02em;
  color: white !important;
}

.logo {
  height: 80px;
  width: auto;
  filter: brightness(0) invert(1);
}

.tagline {
  font-size: 1.5rem;
  font-weight: 300;
  opacity: 0.9;
  margin-bottom: 1.5rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.description {
  font-size: 1.15rem;
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.95;
}

.hero-badges {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.badge {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.button {
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.button.primary {
  background: white;
  color: #2D5A4A;
}

.button.primary:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.button.secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.button.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.scroll-indicator span {
  display: block;
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  position: relative;
}

.scroll-indicator span::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 50%;
  width: 4px;
  height: 8px;
  background: white;
  border-radius: 2px;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% { opacity: 1; top: 8px; }
  100% { opacity: 0; top: 20px; }
}

@media (max-width: 768px) {
  .hero {
    min-height: 100vh;
  }

  .title {
    font-size: 2.5rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .logo {
    height: 60px;
  }

  .tagline {
    font-size: 1.1rem;
  }

  .description {
    font-size: 1rem;
  }

  .hero-badges {
    gap: 0.5rem;
  }

  .badge {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .button {
    width: 100%;
    max-width: 280px;
    text-align: center;
  }
}
</style>
