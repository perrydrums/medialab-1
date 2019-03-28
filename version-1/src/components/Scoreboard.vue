<template>
  <div>
    <ol>
      <li v-for="player in players">
        {{player.name}}
      </li>
    </ol>
  </div>
</template>

<style scoped>
</style>

<script>
  export default {
    data: () => ({
      players: [
        {name: 'Perry'},
        {name: 'Ruth'},
        {name: 'Omi'},
      ]
    })
  }
</script>
