<template>
  <div>
    <div class="RarityTitle" :class="rarityStyle" >
      <h1>{{ this.rarity }}</h1>
    </div>
    <div class="CardsRarityLayer" :class="rarityBorder">
      <li class="CardItem" v-for="clash_card in myRarity()" min-width="200px">
        <router-link :to="{ name : 'cardsInfo', params: { id: clash_card._id }}">
          <clash-card :url="`http://www.clashapi.xyz/images/cards/${clash_card.idName}.png`" :rarity="clash_card.rarity" :name="clash_card.name" :idName="clash_card.idName"/>
        </router-link>
      </li>
    </div>
  </div>
</template>

<script>
import ClashCard from '../shared/clash-card/ClashCard.vue';
export default {

  components: {
    'clash-card': ClashCard,
  },
  props: ['rarity', 'cards'],
  computed: {
    rarityStyle() {
        if(this.rarity == 'Common' || !this.rarity) return 'rarity-bg-default';
        if(this.rarity == 'Rare') return 'rarity-bg-rare';
        if(this.rarity == 'Epic') return 'rarity-bg-epic';
        if(this.rarity == 'Legendary') return 'rarity-bg-legend';
    },
    rarityBorder() {
        if(this.rarity == 'Common' || !this.rarity) return 'rarity-bd-default';
        if(this.rarity == 'Rare') return 'rarity-bd-rare';
        if(this.rarity == 'Epic') return 'rarity-bd-epic';
        if(this.rarity == 'Legendary') return 'rarity-bd-legend';
    }
  },
  methods: {
    myRarity() {
      return this.cards.filter(item => {
        if(item.rarity === this.rarity)
          return item
      })
    }
  }
}
</script>

<style>
.RarityTitle {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.RarityTitle h1 {
  font-size: 38px;
  line-height: 42px;
  font-weight: bold;
  color: white;
}

.rarity-bg-default{
  background-color: gray;
}

.rarity-bd-default {
  border: 1px solid gray;
  border-radius: 0 0 15px 15px;
}

.rarity-bg-epic{
  background-color: purple;
}

.rarity-bd-epic{
  border: 1px solid purple;
  border-radius: 0 0 15px 15px;
}

.rarity-bg-legend{
  background-color: blue;
}

.rarity-bd-legend{
  border: 1px solid blue;
  border-radius: 0 0 15px 15px;
}

.rarity-bg-rare {
  background-color: orange;
}

.rarity-bd-rare {
  border: 1px solid orange;
  border-radius: 0 0 15px 15px;
}

.CardsRarityLayer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 20px;
}

.CardItem {
  width: 20%;
  display: flex;
  justify-content: center;
  list-style-type: none;
}

</style>