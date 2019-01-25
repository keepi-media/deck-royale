<template>
  <div class="table-layer">
    <table>
      <caption><h1>About your deck</h1></caption>
      <tr>
        <td class="first"><b>Elixir Cost:</b></td>
        <td class="second">{{deckElixirCost}}</td>
      </tr>
      <tr>
        <td class="first"><b>Deck for Arena:</b></td>
        <td class="second">{{maxArena}}</td>
      </tr>
      <tr>
        <td colspan="2" class="separator"><h4>Your Deck Contains</h4></td>
      <tr>
        <td v-on:click="clickCommon" class="first"><b> Common <span v-if="(this.countCommonCards == '1')">Card</span><span v-else>Cards</span></b></td>
        <td class="second">{{countCommonCards}}</td>
      </tr>
      <tr>
        <td class="first"><b> Rare <span v-if="(this.countRareCards == '1')">Card</span><span v-else>Cards</span></b></td>
        <td class="second">{{countRareCards}}</td>
      </tr>
      <tr>
        <td class="first"><b> Epic <span v-if="(this.countEpicCards == '1')">Card</span><span v-else>Cards</span></b></td>
        <td class="second">{{countEpicCards}}</td>
      </tr>
      <tr>
        <td class="first"><b> Legend <span v-if="(this.countLegenCards == '1')">Card</span><span v-else>Cards</span></b></td>
        <td class="second">{{countLegenCards}}</td>
      </tr>
    </table>
    <!-- <h1><span class="info-title">About this deck</span></h1>
    <br>
    <p class="info-text"><b>Elixir Cost:</b> {{ deckElixirCost }}</p>
    <p class="info-text"><b>Deck for Arena:</b> {{ maxArena }}</p>
    <p class="info-text">It uses <b> {{ countCommonCards }} Common <span v-if="(this.countCommonCards == '1')">Card</span><span v-else>Cards</span></b></p>
    <p class="info-text">It uses <b>{{ countRareCards }} Rare <span v-if="(this.countRareCards == '1')">Card</span><span v-else>Cards</span></b></p>
    <p class="info-text">It uses <b>{{ countEpicCards }} Epic <span v-if="(this.countEpicCards == '1')">Card</span><span v-else>Cards</span></b></p>
    <p class="info-text">It uses <b>{{ countLegenCards }} Legendary <span v-if="(this.countLegenCards == '1')">Card</span><span v-else>Cards</span></b></p> -->
  </div>
</template>
<script>
export default {
  props: ['deck'],
  methods: {
    clickCommon: function() {
      console.log('eta porra')
    },
  },
  computed: {
    deckElixirCost() {
      let totalElixir = 0;
      this.deck.forEach(function(item, index, arr){
        totalElixir += item.elixirCost;
      });
      return Math.round(totalElixir/8*10)/10;
    },
    maxArena() {
      let arena = 0;
      this.deck.forEach(function(item, index, arr){
        if (item.arena > arena) {
          arena = item.arena;
        }
      });
      return arena;
    },
    countCommonCards() {
      let common = 0;
      this.deck.forEach(function(item,index,arr){
        if (item.rarity == "Common"){
          common += 1;
        }
      });
      return common;
    },
    countRareCards() {
      let rare = 0;
      this.deck.forEach(function(item,index,arr){
        if (item.rarity == "Rare"){
          rare += 1;
        }
      });
      return rare;
    },
    countEpicCards() {
      let epic = 0;
      this.deck.forEach(function(item,index,arr){
        if (item.rarity == "Epic"){
          epic += 1;
        }
      });
      return epic;
    },
    countLegenCards() {
      let legend = 0;
      this.deck.forEach(function(item,index,arr){
        if (item.rarity == "Legendary"){
          legend += 1;
        }
      });
      return legend;
    }
  }
}
</script>
<style>
  .table-layer {
    width: 85%;
    justify-content: center;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  caption {
    text-align: center;
    font-size: 18px;
    color: #f1d871;
    background-color: #063d73;
    border-radius: 15px;
  }

  tr {
    border-bottom: solid 1px #818181;;
    height: 40px;
  }

  .first {
    color: #063d73;
  }

  .separator {
    font-size: 14px;
    text-align: center;
    color: #063d73;
  }

  b:hover {
    cursor: pointer;
  }
</style>
