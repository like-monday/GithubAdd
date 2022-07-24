<template>
  <!-- 容器 -->
  <div class="charts" ref="charts"></div>
</template>
 
<script>
// 引入echarts
import echarts from "echarts";
// import * as echarts from "echarts";

export default {
  mounted() {
    let barCharts = echarts.init(this.$refs.charts);
    barCharts.setOption({
      xAxis: {
        //隐藏x轴
        show: false,
        type: "category",
      },
      yAxis: {
        //隐藏y轴
        show: false,
      },
      series: [
        {
          type: "bar",
          data: [15, 56, 98, 50, 66, 44, 80, 10, 23, 50],
          color: "skyblue",
        },
      ],
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      tooltip: {},
    });
  },
};
</script>

<style scoped>
.charts {
  widows: 100%;
  height: 100%;
}
</style>