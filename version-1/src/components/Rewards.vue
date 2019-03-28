<template>
  <div>
    <div class="rewards-header">
      <div class="flex">Rewards</div>
      <div class="flex right">Points: {{ points }}</div>
    </div>
    <div id="rewards">
      <div class="reward" v-for="(reward, index) in rewards" v-on:click="buy(index)" >
        {{ reward.name }} <br>
        {{ reward.price }}
      </div>
    </div>
    <button v-on:click="addPoints(10)">Add points</button>
  </div>
</template>

<style scoped>
  .rewards-header {
    display: flex;
    justify-items: center;
    padding: 10px;
    margin-bottom: 30px;
    font-size: 30px;
  }

  .flex {
    flex: 1;
  }

  .right {
    text-align: right;
  }

  .reward {
    width: 80%;
    height: 100px;
    margin: 20px auto;
    padding: 10px;
    border: 1px solid black;
  }
  .reward:hover {
    border: 2px solid green;
  }

  .owned {
    background-color: greenyellow;
  }
</style>

<script>
  export default {
    data: () => ({
      points: 0,
      rewards: [
        {
          id: 0,
          name: 'Reward 1',
          price: 100,
          owned: false,
        },
        {
          id: 1,
          name: 'Reward 2',
          price: 300,
          owned: false,
        }
      ],
      buy(id) {
        const reward = this.rewards.find(x => x.id === id);
        if (!reward.owned && this.points >= reward.price) {
          this.points -= reward.price;
          reward.owned = true;
          const rewardDOM = document.getElementById('rewards').childNodes[id];
          rewardDOM.className += ' owned'
        }
        else {
          console.log('Message', 'Nope');
        }
      },
      addPoints (amount) {
        this.points += amount;
      },
    }),
  }
</script>
