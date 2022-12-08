\<template>
  <!-- 校招生专区-工作日志 -->
  <div id="JobWill">
    <div class="SubMenu"><SubMenu /></div>

    <!-- 整体日历控件start -->
    <div class="content">
      <div class="calendar">
        <!-- 头部状态描述start -->
        <div class="calendar_header">
          <div class="calendar_header_date">
            <div class="calendar_header_month">{{ value.getMonth() + 1 }}</div>
            <div class="calendar_header_year">{{ value.getFullYear() }}</div>
          </div>
          <!-- 状态示例start -->
          <div class="ExampleState">
            <div class="Adopt">
              <p></p>
              <span>已通过</span>
            </div>
            <div class="Signing">
              <p></p>
              <span>签核中</span>
            </div>
            <div class="NotCompleted">
              <p></p>
              <span>待完成</span>
            </div>
          </div>
          <!-- 状态示例end -->
        </div>
        <!-- 头部状态描述end -->

        <!-- 日历start -->
        <el-calendar v-model="value" :first-day-of-week="7">
          <template slot="dateCell" slot-scope="{ date, data }">
            <div
              id="calendar_day"
              @click="Month(data)"
              :class="{ calendar_day_bgc: getyellodate(date, data) }"
            >
              <div class="week" v-if="date.getDay() == 6">周</div>
              <div
                class="week"
                v-if="
                  getMonthLastDate(data.day) == date.getDate() ||
                  getMonthLastDate(data.day) == date.getDate() ||
                  getMonthLastDate(data.day) == date.getDate() ||
                  getMonthLastDate(data.day) == date.getDate()
                "
              >
                月
              </div>
              <div
                class="week"
                v-if="
                  getMonthLastDate(data.day) == date.getDate() &&
                  date.getDay() == 6
                "
              >
                月/周
              </div>
              <div
                class="spandate"
                :class="{ spandate_fc: getyellodate(date, data) }"
              >
                {{ data.day.split("-").slice(2).join("-") }}
              </div>
              <div class="state">
                <p class="red" v-if="false"></p>
                <p class="green" v-if="false"></p>
                <p class="yello" v-if="getyellodate(date, data)"></p>
              </div>
            </div>
          </template>
        </el-calendar>
        <!-- 日历end -->

        <!-- 切换月份按钮start -->
        <div class="changeDate">
          <el-button @click="skip('preMonth')" type="warning" round size="mini"
            ><i class="el-icon-arrow-left"></i>上个月
          </el-button>
          <el-button @click="skip('today')" type="info" round size="mini"
            >今天</el-button
          >
          <el-button @click="skip('postMonth')" type="warning" round size="mini"
            >下个月<i class="el-icon-arrow-right"></i>
          </el-button>
        </div>
        <!-- 切换月份按钮end -->
      </div>
    </div>
    <!-- 整体日历控件start -->

    <!-- 日报弹出框start -->
    <el-dialog title="提示" :visible.sync="dialogVisibles.daily" width="50%">
      <div class="dialog_daily">
        <div class="dialog_daily_header">
          <div class="date">
            <div class="date_week">
              <span>第</span>
              <span>1</span>
              <span>周</span>
            </div>
            <div class="date_ymd">{{ dialog_date }}</div>
          </div>
          <div class="title">实习日志</div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibles.daily = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibles.daily = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 日报弹出框end -->
  </div>
</template>

<script>
import SubMenu from './SubMenu.vue'
export default {
  data () {
    return {
      value: new Date(), // 日历组件日期
      activeday: [],
      dialogVisibles: { // 对话框控制flag
        daily: false,
        weekly: false,
        monthly: false
      },
      dialog_date: ''
    }
  },
  components: { SubMenu },
  mounted () {
  },
  methods: {
    // 判断传入日期是否在当前日期之前
    getyellodate (date, data) {
      //   console.log(date, data)
      let nowDay = new Date().getDate()
      let nowYear = new Date().getFullYear()
      let nowMonth = new Date().getMonth() + 1
      let changeDay = data.day.split('-')[2]
      let changeMonth = data.day.split('-')[1]
      let changeYear = data.day.split('-')[0]
      //   console.log('当前年：', nowYear, changeYear)
      if (nowYear >= changeYear) {
        // console.log(parseInt(nowMonth) === parseInt(changeMonth))
        if (parseInt(nowMonth) === parseInt(changeMonth)) {
          if (nowDay > changeDay) {
            return true
          }
        } else if (nowMonth > changeMonth) {
          return true
        }
      }
      return false
    },
    Month (data) {
      console.log(data)
      let isTrue = this.getyellodate(null, data)
      if (isTrue) {
        this.dialog_date = data.day
        this.dialogVisibles.daily = true
      }
    },
    getMonthLastDate (data) {
      let today = data.split('-')
      let MonthLastDate = this.MonthDay(today[0], parseInt(today[1]))
      return MonthLastDate
    },
    // 判断是否有31号
    MonthDay (year, month) {
      switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          return 31
        case 4:
        case 6:
        case 9:
        case 11:
          return 30
        case 2:
          if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return 29
          } else {
            return 28
          }
      }
    },
    // 切换月份按钮
    skip (flag) {
      if (flag === 'preYear') this.value = new Date(this.value.setFullYear(this.value.getFullYear() - 1))
      else if (flag === 'preMonth') this.value = new Date(this.value.setMonth(this.value.getMonth() - 1))
      else if (flag === 'preDay') this.value = new Date(this.value.setDate(this.value.getDate() - 1))
      else if (flag === 'today') this.value = new Date()
      else if (flag === 'postDay') this.value = new Date(this.value.setDate(this.value.getDate() + 1))
      else if (flag === 'postMonth') this.value = new Date(this.value.setMonth(this.value.getMonth() + 1))
      else if (flag === 'postYear') this.value = new Date(this.value.setFullYear(this.value.getFullYear() + 1))
    }
  },
  computed: {
  },
  watch: {
    value (newVal, oldVal) {
    }
  }
}
</script>

<style lang="scss">
.content {
  .calendar {
    .el-calendar__header {
      //   background-color: #57617c;
      display: none;
      .el-calendar__title {
        font-size: 20px;
      }
      .el-calendar__button-group {
        // 隐藏原生按钮
        display: none;
      }
    }

    .el-calendar-table {
      .el-calendar-day {
        padding: 0;
      }
      thead {
        th {
          // 修改头部星期部分
          background-color: #4f81bd;
          border: 2px solid #ebeef5;
          color: white;
        }
      }
      td {
        border-bottom: 2px solid #ebeef5;
        border-right: 2px solid #ebeef5;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.dayEL .el-button--small {
  border: none;
}
.dayEL .el-button {
  background: transparent;
}

#JobWill {
  display: flex;
  .content {
    .calendar {
      width: 70%;
      margin-left: 80px;
      .calendar_header {
        display: flex;
        justify-content: space-between;
        .calendar_header_date {
          display: flex;
          .calendar_header_month {
            width: 60px;
            height: 60px;
            border: 2px solid #e46c0a;
            font-size: 40px;
            font-weight: 600;
            text-align: center;
            line-height: 60px;
            color: #e46c0a;
          }

          .calendar_header_year {
            width: 60px;
            height: 60px;
            color: #fabf8e;
            font-weight: 600;
            font-size: 20px;
            line-height: 60px;
          }
        }

        .ExampleState {
          p {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 10px;
          }
          div {
            display: flex;
            align-items: center;
            width: 100px;
          }

          .Adopt {
            p {
              background-color: #ff0000;
            }
          }
          .Signing {
            p {
              background-color: #ffc000;
            }
          }
          .NotCompleted {
            p {
              background-color: #92d050;
            }
          }
        }
      }

      #calendar_day {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        padding: 0;

        .week {
          box-sizing: border-box;
          font-size: 13px;
          height: 18px;
          line-height: 18px;
          position: absolute;
          width: 70px;
          right: -17px;
          top: 10px;
          text-align: center;
          background-color: #f79646;
          color: red;
          transform: rotate(45deg);
          // #dce6f2 表格蓝
        }

        .spandate {
          width: 20px;
          height: 20px;
          margin: 0 auto;
          margin-top: 25px;
          font-weight: bold;
          font-size: 20px;
        }

        .spandate_fc {
          color: #558ed5;
        }

        .state {
          position: absolute;
          bottom: 0;
          left: 0;
          display: flex;
          height: 10px;
          padding: 5px;
          p {
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }
          .red {
            background-color: red;
          }
          .green {
            background-color: greenyellow;
          }
          .yello {
            background-color: rgb(255, 183, 0);
          }
        }
      }

      .calendar_day_bgc {
        background-color: #dce6f2;
      }

      .changeDate {
        display: flex;
        justify-content: center;
      }
    }
  }
  .dialog_daily {
    .dialog_daily_header {
      .date {
        .date_week {
          width: 60px;
          height: 35px;
          padding-left: 10px;
          padding-top: 5px;
          text-align: right;
          border-top: 2px solid #2492ff;
          border-left: 2px solid #2492ff;
          span:nth-child(2) {
            font-size: 30px;
            font-weight: 600;
          }
        }
        .date_ymd {
          margin-left: 50px;
          width: 80px;
          height: 30px;
          padding-right: 5px;
          border-right: 2px solid #2492ff;
          border-bottom: 2px solid #2492ff;
          text-align: right;
          line-height: 40px;
          font-weight: 600;
        }
      }
      .title {
        width: 80px;
        height: 40px;
        border: #202020;
      }
    }
  }
}
</style>
