<template>
  <div>
    <!--<h1>Home</h1>-->
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
      <!-- TODO: Make user current location marker. -->
      <!--<GmapMarker-->
          <!--:position="{lat: 51.9173738, lng: 4.4845588}"-->
          <!--class="MeMarker"-->
          <!--@click="center=m.position"-->
      <!--/>-->
    </GmapMap>
  </div>
</template>

<style scoped>
  h1 {
    color: blue
  }
</style>

<script>
</script>
