<template>
  <div class="aggregate_three">
      <div class="education">
        <!-- 彩色标题 -->
        <div class="gradient">学历分布</div>
        <div class="date">
        </div>
        <div id="education_c"></div>
      </div>
      <div class="employeEvoice">
        <!-- 彩色标题 -->
        <div class="gradient">员工之声</div>
        <div class="date">
          <el-date-picker
            class="picker_date2"
            v-model="employeEvoice_date"
            value-format="yyyy-MM-dd"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </div>
        <div id="employeEvoice_c"></div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      employeEvoice_date: "", // 员工之声日历数据
      education_data: { // 学历分布
        y: ["初中以下", "高中中技中专", "大专", "本科", "硕士", "博士"],
        x: [1200, 2000, 1500, 800, 700, 110]
      },
      employeevoice_date: [ // 员工之声
        { value: 1048, name: "管理问题" },
        { value: 735, name: "薪酬管理" },
        { value: 580, name: "休息休假" },
        { value: 484, name: "衣食住行" },
        { value: 300, name: "信息咨询" },
        { value: 300, name: "新冠疫情" },
        { value: 300, name: "其他事件" },
      ],
    }
  },
  mounted() {
    this.Education();
    this.EmployeeVoice();
  },
  methods: {
    //学历分布 (數組)
    Education () {
      let myChart = this.$echarts.init(document.querySelector("#education_c"));
      myChart.setOption({
        color: ["#73d5d4"],
        xAxis: {
          type: "value",
          axisTick: {
            show: true,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#73d5d4",
              width: 2,
            },
          },
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              fontSize: "12",
              color: "#676767",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#e4f6f6"],
              width: 2,
            },
          },
        },
        yAxis: {
          type: "category",
          data: this.education_data.y,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#73d5d4",
              width: 2,
            },
          },
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              fontSize: "12",
              color: "#676767",
            },
          },
        },
        grid: {
          bottom: "15%",
          left: "20%",
        },
        series: [
          {
            data: this.education_data.x,
            type: "bar",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                },
              },
            },
            label: {
              normal: {
                show: true,
                formatter: "{c}人",
              },
            },
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //员工之声 (數組對象)
    EmployeeVoice () {
      let myChart = this.$echarts.init(
        document.querySelector("#employeEvoice_c")
      );
      myChart.setOption({
        color: [
          "#ffda65",
          "#70d3d0",
          "#17a9a8",
          "#eb537a",
          "#b3dbc0",
          "#9885f9",
          "#f4b162",
        ],
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          top: "center",
          width: 30,
          right: "right",
          orient: "vertical",
          padding: [0, 50, 0, 0],
        },
        series: [
          {
            name: "事件：人数",
            type: "pie",
            radius: ["30%", "70%"],
            center: ["40%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 12,
              borderColor: "#fff",
              borderWidth: 2,
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
            data: this.employeevoice_date,
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
// 第三板块（学历、员工之声）
.aggregate_three {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 40px 20px 40px;
  width: 100%;
  height: 460px;
  .education {
    position: relative;
    margin-right: 20px;
    overflow: hidden;
    border-radius: 10px;
    width: 50%;
    height: 100%;
    background-color: #fff;
    .date {
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      top: 20px;
      width: 260px;
    }
    #education_c {
      position: relative;
      margin-top: 40px;
      width: 100%;
      height: 400px;
    }
  }
  .employeEvoice {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    width: 50%;
    height: 100%;
    background-color: #fff;
    #employeEvoice_c {
      width: 90%;
      margin-top: 40px;
      height: 400px;
    }
    .date {
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      top: 20px;
      width: 260px;
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