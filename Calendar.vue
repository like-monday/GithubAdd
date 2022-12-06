<template>
  <div>
    <el-calendar v-model="value">
      <template slot="dateCell" slot-scope="{date, data}">
        <div style="width:100%;height: 100%;position: relative;overflow: hidden;">
          <!-- <el-badge v-if="(date.getDay()==6)" :value="item"></el-badge> -->
          <div class="week" v-if="(date.getDay() == 6)">周</div>
          <div class="week" v-if="(date.getDate() == 31)" @click="getMonthLastDate(date)">月</div>
          <div class="spandate">{{ data.day.split('-').slice(2).join('-') }}</div>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: new Date(),
      activeday: [],
    }
  },
  mounted () {
    this.getMonthLastDate()
  },
  methods: {
    getMonthLastDate () {
      console.log(this.value);
    }
  },
  watch:{
    value(newVal,oldVal){
      console.log(newVal);
    }
  }
}
</script>

<style lang="scss" scoped>
.dayEL .el-button--small {
  border: none;
}

.dayEL .el-button {
  background: transparent;
}

.dayEL>>>.el-calendar-table .el-calendar-day {
  // height: 70px;
  padding: 0;
}

.spandate {
  // margin-top: 10px;
  position: relative;
  // top: 10px;
  margin-left: 25px;
  font-weight: bold;
  font-size: 16px;
}

.week {
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  position: absolute;
  width: 50px;
  right: -15px;
  top: 0;
  text-align: center;
  background-color: red;
  color: #fff;
  transform: rotate(45deg);
}
</style>
