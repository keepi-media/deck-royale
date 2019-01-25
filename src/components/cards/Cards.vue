<template>
  <div>
    <div class="center">
        <div class="CardsFilterLayer">
          <p class="CardsFilterMessage">Filter the cards by raritys: </p>
          <button class="BtnFilter BtnFilterCards" v-on:click="allCards"><label>All</label></button>
          <button class="BtnFilter BtnFilterCards" v-on:click="commonCards"><label>Common</label></button>
          <button class="BtnFilter BtnFilterCards" v-on:click="rareCards"><label>Rare</label></button>
          <button class="BtnFilter BtnFilterCards" v-on:click="epicCards"><label>Epic</label></button>
          <button class="BtnFilter BtnFilterCards" v-on:click="legendaryCards"><label>Legendary</label></button>
        </div>
        <!-- <ul class="list-deck row"> -->
          <ul class="center" v-for="r in rarity">
            <categories :rarity="r" :cards="cards" />
          </ul>
        <!-- </ul> -->
    </div>
  </div>
</template>

<script>
import ClashService from '../../domain/clash/ClashService';
import Categorie from './Categories.vue'

export default {

  components: {
    'categories': Categorie,
  },

  data() {

    return {
      cards: [],
      cards_raritys: {
        common: [],
        rare: [],
        epic: [],
        legendary: [],
      },
      rarity: [],
    }
  },

  created() {

    this.service = new ClashService(this.$resource);

    this.service
      .listCards()
      .then(cards => {
        let rarity = ['Common', 'Rare', 'Epic', 'Legendary'],
        cards_ordered = [], i, j

        for(i = 0; i < rarity.length; i++){
          for(j = 0; j < cards.length; j++)
          {
            if(cards[j].rarity === rarity[i]){
              cards_ordered.push(cards[j])
              if(i === 0)
                this.cards_raritys.common.push(cards[j])
              else if(i === 1)
                this.cards_raritys.rare.push(cards[j])
              else if(i === 2)
                this.cards_raritys.epic.push(cards[j])
              else
                this.cards_raritys.legendary.push(cards[j])
            }
          }
        }
        this.cards = cards_ordered
        this.rarity = rarity
      },err => this.mensagem = err.message);
  },

  methods: {
    allCards() {
      let raritys = this.cards_raritys
      this.cards = raritys.common.concat(
        raritys.rare.concat(
          raritys.epic.concat(
            raritys.legendary
          )
        )
      )
      this.rarity = ['Common', 'Rare', 'Epic', 'Legendary']
    },
    commonCards() {
      this.cards = this.cards_raritys.common
      this.rarity = ['Common']
    },
    rareCards() {
      this.cards = this.cards_raritys.rare
      this.rarity = ['Rare']
    },
    epicCards() {
      this.cards = this.cards_raritys.epic
      this.rarity = ['Epic']
    },
    legendaryCards() {
      this.cards = this.cards_raritys.legendary
      this.rarity = ['Legendary']
    }
  }
}

</script>

<style>
  .BtnFilterCards{
    width: 100px;
  }

  .CardsFilterLayer {
    margin-bottom: 25px;
  }

  .CardsFilterMessage {
    color: #063d73;
    font-weight: 600;
    font-size: 16px;
  }

</style>

