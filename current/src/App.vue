<template>
  <div>
    <main>
      <router-view/>
    </main>
    <nav>
      <router-link v-for="(link, index) in links" :key="index" :to="link.to">{{ link.name }}</router-link>
    </nav>
  </div>
</template>

<style scoped>
  nav {
    display: flex;
    align-items: center;
    background-color: #333;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  /* Style the links inside the navigation bar */
  nav * {
    flex: 1;
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

</style>

<script>
  export default {
    data: () => ({
      links: [
        {
          name: 'Kaart',
          image: '',
          to: '/'
        },
        {
          name: 'Score',
          image: '',
          to: '/score'
        },
        {
          name: 'Rewards',
          image: '',
          to: '/rewards'
        },
        {
          name: 'Profiel',
          image: '',
          to: '/'
        },
      ],
    }),
  }
</script>
