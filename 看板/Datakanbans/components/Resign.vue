<template>
  <div>
    <!-- 离职看板start -->
    <div class="resign_header">
      <div class="title">离职看板</div>
      <div class="date">
        <el-date-picker
          class="picker_date2"
          v-model="quit_date"
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
    </div>
    <!-- 离职看板end -->

    <!-- 原因、年龄、占比start -->
    <div class="aggregate_five">
      <div class="left">
        <div class="resign_why">
          <!-- 彩色标题 -->
          <div class="gradient">离职原因</div>
          <div id="resign_why"></div>
        </div>
        <div class="resign_two">
          <div class="resign_age">
            <!-- 彩色标题 -->
            <div class="gradient">年龄分布</div>
            <div id="resign_age"></div>
          </div>
          <div class="line"></div>
          <div class="resign_position">
            <!-- 彩色标题 -->
            <div class="gradient">资位分布</div>
            <div id="resign_position"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <!-- 彩色标题 -->
        <div class="gradient">离职原因所占百分比</div>
        <div id="resign_bfb"></div>
      </div>
    </div>
    <!-- 原因、年龄、占比end -->

    <!-- 岗位、职位start -->
    <div class="aggregate_six">
      <div class="left">
        <div class="resign_post">
          <!-- 彩色标题 -->
          <div class="gradient">岗位分布</div>
          <div id="resign_post"></div>
        </div>
        <div class="line"></div>
        <div class="resign_kj">
          <!-- 彩色标题 -->
          <div class="gradient">考绩分布</div>
          <div id="resign_kj"></div>
        </div>
      </div>
      <div class="right">
        <!-- 彩色标题 -->
        <div class="gradient">职位分布</div>
        <div id="resign_zw"></div>
      </div>
    </div>
    <!-- 岗位、职位end -->

    <!-- 校招、IDL、年资start -->
    <div class="aggregate_seven">
      <div class="left">
        <div class="resign_school">
          <!-- 彩色标题 -->
          <div class="gradient">校招/非校招分布</div>
          <div id="resign_school"></div>
        </div>
        <div class="line"></div>
        <div class="resign_IDL">
          <!-- 彩色标题 -->
          <div class="gradient">IDL分布</div>
          <div id="resign_IDL"></div>
        </div>
      </div>
      <div class="right">
        <!-- 彩色标题 -->
        <div class="gradient">年资分布</div>
        <div id="resign_nz"></div>
      </div>
    </div>
    <!-- 校招、IDL、年资end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      quit_date: "", // 离职看板日历数据
      resignWhy_data: { // 离职原因
        y: [120, 190, 150, 80, 70, 110, 130, 45, 89, 62, 78, 14, 56, 91, 11, 2, 54],
        x: [
          "工作地点更换",
          "工作志趣差异",
          "不愿意上夜班",
          "加班时间过少",
          "自行创业",
          "身体健康因素",
          "协商解约",
          "周围环境影响",
          "返乡就业",
          "家庭因素",
          "特殊解约",
          "无晋升及发展机会",
          "开除",
          "薪资不满意",
          "转换行业",
          "怀孕保胎",
          "继续深造",
        ]
      },
      resign_Age_data: [ // 离职_年龄分布
        { value: 656, name: "18-25岁" },
        { value: 1000, name: "26-30岁" },
        { value: 580, name: "31-35岁" },
        { value: 962, name: "36-40岁" },
        { value: 600, name: "41岁以上" },
      ],
      resign_position_data: [ // 离职_资位分布
        { value: 500, name: "员级" },
        { value: 735, name: "师一~师三" },
        { value: 980, name: "师四~师五" },
        { value: 484, name: "师六及以上" },
      ],
      resign_bfb_data: [ // 离职_百分比
        { value: 38, name: "工作地点更换" },
        { value: 32, name: "工作志趣差异" },
        { value: 30, name: "不愿意上夜班" },
        { value: 28, name: "加班时间过少" },
        { value: 26, name: "自行创业" },
        { value: 22, name: "身体健康因素" },
        { value: 18, name: "协商解约" },
        { value: 18, name: "周围环境影响" },
        { value: 18, name: "返乡就业" },
        { value: 18, name: "家庭因素" },
        { value: 18, name: "特殊解约" },
        { value: 18, name: "无晋升及发展机会" },
        { value: 18, name: "开除" },
        { value: 18, name: "薪资不满意" },
        { value: 18, name: "转换行业" },
        { value: 18, name: "怀孕保胎" },
        { value: 18, name: "继续深造" },
      ],
      resign_post_data: [ // 离职_岗位分布
        { value: 3720, name: "员级" },
        { value: 2920, name: "师一~师三" },
        { value: 2200, name: "师四~师五" },
        { value: 1420, name: "师六及以上" },
      ],
      resign_kj_data: [ // 离职_考绩分布
        { value: 1048, name: "A+" },
        { value: 800, name: "A" },
        { value: 650, name: "B" },
        { value: 560, name: "C" },
        { value: 404, name: "D" },
      ],
      resign_zw_data: [ // 离职_职位分布
        { value: 426, name: "无" },
        { value: 735, name: "线组级" },
        { value: 580, name: "课级" },
        { value: 658, name: "部级" },
        { value: 854, name: "处级及以上" },
      ],
      resign_school_data: [ // 离职_校招分布
        { value: 1048, name: "人才市场" },
        { value: 735, name: "外调" },
        { value: 580, name: "培训中心" },
        { value: 484, name: "学校招聘" },
      ],
      resign_IDL_data: [ // 离职_IDL分布
        { value: 90, name: "IDL" },
        { value: 48, name: "DI" },
      ],
      resign_nz_data: { // 离职_年资分布
        resign_nz_x: ["3个月以下", "3~6个月", "6个月~1年", "1~3年", "3~5年", "5~10年", "10年以上"],
        resign_nz_y: [1200, 2000, 1500, 800, 700, 110, 210]
      }
    }
  },
  mounted() {
    this.ResignWhy();
    this.Resign_Age();
    this.Resign_position();
    this.Resign_bfb();
    this.Resign_post();
    this.Resign_kj();
    this.Resign_zw();
    this.Resign_school();
    this.Resign_IDL();
    this.Resign_nz();
  },
  methods: {
    //离职原因 (數組)
    ResignWhy () {
      let myChart = this.$echarts.init(document.querySelector("#resign_why"));
      myChart.setOption({
        color: ["#7ddfde"],
        xAxis: {
          type: "category",
          data: this.resignWhy_data._x,
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              fontSize: "10",
              color: "#676767",
            },
            formatter: function (params) {
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 2;
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
              color: "#18a9ac",
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          // 设置贯穿图标y轴刻度
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
            data: this.resignWhy_data.y,
            type: "bar",
            // showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top", //数值在上方显示
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
    //离职_年龄分布 (數組對象)
    Resign_Age () {
      let myChart = this.$echarts.init(document.querySelector("#resign_age"));
      myChart.setOption({
        color: ["#b3dbc0", "#ffdd6d", "#9885f9", "#70d3d0", "#17a9a8"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          right: "right",
          padding: [65, 30, 0, 20],
        },
        series: [
          {
            name: "年龄：人数",
            type: "pie",
            radius: "50%",
            center: ["42%", "60%"],
            data: this.resign_Age_data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //离职_资位分布 (數組對象)
    Resign_position () {
      let myChart = this.$echarts.init(
        document.querySelector("#resign_position")
      );
      myChart.setOption({
        color: ["#ffdd6d", "#70d3d0", "#17a9a8", "#9885f9"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          right: "right",
          padding: [65, 20, 0, 30],
        },
        series: [
          {
            name: "资位：人数",
            type: "pie",
            radius: "50%",
            center: ["42%", "60%"],
            data: this.resign_position_data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //离职_百分比 (數組對象)
    Resign_bfb () {
      let myChart = this.$echarts.init(document.querySelector("#resign_bfb"));
      myChart.setOption({
        color: [
          "#ffda65",
          "#17a9a8",
          "#42d8b5",
          "#70d3d0",
          "#b3dbc0",
          "#9885f9",
          "#c1acd5",
          "#e195f0",
          "#eb547d",
          "#f48081",
          "#fec1a4",
          "#1a8bdb",
          "#3ba372",
          "#f6c113",
          "#fc8452",
          "#9a60b4",
          "#e97ccb",
        ],
        legend: {
          type: "scroll",
          bottom: "20px",
          orient: "horizontal",
          padding: [20, 20, 10, 20],
        },
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b} : {c}人 ({d}%)",
        },
        series: [
          {
            name: "离职情况",
            type: "pie",
            radius: [50, 300],
            center: ["50%", "55%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            label: {
              normal: {
                show: true,
                position: "inner",
                textStyle: {
                  fontWeight: 400,
                  fontSize: 12,
                  color: "black",
                },
                formatter: "{d}%",
              },
            },
            data: this.resign_bfb_data,
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //离职_岗位分布 (數組對象)
    Resign_post () {
      let myChart = this.$echarts.init(document.querySelector("#resign_post"));
      myChart.setOption({
        color: ["#70d3d0", "#17a9a8", "#c1acd7", "#ffd774"],
        legend: {
          type: "scroll",
          right: "right",
          orient: "vertical",
          padding: [40, 20, 0, 20],
        },
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b} : {c}人 ({d}%)",
        },
        series: [
          {
            name: "级别：人数",
            type: "pie",
            roseType: "radius",
            radius: ["0", "60%"],
            center: ["50%", "60%"],
            data: this.resign_post_data,
            hoverAnimation: false,
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
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //离职_考绩分布 (數組對象)
    Resign_kj () {
      let myChart = this.$echarts.init(document.querySelector("#resign_kj"));
      myChart.setOption({
        color: ["#70d3d0", "#b3dbc0", "#c1acd7", "#ffda65", "#17a8a5"],
        legend: {
          type: "scroll",
          right: "right",
          orient: "vertical",
          padding: [40, 20, 0, 20],
        },
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b} : {c}人 ({d}%)",
        },
        series: [
          {
            name: "考绩：人数",
            type: "pie",
            roseType: "radius",
            radius: ["0", "70%"],
            center: ["42%", "60%"],
            data: this.resign_kj_data,
            hoverAnimation: false,
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
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //离职_职位分布 (數組對象)
    Resign_zw () {
      let myChart = this.$echarts.init(document.querySelector("#resign_zw"));
      myChart.setOption({
        color: ["#70d3d0", "#ffda65", "#f78181", "#bfadd5", "#17a9a8"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          right: "right",
          padding: [45, 50, 0, 20],
        },
        series: [
          {
            name: "职位：人数",
            type: "pie",
            radius: ["60%", "70%"],
            center: ["43%", "55%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 5,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: this.resign_zw_data,
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //离职_校招分布 (數組對象)
    Resign_school () {
      let myChart = this.$echarts.init(
        document.querySelector("#resign_school")
      );
      myChart.setOption({
        color: ["#70d3d0", "#c1acd7", "#ffdc67", "#f78181"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          padding: [45, 20, 0, 20],
          left: "right",
        },
        series: [
          {
            name: "招聘类型：人数",
            type: "pie",
            radius: ["25%", "55%"],
            center: ["50%", "60%"],
            data: this.resign_school_data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //离职_IDL分布 (數組對象)
    Resign_IDL () {
      let resign_IDL_data = [
        { value: 90, name: "IDL" },
        { value: 48, name: "DI" },
      ];
      let myChart = this.$echarts.init(document.querySelector("#resign_IDL"));
      myChart.setOption({
        color: ["#17a9a8", "#70d3d0"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "right",
          padding: [45, 20, 0, 20],
        },
        series: [
          {
            name: "类型：人数",
            type: "pie",
            radius: [60, 100],
            center: ["50%", "60%"],
            roseType: "radius",
            itemStyle: {
              borderRadius: 1,
            },
            data: this.resign_IDL_data,
            label: {
              normal: {
                show: true,
                position: "inner",
                textStyle: {
                  fontWeight: 400,
                  fontSize: 12,
                  color: "black",
                },
                // formatter: "{b}:{c}: ({d}%)",
                formatter: "{c}人\n({d}%)",
              },
            },
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //离职_年资分布 (數組)
    Resign_nz () {
      let myChart = this.$echarts.init(document.querySelector("#resign_nz"));
      myChart.setOption({
        color: ["#73d5d4"],
        xAxis: {
          type: "category",
          data: this.resign_nz_data.resign_nz_x,
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              color: "#676767",
              fontSize: "10",
            },
            formatter: function (params) {
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 6;
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
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#e4f6f6"],
              width: 2,
            },
          },
        },
        grid: {
          bottom: "40",
          left: "13%",
        },
        series: [
          {
            data: this.resign_nz_data.resign_nz_y,
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
    }
  },
}
</script>

<style lang="scss" scoped>
// 第五板块（离职板块标题）
.resign_header {
  display: flex;
  justify-content: space-between;
  margin: 20px 40px;
  .title {
    letter-spacing: 4px;
    font-size: 26px;
    font-weight: 600;
  }
}
// 第六板块（原因、年龄、占比）
.aggregate_five {
  display: flex;
  justify-content: space-between;
  height: 720px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px;
  .left {
    width: 54.4%;
    height: 100%;
    margin-right: 20px;
    .resign_why {
      overflow: hidden;
      position: relative;
      background-color: #fff;
      border-radius: 10px;
      width: 100%;
      height: 360px;
      #resign_why {
        width: 100%;
        // height: 100%;
        margin-top: 10px;
        height: calc(100% - 10px);
      }
    }
    .resign_two {
      display: flex;
      width: 100%;
      height: 340px;
      margin-top: 20px;
      background-color: #fff;
      border-radius: 10px;
      .resign_age {
        position: relative;
        width: 50%;
        height: 100%;
        #resign_age {
          width: 100%;
          height: 100%;
        }
      }
      .line {
        width: 1px;
        height: 240px;
        margin-top: 50px;
        background-color: #83e5e4;
      }
      .resign_position {
        position: relative;
        width: 50%;
        height: 100%;
        #resign_position {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .right {
    position: relative;
    width: 44.1%;
    height: 100%;
    border-radius: 10px;
    background-color: #fff;
    #resign_bfb {
      width: 100%;
      height: 100%;
    }
  }
}
// 第七板块（岗位、职位）
.aggregate_six {
  display: flex;
  justify-content: space-between;
  height: 340px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px;
  margin-top: 20px;
  .left {
    display: flex;
    width: 54.4%;
    height: 100%;
    border-radius: 10px;
    margin-right: 20px;
    background-color: #fff;
    .resign_post {
      position: relative;
      width: 50%;
      height: 100%;
      #resign_post {
        width: 100%;
        height: 100%;
      }
    }
    .line {
      width: 1px;
      height: 240px;
      margin-top: 50px;
      background-color: #83e5e4;
    }
    .resign_kj {
      position: relative;
      width: 50%;
      height: 100%;
      #resign_kj {
        width: 100%;
        height: 100%;
      }
    }
  }
  .right {
    position: relative;
    width: 44.1%;
    height: 100%;
    border-radius: 10px;
    background-color: #fff;
    #resign_zw {
      width: 100%;
      height: 100%;
    }
  }
}
// 第八板块（校招、IDL、年资）
.aggregate_seven {
  display: flex;
  justify-content: space-between;
  height: 360px;
  width: 100%;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 0 40px 20px 40px;
  .left {
    display: flex;
    width: 54.4%;
    height: 100%;
    border-radius: 10px;
    margin-right: 20px;
    background-color: #fff;
    .resign_school {
      position: relative;
      width: 50%;
      height: 100%;
      #resign_school {
        width: 100%;
        height: 100%;
      }
    }
    .line {
      width: 1px;
      height: 240px;
      margin-top: 50px;
      background-color: #83e5e4;
    }
    .resign_IDL {
      position: relative;
      width: 50%;
      height: 100%;
      #resign_IDL {
        width: 100%;
        height: 100%;
      }
    }
  }
  .right {
    position: relative;
    width: 44.1%;
    height: 100%;
    border-radius: 10px;
    background-color: #fff;
    #resign_nz {
      margin-top: 20px;
      width: 100%;
      height: 320px;
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