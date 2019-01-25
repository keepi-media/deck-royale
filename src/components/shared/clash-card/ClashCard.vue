<template>
  <div class="card-image " :class="rarityStyle">
    <p class="card-title center"><span>{{name}}</span></p>
    <img class="img-responsive" :src="url" :alt="idName">
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
  font-size: 20px;
  color: #000;
}

.card-image {
  /* background-color: #ecf1f0; */
  padding: 5px;
  margin: 5px 3px;
  text-align: center;
  height: 100%;
  border-radius: 10px;

}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
} 






/* VOU MEXER AQUI  */
/* CORES DE ACORDO COM A RARIDADE */


.rarity-default span {
  
  /* border-bottom: solid 3px grey; */
  color: grey;
}

.rarity-rare span{
  /* border-bottom: solid 3px orange; */
  color: orange;
}

.rarity-epic span{
  /* border-bottom: solid 3px purple; */
  color: purple;
}

.rarity-legend span{
  /* border-bottom: solid 3px blue; */
  color: blue;
}
</style>
