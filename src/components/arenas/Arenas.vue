<template>
  <div>
    <div class="arena_todo">
      <li class="ArenaLayer" v-for="(arena, index) in arenas" v-bind:key="arena.id">
        <div class="each_arena" :class="Odd(index)">
          <div class="ArenaImage">
            <img 
              :src="`http://www.clashapi.xyz/images/arenas/${arena.idName}.png`" 
              :alt="arena.idName" 
            >
          </div>
          <div class="col-md-4">
            <about-arenas :arena="arena"/>
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import AboutArenas from './AboutArenas.vue';
import ClashService from '../../domain/clash/ClashService';

export default {
  components: {
    'about-arenas': AboutArenas
  },

  methods: {
    Odd(index){
      if(index % 2 === 0)
        return "DarkBackground"
      else
        return "LightBackground"
    }
  },

  data() {

    return {
      arenas: [],
      message: '',
    }
  },

  created() {

    this.service = new ClashService(this.$resource);

    this.service
      .listArenas()
      .then(arenas => this.arenas = arenas, err => this.message = err.message);
  }
}

</script>

<style scoped>
  .list-deck {
    list-style: none;
  }

  .list-deck .list-deck-item {
    display: inline-block;
    overflow: hidden;
  }

  .arena_todo {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  .DarkBackground {
    background-color: #456ec0;
  }

  .each_arena {
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding: 30px 0;
    width: 100%;
  }

  .ArenaImage {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }

  .ArenaImage img {
    width: 50%;
    background-size: contain;
  }

  .ArenaLayer {
    margin-bottom: 0;
  }

  li {
    list-style-type: none;
    margin-bottom: 40px;
  }
</style>
