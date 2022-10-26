<template>
  <div class="aggregate_two">
      <div class="qualification">
        <!-- 彩色标题 -->
        <div class="gradient">年资分布</div>
        <div id="qualification_c"></div>
      </div>
      <div class="map">
        <!-- 彩色标题 -->
        <div class="gradient">籍贯分布</div>
        <div id="map_c"></div>
      </div>
      <div class="seniority">
        <!-- 彩色标题 -->
        <div class="gradient">资位分布</div>
        <div id="gradient_c"></div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      qualification_data: [ // 年资分布
        { value: 1048, name: "试用期以内" },
        { value: 735, name: "试用期满1年" },
        { value: 580, name: "1-3年" },
        { value: 484, name: "3-6年" },
        { value: 300, name: "6年以上" },
      ],
      map_data: [{ // 籍贯分布
        name: "北京",
        value: "10000",
      },
      {
        name: "天津",
        value: 500,
      },
      {
        name: "上海",
        value: 1600,
      },
      {
        name: "重庆",
        value: 600,
      },
      {
        name: "河北",
        value: 100,
      }],
      seniority_data: [ // 资位分布
        { value: 7350, name: "师1~师3" },
        { value: 5800, name: "师4~师7" },
        { value: 1080, name: "员级(派遣工~员三)" },
        { value: 4840, name: "师8以上" },
      ],
    }
  },
  mounted() {
    this.Qualification();
    this.Seniority();
    // this.Maps();
  },
  methods: {
    //年资分布 (數組對象)
    Qualification () {
      let qualification_data = [
        { value: 1048, name: "试用期以内" },
        { value: 735, name: "试用期满1年" },
        { value: 580, name: "1-3年" },
        { value: 484, name: "3-6年" },
        { value: 300, name: "6年以上" },
      ];
      let angle = 0; //角度，用来做简单的动画效果的
      let timerId;
      const colors = ["#ea537c", "#fed964", "#b3dbc0", "#17a9a8", "#6fd4d0"];
      let myChart = this.$echarts.init(
        document.querySelector("#qualification_c"),
        null,
        { renderer: "svg" }
      );
      let option = {
        color: colors,
        tooltip: {
          trigger: "item",
        },
        legend: {
          show: true,
          orient: "horizontal",
          padding: [0, 0, 30, 0],
          top: "bottom",
        },
        series: [
          {
            name: "年资：人数",
            type: "pie",
            center: ["50%", "50%"], //圆心的位置
            radius: ["30%", "55%"], //环形图的本质就在这里 [内半径!=0，外半径] 外半径越大，圆越大
            avoidLabelOverlap: false, //做同心圆用到
            clockwise: false, //顺时针排列
            startAngle: 90, //起始角度 影响不大
            label: {
              normal: {
                show: true,
                position: "inner",
                textStyle: {
                  fontWeight: 400,
                  fontSize: 12,
                  color: "black",
                },
                formatter: "{c}人\n({d}%)",
              },
            },
            data: qualification_data.sort((a, b) => b.value - a.value), //数组从大到小排序
          },
          //colors[0]line
          {
            name: "",
            type: "custom",
            coordinateSystem: "none",
            renderItem: function (params, api) {
              return {
                type: "arc",
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                  startAngle: ((0 + angle) * Math.PI) / 180,
                  endAngle: ((90 + angle) * Math.PI) / 180,
                },
                style: {
                  stroke: colors[0],
                  fill: "transparent",
                  lineWidth: 1.5,
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: "", //        //colors[0]dot
            type: "custom",
            coordinateSystem: "none",
            renderItem: function (params, api) {
              let x0 = api.getWidth() / 2;
              let y0 = api.getHeight() / 2;
              let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6;
              let point = getCirlPoint(x0, y0, r, 90 + angle);
              return {
                type: "circle",
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 4,
                },
                style: {
                  stroke: colors[0],
                  fill: colors[0],
                },
                silent: true,
              };
            },
            data: [0],
          },
          // 蓝色
          {
            name: "",
            type: "custom",
            coordinateSystem: "none",
            renderItem: function (params, api) {
              return {
                type: "arc",
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                  startAngle: ((180 + angle) * Math.PI) / 180,
                  endAngle: ((270 + angle) * Math.PI) / 180,
                },
                style: {
                  stroke: colors[1],
                  fill: "transparent",
                  lineWidth: 1.5,
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: "", // 蓝色
            type: "custom",
            coordinateSystem: "none",
            renderItem: function (params, api) {
              let x0 = api.getWidth() / 2;
              let y0 = api.getHeight() / 2;
              let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6;
              let point = getCirlPoint(x0, y0, r, 180 + angle);
              return {
                type: "circle",
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 4,
                },
                style: {
                  stroke: colors[1], //绿
                  fill: colors[1],
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: "",
            type: "custom",
            coordinateSystem: "none",
            renderItem: function (params, api) {
              return {
                type: "arc",
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                  startAngle: ((270 + -angle) * Math.PI) / 180,
                  endAngle: ((40 + -angle) * Math.PI) / 180,
                },
                style: {
                  stroke: colors[2],
                  fill: "transparent",
                  lineWidth: 1.5,
                },
                silent: true,
              };
            },
            data: [0],
          },
          // 橘色
          {
            name: "",
            type: "custom",
            coordinateSystem: "none",
            renderItem: function (params, api) {
              return {
                type: "arc",
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                  startAngle: ((90 + -angle) * Math.PI) / 180,
                  endAngle: ((220 + -angle) * Math.PI) / 180,
                },
                style: {
                  stroke: colors[2],
                  fill: "transparent",
                  lineWidth: 1.5,
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: "",
            type: "custom",
            coordinateSystem: "none",
            renderItem: function (params, api) {
              let x0 = api.getWidth() / 2;
              let y0 = api.getHeight() / 2;
              let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
              let point = getCirlPoint(x0, y0, r, 90 + -angle);
              return {
                type: "circle",
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 4,
                },
                style: {
                  stroke: colors[3], //粉
                  fill: colors[3],
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: "", //绿点
            type: "custom",
            coordinateSystem: "none",
            renderItem: function (params, api) {
              let x0 = api.getWidth() / 2;
              let y0 = api.getHeight() / 2;
              let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
              let point = getCirlPoint(x0, y0, r, 270 + -angle);
              return {
                type: "circle",
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 4,
                },
                style: {
                  stroke: colors[3], //绿
                  fill: colors[3],
                },
                silent: true,
              };
            },
            data: [0],
          },
        ],
      };
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
      function getCirlPoint (x0, y0, r, angle) {
        let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
        let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
        return {
          x: x1,
          y: y1,
        };
      }
      function draw () {
        angle = angle + 3;
        myChart.setOption(option);
        //window.requestAnimationFrame(draw);
      }
      draw();
      setTimeout(function () {
        if (timerId) {
          clearInterval(timerId);
        }
        timerId = setInterval(function () {
          //用setInterval做动画感觉有问题
          draw();
        }, 100);
      }, 500);
    },
    //地图 (數組對象)
    Maps () {
      function randomData () {
        return Math.round(Math.random() * 500);
      }
      var mydata = [
        {
          name: "北京",
          value: "10000",
        },
        {
          name: "天津",
          value: randomData(),
        },
        {
          name: "上海",
          value: randomData(),
        },
        {
          name: "重庆",
          value: randomData(),
        },
        {
          name: "河北",
          value: randomData(),
        },
        {
          name: "河南",
          value: randomData(),
        },
        {
          name: "云南",
          value: randomData(),
        },
        {
          name: "辽宁",
          value: randomData(),
        },
        {
          name: "黑龙江",
          value: randomData(),
        },
        {
          name: "湖南",
          value: randomData(),
        },
        {
          name: "安徽",
          value: randomData(),
        },
        {
          name: "山东",
          value: randomData(),
        },
        {
          name: "新疆",
          value: randomData(),
        },
        {
          name: "江苏",
          value: randomData(),
        },
        {
          name: "浙江",
          value: randomData(),
        },
        {
          name: "江西",
          value: randomData(),
        },
        {
          name: "湖北",
          value: randomData(),
        },
        {
          name: "广西",
          value: randomData(),
        },
        {
          name: "甘肃",
          value: randomData(),
        },
        {
          name: "山西",
          value: randomData(),
        },
        {
          name: "内蒙古",
          value: randomData(),
        },
        {
          name: "陕西",
          value: randomData(),
        },
        {
          name: "吉林",
          value: randomData(),
        },
        {
          name: "福建",
          value: randomData(),
        },
        {
          name: "贵州",
          value: randomData(),
        },
        {
          name: "广东",
          value: randomData(),
        },
        {
          name: "青海",
          value: randomData(),
        },
        {
          name: "西藏",
          value: randomData(),
        },
        {
          name: "四川",
          value: randomData(),
        },
        {
          name: "宁夏",
          value: randomData(),
        },
        {
          name: "海南",
          value: randomData(),
        },
        {
          name: "台湾",
          value: randomData(),
        },
        {
          name: "香港",
          value: randomData(),
        },
        {
          name: "澳门",
          value: randomData(),
        },
      ];
      var optionMap = {
        // backgroundColor: "#FFFFFF",
        tooltip: {
          trigger: "item",
        },
        //左侧小导航图标
        visualMap: {
          show: true,
          x: "left",
          y: "bottom",
          left: "20",
          splitList: [
            {
              start: 2501,
              end: 100000,
            },
            {
              start: 20001,
              end: 2500,
            },
            {
              start: 1501,
              end: 2000,
            },
            {
              start: 1001,
              end: 1500,
            },
            {
              start: 501,
              end: 1000,
            },
            {
              start: 0,
              end: 500,
            },
          ],
          color: [
            "#a0b5ea",
            "#85daef",
            "#17a9a8",
            "#74bcc8",
            "#f3feb9",
            "#6fc1b2",
          ],
        },
        //配置属性
        series: [
          {
            name: "人数",
            type: "map",
            mapType: "china",
            roam: true,
            label: {
              normal: {
                show: true, //省份名称
                fontSize: 12,
              },
              emphasis: {
                focus: "self",
              },
            },
            itemStyle: {
              normal: {
                areaColor: "#36a7c7", //设置小岛的颜色
                // borderColor: "#36a7c7",
                borderColor: "#fff",
                borderWidth: 1,
              },
              emphasis: {
                show: false,
                areaColor: null,
              },
            },
            scaleLimit: {
              min: "0.7",
              max: "4",
            },
            data: this.map_data, //数据
          },
        ],
      };
      //初始化echarts实例
      var myChart = this.$echarts.init(document.querySelector("#map_c"), null, {
        renderer: "svg",
      });
      //使用制定的配置项和数据显示图表
      myChart.setOption(optionMap);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //资位分布 (數組對象)
    Seniority () {
      let myChart = this.$echarts.init(document.querySelector("#gradient_c"));
      myChart.setOption({
        color: ["#70d3d0", "#17a9a8", "#ffda65", "#eb547d"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          show: true,
          orient: "horizontal",
          padding: [0, 0, 30, 0],
          top: "bottom",
        },
        series: [
          {
            name: "年资：人数",
            type: "pie",
            radius: "65%",
            data: this.seniority_data,
            label: {
              textStyle: {
                fontSize: 14,
                color: "#000000",
              },
              normal: {
                show: true,
                position: "inner",
                textStyle: {
                  fontWeight: 400,
                  fontSize: 12,
                  color: "black",
                },
                formatter: "{c}人\n({d}%)",
              },
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
}
</script>

<style lang="scss" scoped>
// 第二板块（年资、籍贯、资位）
.aggregate_two {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 40px 20px 40px;
  width: 100%;
  height: 500px;
  // background-color: #22b7b5;
  .qualification {
    position: relative;
    width: 29.4%;
    height: 480px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    #qualification_c {
      width: 100%;
      height: 100%;
    }
  }
  .map {
    position: relative;
    margin: 0 20px;
    height: 480px;
    width: 38.2%;
    #map_c {
      width: 100%;
      height: 100%;
    }
  }
  .seniority {
    position: relative;
    background-color: #fff;
    height: 480px;
    width: 29.4%;
    overflow: hidden;
    border-radius: 10px;
    #gradient_c {
      width: 100%;
      height: 100%;
    }
  }
}

// 彩色标题
.gradient {
  position: absolute;
  font-size: 17px;
  margin: 25px 0px 20px 20px;
  height: 10px;
  align-items: center;
  letter-spacing: 3px;
  text-align: center;
  background-image: linear-gradient(to right, #8d9dfd, #91defa);
  line-height: 0px;
}
/* 190宽度日期组件的大小 */
.picker_date {
  float: right;
  width: 200px;
  min-width: 130px;
  height: 30px;
}
// 修改日期组件的颜色
.aggregate_one,
.aggregate_three,
.aggregate_four {
  .el-input__inner {
    background-color: #effaf8;
    border: none;
  }
  .date {
    ::v-deep .el-range-editor--mini .el-range-separator {
      color: #17a9a8;
    }
    ::v-deep .el-range-editor--mini .el-range-input {
      background-color: #f3f6fd;
    }
    ::v-deep .el-icon-date:before {
      color: #17a9a8;
    }
    ::v-deep .el-date-editor .el-range-input {
      color: #17a9a8;
    }
  }
}
// 修改离职看板日期组件颜色
.resign_header {
  .el-input__inner {
    border: none;
  }
  .date {
    ::v-deep .el-range-editor--mini .el-range-separator {
      color: #17a9a8;
    }
    ::v-deep .el-icon-date:before {
      color: #17a9a8;
    }
    ::v-deep .el-date-editor .el-range-input {
      color: #17a9a8;
    }
  }
}
// 260宽度日期组件大小
.picker_date2 {
  width: 260px;
  min-width: 130px;
  height: 30px;
  color: #17a9a8;
}
</style>