<template>
    <div class="wrap">
        <div class="columns is-gapless">
            <div class="column is-one-third">
                <div class="rent-image"></div>
            </div>
            <div class="column">
                <div class="rent-info">
                    <h2>Leie?</h2>
                    <h3>På Fredtun har vi...</h3>
                    <ul>
                        <li>- 120 sengeplasser</li>
                        <li>- 10 soverom</li>
                        <li>- 2 fellesrom</li>
                        <li>- 7 bad</li>
                        <li>- 2 fotballbaner</li>
                    </ul>
                    <g-link to="/rent" class="button is-medium is-link">SE MER INFO OG PRISER</g-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.rent-image {
    width: 100%;
    background-image: url('https://res.cloudinary.com/dix4ngy25/image/upload/q_auto/v1569176653/l3ildjarl499nq5uv9hn.jpg');
    background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  height: 100%;
}
.rent-info {
    background-color: rgb(92, 219, 149);
    padding: 25px;
    color: rgba(255,255,255, 0.8);
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
h2{
    font-size: 24px;
    font-weight: 600;
}
h3{
    font-size: 36px;
    font-weight: 700;
}
.button {
    margin: 20px 0;
    width: fit-content;
}
.is-link {
    background-color: rgba(5, 56, 106, 0.8);
}
.is-link:hover {
    background-color: rgba(5, 56, 106, 1);
}
</style>