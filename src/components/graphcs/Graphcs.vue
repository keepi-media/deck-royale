<template>
  <div class="chartElem">
    <h2>Select the filter type of the chart</h2>
    <div class="FiltersLayer">
      <button type="button" class="BtnFilter" v-on:click="getMinTrophies"><label>Min Trophies per league</label></button>
      <button type="button" class="BtnFilter" v-on:click="kingsHealth"><label>King Health per arena</label></button>
      <button type="button" class="BtnFilter" v-on:click="towerHealthPoints"><label>Tower Health per arena</label></button>
      <button type="button" class="BtnFilter" v-on:click="chests"><label>Chests gold average</label></button>
      <button type="button" class="BtnFilter" v-on:click="chestsByArena"><label>Chests by arena</label></button>
      <button type="button" class="BtnFilter" v-on:click="gemChestCost"><label>Chests gem cost</label></button>
      <button type="button" class="BtnFilter" v-on:click="cardCount"><label>Card rarity count</label></button>
      <button type="button" class="BtnFilter" v-on:click="cardsByArena"><label>Card arena count</label></button>
    </div>
    <highcharts class="" :options="chartOptions" :updateArgs="updateArgs"></highcharts>
  </div>
</template>

<script>
import ClashService from '../../domain/clash/ClashService';

export default {
  data () {
    return {
      service: null,
      names: [],
      chartOptions: {
        chart:{
            type: 'column'
          },
          series: [{
            name: '',
            data: [],
          }],
          xAxis : {
            categories: []
          },
          title:{
            text: ''
          },
      },
      updateArgs: [true, true, {duration: 100}]
    }
  },
  created () {
    this.service = new ClashService(this.$resource);
    this.service
        .listArenas()
        .then(data => {
          let names = []
          data.forEach(elem => {
            names.push(elem.name)
          })
          this.names = names
        })    
  },
  methods: {
    cardsByArena(){
      this.service
        .listCards()
        .then(data => {
          let count = new Array(this.names.length).fill(0), leg = ['Common', 'Rare', 'Epic', 'Legendary']
          data.forEach(elem => {
            count[elem.arena] += 1
          })

          let Options = {
              chart:{
                type: 'column'
              },
              series: [{
                name: 'Cards count',
                data: count,
                color: "orange"
              }],
              xAxis : {
                categories: this.names
              },
              title:{
                text: 'Count of cards in each arena'
              },
            }
            this.chartOptions = Options
        })
    },
    cardCount(){
      this.service
        .listCards()
        .then(data => {
          console.log(data[0])
          let count = new Array(4).fill(0), leg = ['Common', 'Rare', 'Epic', 'Legendary']
          data.forEach(elem => {
            count[elem.rarity === 'Common' ? 0 : 
                  elem.rarity === 'Rare' ? 1 :
                  elem.rarity === 'Epic' ? 2 : 3] += 1
          })

          let Options = {
              chart:{
                type: 'column'
              },
              series: [{
                name: 'Cards raritys count',
                data: count,
                color: "green"
              }],
              xAxis : {
                categories: leg
              },
              title:{
                text: 'Cards raritys count'
              },
            }
            this.chartOptions = Options
        })
    },
    gemChestCost(){
      this.service
        .listChests()
        .then(data => {
          data.forEach(elem => {
            let names = [], cost = new Array(this.names.length).fill(0), count = new Array(this.names.length).fill(0)
            
            data.forEach(elem => {
              cost[elem.arena] += elem.gemCost
              count[elem.arena] += 1
            })

            for(let i = 0; i < cost.length; i++){
              cost[i] /= count[i]
              cost[i] = parseInt(cost[i] * 100) / 100
            }

            let Options = {
              chart:{
                type: 'column'
              },
              series: [{
                name: 'Chest gem cost average',
                data: cost,
                color: "gold"
              }],
              xAxis : {
                categories: this.names
              },
              title:{
                text: 'Gem cost average to open chest by each arena'
              },
            }
            this.chartOptions = Options
          })
      })
    },
    chestsByArena(){
      this.service
      .listChests()
      .then(data => {
        data.forEach(elem => {
          let names = [], count = new Array(this.names.length).fill(0)
          data.forEach(elem => {
            count[elem.arena] += 1
          })

          let Options = {
            chart:{
              type: 'column'
            },
            series: [{
              name: 'Chest arena count',
              data: count,
              color: "brown"
            }],
            xAxis : {
              categories: this.names
            },
            title:{
              text: 'Count of all disponible chests in each arena'
            },
          }
          this.chartOptions = Options
        })
      })
    },
    chests(){
      this.service
      .listChests()
      .then(data => {
        data.forEach(elem => {
          let names = [], arenas = new Array(this.names.length).fill(0), count = new Array(this.names.length).fill(0)
          
          data.forEach(elem => {
            arenas[elem.arena] += (elem.gold.max + elem.gold.min) / 2
            count[elem.arena] += 1
          })

          for(let i = 0; i < arenas.length; i++){
            arenas[i] /= count[i]
            arenas[i] = parseInt(arenas[i] * 100) / 100
          }


          let Options = {
            chart:{
              type: 'spline'
            },
            series: [{
              name: 'Gold average',
              data: arenas,
              color: "gold"
            }],
            xAxis : {
              categories: this.names
            },
            title:{
              text: 'Gold average by chest in each arena'
            },
          }
          this.chartOptions = Options
        })
      })
    },
    kingsHealth(){
       this.service
      .listPlayers()
      .then(data => {
        let hitPoints = [], damage = []

        data.forEach(elem => {
          hitPoints.push({
            name: elem.idName,
            y: elem.kingsTower.hitpoints,
          })
        })

        let Options = {
          chart:{
            type: 'spline'
          },
          series: [{
            name: 'Health',
            data: hitPoints,
            color: "red"
          }],
          xAxis : {
            categories: this.names
          },
          title:{
            text: 'King Tower Health'
          },
        }
        this.chartOptions = Options
      })
    },
    towerHealthPoints(){
       this.service
        .listPlayers()
        .then(data => {
          let hitPoints = [], damage = []
          console.log(data[0])
          data.forEach(elem => {
            hitPoints.push({
              name: elem.idName,
              y: elem.arenaTowers.hitpoints,
            })
          })

          let Options = {
            chart:{
              type: 'spline'
            },
            series: [{
              name: 'Health',
              data: hitPoints,
              color: "blue"
            }],
            xAxis : {
              categories: this.names
            },
            title:{
              text: 'Arena Tower Health'
            },
          }
          this.chartOptions = Options
        })
    },
    getMinTrophies(){
      let Options = {}
      this.service
        .listLeagues()
        .then(leagues => {
          let minTrophies = [], names = []

          leagues.forEach(elem => {
            minTrophies.push({
              name: elem.name,
              y: elem.minTrophies,
              color: "purple"
              })
            names.push(elem.name)
          })

          Options = {
            chart:{
              type: 'column'
            },
            series: [{
              name: 'Leagues',
              data: minTrophies,
            }],
            xAxis : {
              categories: names
            },
            title:{
              text: 'Leagues min trophies'
            },
          }
          this.chartOptions = Options
        })
    }
  }
}
</script>

<style>
  .chartElem h2 {
    color: #063d73;
  }
  .FiltersLayer {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;;
  }
  .BtnFilter {
    height: 40px;
    border-radius: 30px;
    border: solid 1px #063d73;
    background-color: white;
  }
  .BtnFilter label {
    color: #063d73;
    font-size: 14px;
  }
  .BtnFilter:hover, .BtnFilter label:hover{
    cursor: pointer;
    transform: scale(1.02);
  }
</style>