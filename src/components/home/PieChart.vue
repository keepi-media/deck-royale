<template>
    <highcharts :options="chartOptions"></highcharts>  
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie"
        },
        exporting: {
          enabled: false
        },
        title: {
          text: ""
        },
        series: [
          {
            name: 'Deck Royale',
            data: this.data
          }
        ]
      }
    };
  }
};
</script>
<style>

</style>

