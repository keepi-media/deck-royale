<template>
  <div class="AboutArena_Todo">
    <h1>{{ arena.number }} - <span class="">{{arena.name}}</span></h1>
    <br>
    <p class="info-text">+ <b>{{ arena.victoryGold }} Gold</b> per Victory</p>
    <p class="info-text">Need at least <b>{{ arena.minTrophies }} Trophies</b> </p>
    <p class="info-text"><b>Can Donate</b></p>
    <p class="info-text sub-text"><b>{{ arena.clan.donate.common}} Common <span v-if="(arena.clan.donate.common == '1')">Card</span><span v-else>Cards</span></b> to Clan</p>
    <p class="info-text sub-text"><b>{{ arena.clan.donate.rare }} Rare <span v-if="(arena.clan.donate.rare  == '1')">Card</span><span v-else>Cards</span></b> to Clan</p>
    <p class="info-text"><b>Can Request</b></p>
    <p class="info-text sub-text"><b>{{ arena.clan.request.common}} Common <span v-if="(arena.clan.request.common == '1')">Card</span><span v-else>Cards</span></b> to Clan</p>
    <p class="info-text sub-text"><b>{{ arena.clan.request.rare }} Rare <span v-if="(arena.clan.request.rare  == '1')">Card</span><span v-else>Cards</span></b> to Clan</p>
  </div>
</template>
<script>
export default {
  props: ['arena']
}
</script>
<style>
  .AboutArena_Todo {
    background-color: white;
    border-radius: 50px;
    padding: 15px 50px;
    box-shadow: 2px 5px 25px -4px rgba(0,0,0,0.75);
  }

  .AboutArena_Todo:hover {
    transform: scale(1.008)
  }
</style>
