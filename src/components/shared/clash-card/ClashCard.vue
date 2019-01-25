<template>
  <div class="card-image" :class="rarityStyle">
    <p class="card-title center"><span>{{name}}</span></p>
    <img class="img-responsive" :class="rarityStyle" :src="url" :alt="idName">
  </div>
</template>

<script>

export default {
    props: ['idName','url','name','rarity'],

    computed: {

        rarityStyle() {

            if(this.rarity == 'Common' || !this.rarity) return 'rarity-default';
            if(this.rarity == 'Rare') return 'rarity-rare';
            if(this.rarity == 'Epic') return 'rarity-epic';
            if(this.rarity == 'Legendary') return 'rarity-legend';
        }

    }
}
</script>

<style scoped>
.card-title {
  font-weight: bold;
}

.card-image {
  width: 150px;
  /* padding: 0 0 30px 0; */
  height: 250px;
}

.card-image:hover{
  transform: scale(1.1);
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
  /* background-color: rgba(0,0,0,0.16); */
  box-shadow: 8px 8px 0 6px rgba(0,0,0,0.16), 0 0 0 0 rgba(0,0,0,0.08);
  border-radius: 10%;
}

.rarity-default span{
  border-bottom: solid 3px grey;
  color: black;
  /* color: grey; */
}

.rarity-rare span{
  border-bottom: solid 3px orange;
  color: black;
  /* color: orange; */
}

.rarity-epic span{
  border-bottom: solid 3px purple;
  color: black;
  /* color: purple; */
}

.rarity-legend span{
  border-bottom: solid 3px blue;
  color: black;
  /* color: blue; */
}

</style>
