<template>
  <div>
    <el-card class="box-card">
      <!-- 头部区域 -->
      <div slot="header" class="clearfix">
        <!--  @tab-click="handleClick" -->
        <!-- 头部左侧内容 -->
        <el-tabs class="tab" v-model="activeName">
          <el-tab-pane label="销售额" name="sale"></el-tab-pane>
          <el-tab-pane label="访问量" name="visite"></el-tab-pane>
        </el-tabs>
        <!-- 头部右侧内容 -->
        <div class="right">
          <span @click="setDay">今日</span>
          <span @click="setWeek">本周</span>
          <span @click="setMonth">本月</span>
          <span @click="setYear">本年</span>
          <el-date-picker
            v-model="data"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="mini"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </div>
      </div>
      <!-- 内容区 -->
      <div>
        <el-row :gutter="10">
          <el-col :span="18">
            <!-- 容器 -->
            <div class="charts" ref="charts"></div>
          </el-col>
          <el-col :span="6">
            <div class="ranking">
              <h3>门店{{ title }}排名</h3>
              <ul>
                <li>
                  <span class="rindex">1</span>
                  <span>肯德基</span>
                  <span>2563</span>
                </li>
                <li>
                  <span class="rindex">2</span>
                  <span>海底捞</span>
                  <span>2310</span>
                </li>
                <li>
                  <span class="rindex">3</span>
                  <span>小米</span>
                  <span>2000</span>
                </li>
                <li>
                  <span>4</span>
                  <span>探鱼</span>
                  <span>1999</span>
                </li>
                <li>
                  <span>5</span>
                  <span>肯德基</span>
                  <span>2563</span>
                </li>
                <li>
                  <span>6</span>
                  <span>肯德基</span>
                  <span>2563</span>
                </li>
                <li>
                  <span>7</span>
                  <span>肯德基</span>
                  <span>2563</span>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import dayjs from "dayjs";
import echarts from "echarts";
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeName: "sale",
      mycharts: null,
      //收集日历数据
      data: [],
    };
  },
  methods: {
    //本天
    setDay() {
      const day = dayjs().format("YYYY-MM-DD");
      this.data = [day, day];
    },
    //本周
    setWeek() {
      const start = dayjs().day(1).format("YYYY-MM-DD");
      const end = dayjs().day(7).format("YYYY-MM-DD");
      this.data = [start, end];
    },
    //本月
    setMonth() {
      const start = dayjs().startOf("month").format("YYYY-MM-DD");
      const end = dayjs().endOf("month").format("YYYY-MM-DD");
      this.data = [start, end];
    },
    //本年
    setYear() {
      const start = dayjs().startOf("year").format("YYYY-MM-DD");
      const end = dayjs().endOf("year").format("YYYY-MM-DD");
      this.data = [start, end];
    },
  },
  mounted() {
    this.mycharts = echarts.init(this.$refs.charts);
    this.mycharts.setOption({
      title: {
        text: this.title + "趋势",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: this.listState.orderFullYearAxis,
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: this.listState.orderFullYear,
        },
      ],
    });
    //顶部是mounted:为什么第一次没有数据,
  },
  computed: {
    //计算属性-标题
    title() {
      return this.activeName == "sale" ? "销售额" : "访问量";
    },
    ...mapState({
      listState: (state) => state.home.list,
    }),
  },
  watch: {
    title() {
      //重新修改图表得配置数据
      //图表配置数据可以再次修改，如果有新的数值，就用新的数值覆盖旧的数值，没有还是用以前的
      this.mycharts.setOption({
        title: {
          text: this.title + "趋势",
        },
        xAxis: {
          data:
            this.title == "销售额"
              ? this.listState.orderFullYearAxis
              : this.listState.userFullYearAxis,
        },
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "60%",
            data:
              this.title == "销售额"
                ? this.listState.orderFullYear
                : this.listState.userFullYear,
          },
        ],
      });
    },
    listState() {
      this.mycharts.setOption({
        title: {
          text: this.title + "趋势",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.listState.orderFullYearAxis,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "60%",
            data: this.listState.orderFullYear,
          },
        ],
      });
    },
  },
};
</script>

<style lang="less">
.clearfix {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.tab {
  width: 100%;
}
.right {
  position: absolute;
  right: 0;
}
.right span {
  margin: 0 10px;
}
.charts {
  width: 100%;
  height: 300px;
}
.ranking {
  padding-left: 30px;
  padding-right: 40px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    height: 300px;

    li {
      height: 8%;
      margin: 8px 0;

      span:nth-child(3) {
        float: right;
      }

      span {
        margin-right: 20px;
      }

      .rindex {
        float: left;
        width: 19px;
        height: 19px;
        background: black;
        border-radius: 50%;
        color: white;
        text-align: center;
      }
    }
  }
}
</style>