<template>
  <div class="container-fluid">
    <div class="CardInfoLayer">
      <div class="CardInfoImage">
        <clash-card :url="`http://www.clashapi.xyz/images/cards/${card.idName}.png`" :rarity="card.rarity" :name="card.name" :idName="card.idName"/>
      </div>
      <div class="CardInfo">
        <div class="CardName">
          <h1><span class="" :class="rarityStyle">{{card.name}}</span></h1>
        </div>
        <br>
        <h4 class="text-uppercase">Rarity</h4>
        <p class="info-text my-info-text ">{{card.rarity}}</p>
        <h4 class="text-uppercase">Type</h4>
        <p class="info-text my-info-text">{{card.type}}</p>
        <h4 class="text-uppercase">Name</h4>
        <p class="info-text my-info-text">{{card.name}}</p>
        <h4 class="text-uppercase">Description</h4>
        <p class="info-text my-info-text">{{card.description}}</p>
        <h4 class="text-uppercase">Elixir Cost</h4>
        <p class="info-text my-info-text">{{card.elixirCost}}</p>
        <h4 class="text-uppercase">Arena</h4>
        <p class="info-text my-info-text">{{card.arena}}</p>

        <br>
        <div class="CardButton">
          <router-link :to="{ name: 'home'}" v-if="this.$route.name == 'cardInfo'">
            <button type="button" class="btn btn-danger btn-lg">Back to Home</button>
          </router-link>
          <router-link :to="{ name: 'cards'}" v-else>
            <button type="button" class="btn btn-danger btn-lg">Back to Cards</button>
          </router-link>
        </div>
      </div>

    </div>


  </div>
</template>

<script>

import ClashService from '../../domain/clash/ClashService';
import ClashCard from '../shared/clash-card/ClashCard.vue';

export default {
  components: {
    'clash-card': ClashCard,
  },
  data() {

      return {
          card: [],
          id: this.$route.params.id
      }
  },
  created() {
      this.service = new ClashService(this.$resource,this.id);

      if(this.id) {
        this.service
          .search(this.id)
          .then(card => this.card = card);
      }
  },
  computed: {

      rarityStyle() {
          if(this.card.rarity == 'Common' || !this.card.rarity) return 'rarity-default';
          if(this.card.rarity == 'Rare') return 'rarity-rare';
          if(this.card.rarity == 'Epic') return 'rarity-epic';
          if(this.card.rarity == 'Legendary') return 'rarity-legend';
      }

  }
}
</script>

<style scoped>
h4 {
  /* font-weight: bold; */
  margin-top: 15px;
  margin-bottom: 0;
  color: #063d73;
}

.CardInfoLayer {
  display: flex;
  align-items: center;
  height: -webkit-fill-available;
}

.CardInfoImage{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.CardInfo {
  width: 30%;
}

.my-info-text {
  border-bottom: 1px solid #000;
}

.CardName {
  text-align: center;
  color: #f1d871;
  background-color: #063d73;
  border-radius: 15px;
  height: 80px;
  display: flex;
  justify-content: center;
}

.CardButton {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
