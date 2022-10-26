<template>
  <div class="aggregate_four">
      <div class="left">
        <!-- 奖惩看板 -->
        <div v-if="true" id="rewards">
          <div class="gradient">奖惩看板</div>
          <div class="date">
            <el-date-picker
              class="picker_date2"
              v-model="rewards_date"
              value-format="yyyy-MM-dd"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
          <div id="category"></div>
          <div id="grade"></div>
        </div>
        <div v-else class="rewards">
          <div class="gradient">奖惩看板</div>
          <div class="date">
            <el-date-picker
              class="picker_date2"
              v-model="rewards_date"
              value-format="yyyy-MM-dd"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
          <div id="category"></div>
          <div id="grade"></div>
        </div>
        <!-- 招聘看板 -->
        <div v-show="true" class="training">
          <div class="gradient">招聘看板</div>
          <div id="recruitment1"></div>
          <div class="line"></div>
          <div id="recruitment2"></div>
        </div>
      </div>
      <div class="right">
        <div class="gradient">培训看板</div>
        <div id="level3"></div>
        <div id="leve_sum"></div>
        <div id="leve_dc"></div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      rewards_date: "", // 奖惩看板日历数据
      category_data: [ // 奖惩类别
        { value: 7350, name: "表现优秀" },
        { value: 5800, name: "违反工作纪律" },
        { value: 1080, name: "违反生活纪律" },
        { value: 4840, name: "品行操守不良" },
        { value: 4840, name: "违反资训安全" },
        { value: 4840, name: "违反安全事故" },
        { value: 4840, name: "违法或犯罪嫌疑" },
      ],
      grade_data: [ // 奖惩等级
        { value: 7350, name: "嘉奖一次" },
        { value: 5800, name: "大工一次" },
        { value: 1080, name: "小功一次" },
        { value: 4840, name: "警告一次" },
        { value: 4840, name: "警告二次" },
        { value: 4840, name: "小过一次" },
        { value: 4840, name: "小过两次" },
        { value: 4840, name: "大过一次" },
        { value: 4840, name: "大过二次" },
        { value: 4840, name: "违纪除名" },
        { value: 4840, name: "旷工除名" },
      ],
      recruitment_total_data: [ // 招聘看_总需求
        // ["product", "总需求", "報到人數"],
        ["基础人力", 560, 400],
        ["社招", 550, 410],
        ["校招", 400, 333],
      ],
      recruitment_reach_data: { // 招聘看板_总达成
        y: [90, 70, 40],
        x: ["基础人力", "社招", "校招"],
      },
      leve3_data: [ // 培训看板(三级安全达成率)
        {
          value: 88,
          name: "达成率",
        },
      ],
      level_sum_data: [90], // 培训看板（总达成率
      Level_dc_data: { // 培训看板（各事业群达成率）
        y: [80, 79, 88, 95, 46, 76],
        x: ["CNEG", "Org.C", "G中央周邊", "IPBG", "CPEG", "NPEG"]
      }
    }
  },
  mounted() {
    this.Category();
    this.Grade();
    this.Recruitment1();
    this.Recruitment2();
    this.Level3();
    this.Level_sum();
    this.Level_dc();
  },
  methods: {
    //奖惩类别 (數組對象)
    Category () {
      let myChart = this.$echarts.init(document.querySelector("#category"));
      myChart.setOption({
        color: [
          "#17a9a8",
          "#42d8b5",
          "#b3dbc0",
          "#c1acd5",
          "#e195f0",
          "#f48081",
          "#fec1a4",
          "#1a8bdb",
          "#3ba372",
          "#f6c113",
          "#fc8452",
          "#e97ccb",
        ],
        title: {
          text: "奖惩类别",
          left: "left",
          textStyle: {
            fontSize: 14,
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "horizontal",
          bottom: "10px",
          type: "scroll",
          show: true,
          textStyle: {
            fontSize: 11,
          },
        },
        series: [
          {
            name: "类别：人数",
            type: "pie",
            radius: "70%",
            center: ["50%", "40%"],
            data: this.category_data,
            label: {
              normal: {
                position: "inner",
                textStyle: {
                  fontWeight: 400,
                  fontSize: 12,
                  color: "black",
                },
                formatter: "{d}%",
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
    //奖惩等级 (數組對象)
    Grade () {
      let myChart = this.$echarts.init(document.querySelector("#grade"));
      myChart.setOption({
        color: [
          "#ef547e",
          "#17a9a8",
          "#f6b163",
          "#42d8b5",
          "#b3dbc0",
          "#c1acd5",
          "#e195f0",
          "#f48081",
          "#1a8bdb",
          "#f6c113",
          "#9a60b4",
          "#e97ccb",
        ],
        title: {
          text: "奖惩等级",
          left: "left",
          textStyle: {
            fontSize: 14,
          },
        },
        tooltip: {
          trigger: "item",
          textStyle: {
            "font-size": 12,
          },
        },
        legend: {
          type: "scroll",
          show: true,
          orient: "horizontal",
          bottom: "10px",
        },
        series: [
          {
            name: "等级：人数",
            type: "pie",
            radius: "70%",
            center: ["50%", "40%"],
            data: this.grade_data,
            label: {
              normal: {
                position: "inner",
                textStyle: {
                  fontWeight: 400,
                  fontSize: 12,
                  color: "black",
                },
                formatter: "{d}%",
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
    //招聘看板_总需求 (二維數組)
    Recruitment1 () {
      let myChart = this.$echarts.init(document.querySelector("#recruitment1"));
      myChart.setOption({
        color: ["#7ddfde", "#fce073"],
        legend: {},
        tooltip: {},
        dataset: {
          source: this.recruitment_total_data,
        },
        xAxis: { type: "category" },
        yAxis: {
          name: "单位(人)",
          // color: '#04b895'
        },
        grid: {
          bottom: 40,
        },
        series: [
          {
            type: "bar",
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示数值
                  position: "top", //数值在上方显示
                  textStyle: {
                    //数值样式
                    color: "#140c0a", //字体颜色
                    fontSize: 14, //字体大小
                  },
                },
              },
            },
          },
          {
            type: "bar",
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示数值
                  position: "top", //数值在上方显示
                  textStyle: {
                    //数值样式
                    color: "#140c0a", //字体颜色
                    fontSize: 14, //字体大小
                  },
                },
              },
            },
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //招聘看板_达成率 (數組)
    Recruitment2 () {
      let myChart = this.$echarts.init(document.querySelector("#recruitment2"));
      myChart.setOption({
        title: {
          text: "",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          show: false,
        },
        yAxis: [
          {
            type: "category",
            data: this.recruitment_reach_data.x,
            inverse: true,
            //不显示相关的线
            axisLine: {
              show: false,
            },
            //不显示刻度
            axisTick: {
              show: false,
            },
          },
          {
            show: false,
            type: "category",
            data: ["100", "100", "100"],
            //不显示相关的线
            axisLine: {
              show: false,
            },
            //不显示刻度
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "达成率",
            type: "bar",
            data: this.recruitment_reach_data.y,
            yAxisIndex: 0,
            zlevel: 1,
            //修改第一组柱子的圆角
            itemStyle: {
              barBorderRadius: 20,
              color: "#73d5d4",
            },
            //柱子间的距离
            barCategoryGap: 10,
            //柱子的宽度
            barWidth: 25,
            //显示柱子内的文字
            label: {
              show: true,
              position: "inside",
              formatter: "{c}%",
            },
          },
          {
            name: "100%",
            type: "bar",
            data: [100, 100, 100],
            yAxisIndex: 1,
            barCategoryGap: 10,
            barWidth: 25, //宽度
            itemStyle: {
              color: "#c1e4e0",
              // borderColor: "#00c1de",
              borderWidth: 2,
              barBorderRadius: 15,
            },
            label: {
              show: true,
              position: "right",
              formatter: "{c}%",
            },
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //培训看板(三级安全达成率) (數組對象)
    Level3 () {
      let myChart = this.$echarts.init(document.querySelector("#level3"));
      myChart.setOption({
        title: {
          text: "三级安全达成率",
          textStyle: {
            fontSize: 14,
          },
          padding: [5, 0, 0, 20],
        },
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "部門三級安全總體達成率",
            type: "gauge",
            radius: "80%",
            center: ["50%", "55%"],
            // 轴线
            axisLine: {
              show: true,
              roundCap: true,
              lineStyle: {
                width: 15,
                color: [[1, "#c1e4e0"]],
              },
            },
            // 进度条样式
            progress: {
              show: true,
              roundCap: true,
              width: 15,
              itemStyle: {
                color: "#73d5d4",
                borderColor: "#73d5d4",
                borderWidth: 15,
              },
            },
            // 刻度样式
            axisTick: {
              show: true,
              distance: 15,
              lineStyle: {
                color: "#73d5d4",
              },
            },
            // 大刻度
            splitLine: {
              show: true,
              distance: 15,
              lineStyle: {
                color: "#73d5d4",
              },
            },
            // 刻度字体
            axisLabel: {
              show: true,
              distance: 20,
            },
            // 指针固定点
            anchor: {
              show: true,
              showAbove: true,
              size: 25,
              itemStyle: {
                color: "#73d5d4",
              },
            },
            // 指针样式
            itemStyle: {
              color: "#73d5d4",
              borderWidth: 10,
            },
            detail: {
              valueAnimation: true,
              formatter: "{value}",
              color: "#f8c10e",
              offsetCenter: ["0%", "50%"],
            },
            data: this.leve3_data,
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //培训看板（总达成率）(數組)
    Level_sum () {
      let myChart = this.$echarts.init(document.querySelector("#leve_sum"));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          show: false,
        },
        yAxis: [
          {
            type: "category",
            data: ["达成率"],
            inverse: true,
            //不显示相关的线
            axisLine: {
              show: false,
            },
            //不显示刻度
            axisTick: {
              show: false,
            },
          },
          {
            show: false,
            type: "category",
            data: ["100"],
            //不显示相关的线
            axisLine: {
              show: false,
            },
            //不显示刻度
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "达成率",
            type: "bar",
            data: this.level_sum_data,
            yAxisIndex: 0,
            zlevel: 1,
            //修改第一组柱子的圆角
            itemStyle: {
              barBorderRadius: 20,
              color: "#73d5d4",
            },
            //柱子间的距离
            barCategoryGap: 10,
            //柱子的宽度
            barWidth: 20,
            //显示柱子内的文字
            label: {
              show: true,
              position: "inside",
              formatter: "{c}%",
            },
          },
          {
            name: "总达成率",
            type: "bar",
            data: [100],
            yAxisIndex: 1,
            barCategoryGap: 10,
            barWidth: 20, //宽度
            itemStyle: {
              color: "#c1e4e0",
              // borderColor: "#00c1de",
              borderWidth: 2,
              barBorderRadius: 15,
            },
            label: {
              show: true,
              position: "right",
              formatter: "{c}%",
            },
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //培训看板（各事业群达成率）(數組對象)
    Level_dc () {
      let myChart = this.$echarts.init(document.querySelector("#leve_dc"));
      myChart.setOption({
        color: ["#73d5d4"],
        title: {
          text: "培訓計劃達成率",
          textStyle: {
            fontSize: 13,
          },
        },
        xAxis: {
          type: "category",
          data: this.Level_dc_data.x,
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              fontSize: "9",
              color: "#676767",
            },
            formatter: function (params) {
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 5;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = "";
                  var start = p * provideNumber;
                  var end = start + provideNumber;
                  if (p == rowNumber - 1) {
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    tempStr = params.substring(start, end) + "\n";
                  }
                  newParamsName += tempStr;
                }
              } else {
                newParamsName = params;
              }
              return newParamsName;
            },
          },
          axisLine: {
            lineStyle: {
              color: "#73d5d4",
            },
          },
        },
        yAxis: {
          name: "單位(%)",
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#e4f6f6"],
              width: 2,
            },
          },
        },
        series: [
          {
            data: this.Level_dc_data.y,
            type: "bar",
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示数值
                  position: "top", //数值在上方显示
                  textStyle: {
                    //数值样式
                    color: "#140c0a", //字体颜色
                    fontSize: 14, //字体大小
                  },
                },
              },
            },
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }
  },
}
</script>

<style lang="scss" scoped>
// 第四板块（奖惩、培训、招聘）
.aggregate_four {
  display: flex;
  height: 760px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px;
  .left {
    overflow: hidden;
    margin-right: 20px;
    width: 69%;
    height: 100%;
    #rewards {
      display: flex;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      width: 100%;
      height: 360px;
      background-color: #fff;
      .date {
        position: absolute;
        right: 50%;
        transform: translateX(50%);
        top: 20px;
        width: 260px;
      }
      #category {
        width: 50%;
        height: 270px;
        margin-top: 70px;
        margin-bottom: 20px;
        border-right: solid 1px #83e5e4;
        box-sizing: border-box;
        padding: 0 20px;
      }
      #grade {
        width: 50%;
        height: 270px;
        margin-top: 70px;
        margin-bottom: 20px;
        box-sizing: border-box;
        padding: 0 20px;
      }
      .cg_h {
      }
    }
    .rewards {
      display: flex;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      width: 100%;
      height: 760px;
      background-color: #fff;
      .date {
        position: absolute;
        right: 50%;
        transform: translateX(50%);
        top: 20px;
        width: 260px;
      }
      #category {
        width: 50%;
        height: 600px;
        margin-top: 70px;
        margin-bottom: 20px;
        border-right: solid 1px #83e5e4;
        box-sizing: border-box;
        padding: 0 20px;
      }
      #grade {
        width: 50%;
        height: 600px;
        margin-top: 70px;
        margin-bottom: 20px;
        box-sizing: border-box;
        padding: 0 20px;
      }
    }
    .training {
      position: relative;
      display: flex;
      justify-content: space-between;
      border-radius: 10px;
      width: 100%;
      height: 380px;
      overflow: hidden;
      margin-top: 20px;
      background-color: #fff;
      #recruitment1 {
        margin-top: 50px;
        width: 50%;
        height: 330px;
        box-sizing: border-box;
        padding: 0 10px;
      }
      .line {
        margin-top: 70px;
        width: 1px;
        height: 70%;
        background-color: #83e5e4;
      }
      #recruitment2 {
        margin-top: 50px;
        width: 50%;
        height: 330px;
        box-sizing: border-box;
        padding: 0 10px;
      }
    }
  }
  .right {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    width: 31%;
    height: 100%;
    background-color: #fff;
    #level3 {
      margin-top: 50px;
      width: 100%;
      height: 300px;
      // background-color: #94a4fc;
    }
    #leve_sum {
      margin-top: 20px;
      width: 100%;
      height: 60px;
      // background-color: #2e9ece;
    }
    #leve_dc {
      margin-top: 20px;
      width: 100%;
      height: 330px;
      // background-color: #41b857;
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