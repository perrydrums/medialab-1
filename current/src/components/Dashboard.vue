<template>
  <div>
    <GmapMap
        :center="{lat:51.9173738, lng:4.4845588}"
        :zoom="16"
        map-type-id="terrain"
        style="width: 100vw; height: 100vh"
    >
      <GmapMarker
          :position="{lat: 51.917940, lng: 4.487785}"
          @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<style scoped>
</style>

<script>
</script>
