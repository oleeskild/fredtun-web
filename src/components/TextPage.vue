<template>
  <div class="text-page">
    <section class="text-hero">
      <span v-if="label" class="text-label">{{ label }}</span>
      <h1>{{ title }}</h1>
      <p v-if="subtitle" class="text-subtitle">{{ subtitle }}</p>
    </section>
    <div class="text-content">
      <article class="text-card">
        <slot />
      </article>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'subtitle', 'label']
}
</script>
<style scoped>
.text-page {
  background: #f8faf9;
}

.text-hero {
  background: linear-gradient(135deg, #2D5A4A 0%, #3D6A5A 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
}

.text-label {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.85;
  margin-bottom: 0.75rem;
}

.text-hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0;
  color: white !important;
}

.text-subtitle {
  font-size: 1.15rem;
  opacity: 0.9;
  margin-top: 0.75rem;
}

.text-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.text-card {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

@media (max-width: 900px) {
  .text-hero h1 {
    font-size: 2rem;
  }

  .text-hero {
    padding: 3rem 1.5rem;
  }

  .text-content {
    padding: 2rem 1rem;
  }

  .text-card {
    padding: 2rem 1.5rem;
  }
}
</style>

<style>
.text-card p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1rem;
}

.text-card h2 {
  color: #2D5A4A;
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.text-card h2:first-child {
  margin-top: 0;
}

.text-card ul {
  margin: 0 0 1.5rem 1.5rem;
  color: #444;
  list-style: disc;
}

.text-card li {
  margin-bottom: 0.4rem;
  line-height: 1.6;
}

.text-card a {
  color: #2D5A4A;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.text-card a:hover {
  color: #3D6A5A;
}

.text-card .updated {
  font-size: 0.9rem;
  color: #777;
}

.text-card address {
  font-style: normal;
  color: #444;
  line-height: 1.8;
  margin-bottom: 1rem;
}
</style>
