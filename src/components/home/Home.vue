<template>
  <div>
    
    <div class="container" v-if="this.hasContent">

      <div class="linhaContainer">
        <div class="colunaContainer colunaContainer2">
            <div class="colunaCards colunaCards2" v-for="clash_card of deck">
              <router-link :to="{ name : 'cardInfo', params: { id: clash_card._id} }">
                <clash-card :url="`http://www.clashapi.xyz/images/cards/${clash_card.idName}.png`" :rarity="clash_card.rarity" :name="clash_card.name" :idName="clash_card.idName"/>
              </router-link>
            </div>
        </div>
      
        <div class="colunaContainer colunaContainer2">
          <about-deck :deck="this.deck"/>
          <br>
          <p class="buttonGenerateDeck">     
            <button type="button" @click="newDeck()">Generate New Deck</button>
          </p>
        </div>  
      </div>
    
    </div>

    <div class="row center" v-else>
      <h1>Ooooooops</h1>
      <p>Something went wrong and we could not retrieve the cards from our servers.<br>
        Please try again later.</p>
    </div>

  </div>
</template>

<script>
import AboutDeck from './AboutDeck.vue';
import ClashCard from '../shared/clash-card/ClashCard.vue';
import ClashService from '../../domain/clash/ClashService';

export default {

  components: {
    'clash-card': ClashCard,
    'about-deck': AboutDeck
  },

  methods: {

    newDeck(foto) {
      this.service
        .listDeck()
        .then(deck => this.deck = deck, err => this.mensagem = err.message);
    }

  },

  data() {

    return {
      deck: [],
      elixirCost: 0,
      hasContent: true
    }
  },

  created() {

    this.service = new ClashService(this.$resource);

    this.service
      .listDeck()
      .then(deck => {
        this.deck = deck;
      }, err => {
        this.hasContent = false;
        this.mensagem = err.message;
      }
    );
  }
}

</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  background-color: #ecf0f1;
}

@media (min-width: 1360px) {
  .container {
    max-width: 1360px;
    padding: 0;
  }
}
  .linhaContainer {
    /* SE ALTERAR ESTES MARGINS TERÁ QUE ALTERAR OS PADDINGS DA CLASSE colunaCards */
    margin-left: -5px;
    margin-right: -5px;
  }

  .linhaContainer:before, .linhaContainer:after {
    content: "";
    display: table;
  }

  .linhaContainer:after {
    clear: both;
  }

    .colunaContainer {
      display: inline-block;
      vertical-align: top;
      min-height: 1px;
      /* SE ALTERAR ESTES PADDINGS TERÁ QUE ALTERAR OS MARGINS DA CLASSE colunaCards */
      padding-left: 5px;
      padding-right: 5px;

      /* ESTE MARGIN É DEVIDO O INLINE-BLOCK PARA VOLTAR O MARGIN PARA 0 */
      margin-right: -4px;

      width: 100%;
    }

    .colunaCards {
      display: inline-block;
      width: 100%;
      vertical-align: top;
    }



    @media screen and (min-width: 360px) {
      
      .colunaContainer2 {
        width: 100%;
      }

      .colunaCards2 {
        width: 50%;
      }
    
    }

    @media screen and (min-width: 630px) {
      
      .colunaContainer2 {
        width: 100%;
      }

      .colunaCards2 {
        width: 33%;
      }
    
    }

    @media screen and (min-width: 920px) {
      
      .colunaContainer2 {
        width: 50%;
      }

      .colunaCards2 {
        width: 50%;
      }
    
    }

    @media screen and (min-width: 1024px) {
      
      .colunaContainer2 {
        width: 50%;
      }

      .colunaCards2 {
        width: 33%;
      }
    
    }

    @media screen and (min-width: 1240px) {
      
      .colunaContainer2 {
        width: 50%;
      }

      .colunaCards2 {
        width: 25%;
      }
    
    }

.buttonGenerateDeck {
  text-align: center;
}

.buttonGenerateDeck button {
  background-color: #e74c3c;
  border: none;
  padding: 15px;
  border-radius: 10px;
  color: #ecf0f1;
}




/* .list-deck {
  list-style: none;
}

.list-deck .list-deck-item {
  display: inline-block;
  overflow: hidden;
} */


</style>
