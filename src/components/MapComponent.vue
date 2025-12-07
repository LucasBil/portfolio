<script setup>
    import 'leaflet/dist/leaflet.css';
    import 'vue-map-ui/dist/style.css';
    import 'vue-map-ui/dist/theme-all.css';

    import { VMap, VMapOsmTileLayer, VMapZoomControl } from 'vue-map-ui';

    const center = [45.816842, 6.02130889]; // Annecy
    const zoom = 13;
</script>

<template>
    <VMap class="map" :zoom="zoom" :center="center">
        <VMapOsmTileLayer />
        <VMapZoomControl />
    </VMap>
</template>

<style scoped>
.map {
  height: 200px;
}

@media (min-width: 48rem) {
  .map {
    height: 400px;
  }
}
</style>