<template>
  <!-- 校招生专区-工作日志 -->
  <div id="JobWill">
    <div class="SubMenu"><SubMenu /></div>
    <div class="content">
      <div class="calendar">
        <el-calendar v-model="value" :first-day-of-week="7">
          <template slot="dateCell" slot-scope="{ date, data }">
            <div
              style="
                width: 100%;
                height: 100%;
                position: relative;
                overflow: hidden;
              "
              @click="Month(data)"
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
              <div class="spandate">
                {{ data.day.split("-").slice(2).join("-") }}
              </div>
              <div class="state">
                <p class="red" v-if="false"></p>
                <p class="green" v-if="false"></p>
                <p class="yello" v-if="getyellodate(date, data)">
                  <!-- {{ data.day.split("-")[2] }},
                  {{ new Date().getDate() }}
                  {{ new Date().getDate() > data.day.split("-")[2] }} -->
                </p>
              </div>
            </div>
          </template>
        </el-calendar>
      </div>
    </div>
  </div>
</template>

<script>
import SubMenu from './SubMenu.vue'
export default {
  data () {
    return {
      value: new Date(),
      activeday: []
    }
  },
  components: { SubMenu },
  mounted () {
  },
  methods: {
    getyellodate (date, data) {
      console.log(date, data)
      let today = new Date().getDate()
      let changeDay = data.day.split('-')[2]
      if (today > changeDay) {
        return true
      } else {
        return false
      }
    },
    Month (data) {
      //   console.log(data)
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
      .el-calendar__title {
        font-size: 20px;
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
      width: 80%;
      margin: 0 auto;
      .week {
        box-sizing: border-box;
        font-size: 10px;
        height: 18px;
        line-height: 18px;
        position: absolute;
        width: 70px;
        right: -17px;
        top: 10px;
        text-align: center;
        background-color: red;
        color: #fff;
        transform: rotate(45deg);
      }

      .spandate {
        width: 20px;
        height: 20px;
        margin: 0 auto;
        margin-top: 25px;
        font-weight: bold;
        font-size: 20px;
      }

      .state {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        height: 10px;
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
  }
}
</style>
