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
        show: false,
        max: 100,
        min: 0,
      },
      yAxis: {
        show: false,
        //均分
        type: "category",
      },
      series: {
        type: "bar",
        data: [78],
        color: "#64d991",
        //柱状图的宽度
        barWidth: 10,
        //背景颜色的设置
        showBackground: true,
        backgroundStyle: {
          color: "#eee",
        },
        //文本设置
        label: {
          show: true,
          //改变文本的内容
          formatter: "|",
          //文本标签的位置的调试
          position: "right",
        },
      },
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
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