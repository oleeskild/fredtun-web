<template>
    <svg class="bezier-overlay " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3254.769 1838.326">
    <g transform="translate(0.469 -3500)">
        <path :style="`fill: ${color || 'rgb(92, 219, 149)'} ;`" d="M0,1838.326H1152.4C1221.745,1089.366,1606.618,431.9,2172.768,0H625.78C269.53,532.586,45.149,1160.922,0,1838.326Z" transform="translate(2172.3 5338.326) rotate(180)"></path>
        <path :style="`fill: ${color || 'rgb(92, 219, 149)'} ;`" d="M0,1838.326H1152.4C1221.745,1089.366,1606.618,431.9,2172.768,0H625.78C269.53,532.586,45.149,1160.922,0,1838.326Z" transform="translate(3254.3 5338.326) rotate(180)"></path>
    </g>
</svg>
</template>
<script>
export default {
    props:['color']
}
</script>