<template>
  <div class="aggregate_one">
      <div class="left">
        <div class="top">
          <span class="title size_spacing">数据看板</span>
          <div class="size">
            <span>厂区：</span>
            <el-select v-model="size_value" placeholder="请选择" class="upsize">
              <el-option
                v-for="item in op_size"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                style="boder: none"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="risk">
          <!-- 彩色标题 -->
          <div class="gradient">风险预警</div>
          <div
            class="staff"
            v-loading="false"
            element-loading-text="拼命加载中"
          >
            <div class="staff_c"></div>
          </div>
          <div class="line"></div>
          <div class="rest">
            <div class="date">
              <el-date-picker
                class="picker_date"
                v-model="rest_date"
                value-format="yyyy-MM-dd"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </div>
            <div class="rest_c"></div>
          </div>
        </div>
        <div class="attendance">
          <div class="left">
            <!-- 彩色标题 -->
            <div class="gradient">出勤看板</div>
            <div class="top">
              <div class="box1">
                <span>应到人数</span>
                XXX人
              </div>
              <div class="box2">
                <span>实到人数</span>
                XXX人
              </div>
              <div class="box3">
                <span>请假人数</span>
                XXX人
              </div>
              <div class="box4">
                <span>出勤率</span>
                XXX%
              </div>
            </div>
            <div class="qq">缺勤详情</div>
            <div class="queqing">
              <el-table
                :data="absence_data"
                height="220"
                size="mini"
                border
                :header-cell-style="{ background: '#17a9a8' }"
                :row-class-name="tableRowClassName"
                id="success"
                style="width: 100%; color: #fff"
              >
                <el-table-column
                  prop="date"
                  label="工号"
                  min-width="50"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  align="center"
                  min-width="50"
                >
                </el-table-column>
                <el-table-column prop="address" label="缺勤類型" align="center">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="week">
            <div class="date">
              <el-date-picker
                v-model="week_date"
                style="width: 220px"
                type="daterange"
                size="small"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd"
                :picker-options="pickerOptions"
                class="picker_date"
              />
            </div>
            <div id="attendance_c"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="box1">
          <span>在职人数</span>
          70000人
        </div>
        <div class="box2">
          <span>平均年龄</span>
          30岁
        </div>
        <div class="box3">
          <span>员工类别</span>
          <div>
            <div>1000</div>
            <div>IDL</div>
          </div>
          <div>
            <div>50000</div>
            <div>IDL</div>
          </div>
        </div>
        <div class="box4">
          <span>性别比例</span>
          <div>
            <div>1000</div>
            <div>男</div>
          </div>
          <div>
            <div>5000</div>
            <div>女</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      size_value: "", // 厂区选择
      rest_date: "", // 风险预警日历数据
      week_date: "", // 出勤率日历数据
      // 限制选择一周的日期
      choiceDate: null,
      pickerOptions: {
        onPick: ({ maxDate, minDate }) => {
          // 把选择的第一个日期赋值给一个变量。
          this.choiceDate = minDate.getTime()
          // 如何你选择了两个日期了，就把那个变量置空
          if (maxDate) this.choiceDate = ''
        },
        disabledDate: time => {
          // 如何选择了一个日期
          if (this.choiceDate) {
            // 7天的时间戳
            const one = 7 * 24 * 3600 * 1000
            // 当前日期 - one = 7天之前
            const minTime = this.choiceDate - one
            // 当前日期 + one = 7天之后
            const maxTime = this.choiceDate + one
            return (
              time.getTime() < minTime ||
              time.getTime() > maxTime ||
              // 限制不能选择今天及以后
              time.getTime() > Date.now()
            )
          } else {
            // 如果没有选择日期，就要限制不能选择今天及以后
            return time.getTime() > Date.now()
          }
        }
      },
      op_size: [
        {
          value: "LH",
          label: "龙华",
        },
        {
          value: "GL",
          label: "观澜",
        },
        {
          value: "HZ",
          label: "杭州",
        },
      ],
      risk_data: [ // 风险预警数据
        { value: 49, name: "派遣工" },
        { value: 90, name: "总员工" },
      ],
      restdata: [ // 超六休一人数數據
        {
          value: 88,
        },
      ],
      report_numbers: [{ // 应到、实到、请假、出勤
        name: '应到人数',
        value: 26541
      },
      {
        name: '实到人数',
        value: 26000
      },
      {
        name: '请假人数',
        value: 60
      },
      {
        name: '出勤率',
        value: '90%'
      }],
      absence_data: [ // 表格数据
        {
          date: "F1339411",
          name: "欧阳子望",
          address: "出差",
        },
        {
          date: "F1339411",
          name: "王小虎",
          address: "出差",
        },
        {
          date: "F1339411",
          name: "王小虎",
          address: "出差",
        },
        {
          date: "F1339411",
          name: "塔克福~艾华非",
          address: "出差",
        },
        {
          date: "F1339411",
          name: "王小虎",
          address: "出差",
        },
      ],
      attendance_data: { // 近一周出勤率
        x: ["10/01", "10/02", "10/03", "10/04", "10/05", "10/06", "10/07"],
        y: [94, 98, 97, 96, 88, 100, 99],
      },
    }
  },
  mounted() {
    this.Risk();
    this.Rest();
    this.Attendance();
  },
  methods: {
    // 表格隔行变色
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return "success-row";
      } else {
        return "warning-row";
      }
    },
    // 风险预警(数组对象类型)
    Risk () {
      this.risk_data[1].itemStyle = {
        borderColor: "#83e5e4",
        borderWidth: 20,
        borderCap: "butt",
      }
      let myChart = this.$echarts.init(document.querySelector(".staff_c"));
      myChart.setOption({
        color: ["#8b9efd", "#83e5e4"],
        legend: {
          right: "right",
          orient: "vertical",
          padding: [40, 60, 0, 0],
        },
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b} : {c}人 ({d}%)",
        },
        series: [
          {
            name: "人数",
            type: "pie",
            radius: [60, 70],
            center: ["50%", "55%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 1,
            },
            emphasis: {
              //使用emphasis
              disable: false,
              scale: false, //不缩放
              scaleSize: 0, //为了防止失效直接设置未0
            },
            data: this.risk_data
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    getno () {
      console.log(sessionStorage.getItem('empNo'));
      getEmpno(sessionStorage.getItem('empNo')).then((res) => {
        console.log('获取工号接口', res);
      })
    },
    getSite () {
      getSites().then((res) => {
        // console.log('厂区', res.data.data);
        this.$store.commit('SET_Sites', res.data.data)
        this.getRest()
      })
    },
    getRest () {
      //   let result = await getInfo();
      //   console.log(result);
      getEcharts().then((res) => {
        console.log(res);
        this.restdata = res.data.data;
        this.$nextTick(() => {
          this.Rest();
        });
      })
      //   axios({
      //     url: "http://localhost:8088/echarts",
      //     method: "get",
      //   }).then((res) => {
      //     console.log(res.data.data);
      //     this.restdata = res.data.data;
      //     this.$nextTick(() => {
      //       this.Rest();
      //     });
      //   });
    },
    //超六休一人数
    Rest () {
      let myChart = this.$echarts.init(document.querySelector(".rest_c"));
      myChart.setOption({
        color: ["#83e5e4", "#fed554"],
        title: {
          text: "超六休一人数：" + this.restdata[0].value,
          left: "left",
          textStyle: {
            fontSize: 12,
          },
        },
        series: [
          {
            name: "",
            type: "gauge",
            radius: "70%",
            center: ["50%", "45%"],
            // 轴线
            axisLine: {
              show: true,
              roundCap: true,
              lineStyle: {
                width: 6,
                color: [[1, "#fed554"]],
              },
            },
            // 进度条样式
            progress: {
              show: true,
              roundCap: true,
              width: 6,
              itemStyle: {
                color: "#73d5d4",
                borderColor: "#73d5d4",
                borderWidth: 12,
              },
            },
            // 起始角度
            startAngle: 95,
            endAngle: 100,
            // 刻度样式
            axisTick: {
              show: false,
            },
            // 大刻度
            splitLine: {
              show: false,
            },
            // 刻度字体
            axisLabel: {
              show: false,
            },
            // 指针固定点
            anchor: {
              show: false,
            },
            // 是否显示指针
            pointer: {
              show: false,
            },
            // 指针样式
            itemStyle: {
              color: "#73d5d4",
              borderWidth: 10,
            },
            detail: {
              valueAnimation: false,
              formatter: "{value}",
              offsetCenter: ["0%", "5%"],
            },
            data: this.restdata,
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    //近一月出勤率 (數組)
    Attendance () {
      let myChart = this.$echarts.init(document.querySelector("#attendance_c"));
      myChart.setOption({
        title: {
          text: "近一周出勤率",
          textStyle: {
            fontSize: 13,
          },
        },
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#08be98",
            },
          },
        },
        legend: {
          show: true,
          // data: ["出勤率(%)"],
          icon: "roundRect", //形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 25, // 设置宽度
          itemHeight: 2, // 设置高度
          right: "right",
          padding: [20, 30, 0, 0],
          itemStyle: {
            color: "#08be98",
          },
          textStyle: {
            fontSize: 12,
            color: "#08be98",
            fontFamily: "OPPOSans-M",
          },
        },
        xAxis: {
          type: "category",
          data: this.attendance_data.x,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#8ea5ce",
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
        },
        yAxis: {
          type: "value",
          color: "#08be98",
        },
        series: [
          {
            name: "出勤率(%)",
            data: this.attendance_data.y,
            type: "line",
            symbol: "none",
            lineStyle: {
              color: "#50e3c2",
            },
            smooth: true,
            areaStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1.5,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#9de3d8", // 0% 处的颜色
                    },
                    {
                      offset: 0.7,
                      color: "rgba(235,250,247,0.3)", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
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
  },
}
</script>

<style lang="scss" scoped>
// 第一板块（风险、出勤、年龄）
.aggregate_one {
  display: flex;
  box-sizing: border-box;
  padding: 20px 40px;
  width: 100%;
  height: 806px;
  .left {
    width: 70%;
    .top {
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 25px;
        font-weight: 600;
      }
      .size {
        height: 28px;
        span {
          font-size: 18px;
          margin-left: 20px;
        }
        .upsize,
        .upposition {
          height: 28px;
          border: none;
        }
        .upsize {
          width: 90px;
        }
        .upposition {
          width: 110px;
        }
        ::v-deep .el-input__inner {
          border: none;
        }
        ::v-deep .el-icon-arrow-up:before {
          color: #17a9a8;
        }
      }
    }
    .risk {
      display: flex;
      position: relative;
      margin-top: 20px;
      width: 100%;
      height: 260px;
      box-sizing: border-box;
      border-radius: 10px;
      border: 2px solid #22b7b5;
      overflow: hidden;
      background-color: #fff;
      .staff {
        box-sizing: border-box;
        padding: 0 0 0 10px;
        height: 100%;
        width: 49.9%;
        .staff_c {
          width: 100%;
          height: 100%;
        }
      }
      .line {
        margin-top: 25px;
        height: 80%;
        width: 0.1%;
        background-color: #83e5e4;
      }
      .rest {
        box-sizing: border-box;
        height: 100%;
        width: 49.9%;
        .rest_c {
          box-sizing: border-box;
          padding: 0 50px 0 50px;
          width: 100%;
          height: 215px;
        }
        .date {
          width: 100%;
          height: 45px;
          padding: 15px 20px 0 0;
        }
      }
    }
    .attendance {
      display: flex;
      margin-top: 20px;
      .left {
        position: relative;
        width: 50%;
        height: 436px;
        border-radius: 10px;
        background-color: #fff;
        .top {
          margin-top: 50px;
          box-sizing: border-box;
          padding: 0 20px 0 0;
          width: 100%;
          height: 90px;
          .box1,
          .box2,
          .box3,
          .box4 {
            position: relative;
            text-align: center;
            line-height: 120px;
            border-radius: 4px;
            height: 100%;
            width: 25%;
            color: #fff;
          }
          span {
            display: inline-block;
            font-size: 13px;
            position: absolute;
            color: black;
            top: 0;
            left: 0;
            width: 70%;
            height: 30px;
            line-height: 30px;
            border-radius: 4px;
            background-color: rgba($color: #d3d3d3, $alpha: 0.4);
          }
          .box1 {
            margin-left: 20px;
            background-color: #d1d1d1;
            background: linear-gradient(45deg, #94a4fc, #becbff);
          }
          .box2 {
            margin-left: 20px;
            background: linear-gradient(45deg, #f8a0b6, #f4ccd7);
          }
          .box3 {
            margin-left: 20px;
            background: linear-gradient(45deg, #f5b472, #fbc89b);
          }
          .box4 {
            margin-left: 20px;
            background: linear-gradient(45deg, #9a88f8, #c9c2f5);
          }
        }
        .qq {
          margin: 20px 0 20px 20px;
          font-weight: 600;
          font-size: 14px;
        }
        .queqing {
          padding: 0 20px 20px 20px;
        }
      }
      .week {
        margin-left: 20px;
        width: 50%;
        height: 436px;
        box-sizing: border-box;
        padding: 20px;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        .date {
          width: 100%;
          height: 45px;
          padding: 0 0 20px 0;
        }
        #attendance_c {
          height: 346px;
          width: 100%;
        }
      }
    }
  }
  .right {
    width: 30%;
    height: 100%;
    margin-left: 20px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 10px;
    padding: 30px 50px;
    .box1,
    .box2,
    .box3,
    .box4 {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 160px;
      border-radius: 12px;
      letter-spacing: 5px;
      color: #fff;
      font-weight: 600;
      span {
        font-size: 16px;
        position: absolute;
        top: 20px;
        left: 30px;
        font-weight: 200;
      }
    }
    .box1 {
      font-size: 36px;
      margin-bottom: 22px;
      // background: url("../assets/images/right_bg2.jpg") no-repeat;
      background-size: 100% 100%;
    }
    .box2 {
      margin-bottom: 22px;
      font-size: 36px;
      // background: url("../assets/images/right_bg1.jpg") no-repeat;
      background-size: 100% 100%;
    }
    .box3 {
      // background: url("../assets/images/right_bg3.jpg") no-repeat;
      background-size: 100% 100%;
      margin-bottom: 22px;
      font-size: 22px;
    }
    .box3 > div {
      padding: 0 20px;
      text-align: center;
    }
    .box4 {
      // background: url("../assets/images/right_bg4.jpg") no-repeat;
      background-size: 100% 100%;
      font-size: 22px;
    }
    .box4 > div {
      padding: 0 20px;
      text-align: center;
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