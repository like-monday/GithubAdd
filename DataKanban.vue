<template>
  <div class="report shadow3">
    <!-- 页头start -->
    <div class="header">
      <span class="size_spacing">人资智能平台</span>
    </div>
    <!-- 页头end -->

    <!-- 数据、出勤看板start -->
    <div class="aggregate_one">
      <div class="left">
        <div class="top">
          <span class="title size_spacing">数据看板</span>
          <div class="size">
            <span>厂区：</span>
            <el-select v-model="size_value" placeholder="请选择" class="upsize">
              <el-option v-for="item in op_size" :key="item.value" :label="item.label" :value="item.value"
                style="boder: none">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="risk">
          <!-- 彩色标题 -->
          <div class="gradient">风险预警</div>
          <div class="staff" v-loading="true" element-loading-text="拼命加载中">
            <div class="staff_c"></div>
          </div>
          <div class="line"></div>
          <div class="rest">
            <div class="date">
              <el-date-picker class="picker_date" v-model="rest_date" value-format="yyyy-MM-dd" type="daterange"
                range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
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
              <el-table :data="tableData" height="220" size="mini" border :header-cell-style="{ background: '#17a9a8' }"
                :row-class-name="tableRowClassName" id="success" style="width: 100%; color: #fff">
                <el-table-column prop="date" label="工号" min-width="50" align="center">
                </el-table-column>
                <el-table-column prop="name" label="姓名" align="center" min-width="50">
                </el-table-column>
                <el-table-column prop="address" label="缺勤類型" align="center">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="week">
            <div class="date">
              <el-date-picker v-model="week_date" style="width: 220px" type="daterange" size="small"
                start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd"
                :picker-options="pickerOptions" class="picker_date" />
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
    <!-- 数据、出勤看板end -->

    <!-- 年资、籍贯、资位start -->
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
    <!-- 年资、籍贯、资位end -->

    <!-- 学历、员工之声start -->
    <div class="aggregate_three">
      <div class="education">
        <!-- 彩色标题 -->
        <div class="gradient">学历分布</div>
        <div class="date">
          <!-- <el-date-picker class="picker_date2" v-model="education_date" value-format="yyyy-MM-dd"
                        type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                    </el-date-picker> -->
        </div>
        <div id="education_c"></div>
      </div>
      <div class="employeEvoice">
        <!-- 彩色标题 -->
        <div class="gradient">员工之声</div>
        <div class="date">
          <el-date-picker class="picker_date2" v-model="employeEvoice_date" value-format="yyyy-MM-dd" type="daterange"
            range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <div id="employeEvoice_c"></div>
      </div>
    </div>
    <!-- 学历、员工之声end -->

    <!-- 奖惩、招聘、培训start -->
    <div class="aggregate_four">
      <div class="left">
        <!-- 奖惩看板 -->
        <div v-if="false" id="rewards">
          <div class="gradient">奖惩看板</div>
          <div class="date">
            <el-date-picker class="picker_date2" v-model="rewards_date" value-format="yyyy-MM-dd" type="daterange"
              range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div id="category"></div>
          <div id="grade"></div>
        </div>
        <div v-else class="rewards">
          <div class="gradient">奖惩看板</div>
          <div class="date">
            <el-date-picker class="picker_date2" v-model="rewards_date" value-format="yyyy-MM-dd" type="daterange"
              range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div id="category"></div>
          <div id="grade"></div>
        </div>
        <!-- 招聘看板 -->
        <div v-show="false" class="training">
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
    <!-- 奖惩、招聘、培训end -->

    <!-- 离职看板start -->
    <div class="resign_header">
      <div class="title">离职看板</div>
      <div class="date">
        <el-date-picker class="picker_date2" v-model="quit_date" value-format="yyyy-MM-dd" type="daterange"
          range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
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
import "echarts/map/js/china.js";
import axios from "axios";
export default {
  name: "DataKanban",
  data () {
    return {
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
          value: "龙华",
          label: "龙华",
        },
        {
          value: "观澜",
          label: "观澜",
        },
        {
          value: "杭州",
          label: "杭州",
        },
      ],
      tableData: [
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
      role_value: "", // 角色选择
      size_value: "", // 厂区选择
      rest_date: "", // 风险预警日历数据
      week_date: "", // 出勤率日历数据
      employeEvoice_date: "", // 员工之声日历数据
      rewards_date: "", // 奖惩看板日历数据
      quit_date: "", // 离职看板日历数据

      box1: [{
        name: '在职人数',
        value: '7000'
      },
      {
        name: '平均年龄',
        value: '30'
      },
      {
        name: 'IDL',
        value: '3000'
      },
      {
        name: 'DL',
        value: '4000'
      },
      {
        name: '男',
        value: '500'
      },
      {
        name: '女',
        value: '600f'
      }
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
      // 近一月出勤率
      attendance_data: {
        x: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
        y: [94, 98, 97, 96, 88, 100, 99],
      },
      qualification_data: [ // 年资分布
        { value: 1048, name: "试用期以内" },
        { value: 735, name: "试用期满1年" },
        { value: 580, name: "1-3年" },
        { value: 484, name: "3-6年" },
        { value: 300, name: "6年以上" },
      ],
      seniority_data: [ // 资位分布
        { value: 7350, name: "师1~师3" },
        { value: 5800, name: "师4~师7" },
        { value: 1080, name: "员级(派遣工~员三)" },
        { value: 4840, name: "师8以上" },
      ],
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
      recruitment1_total_data: [ // 招聘看_总需求
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
      },
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
    };
  },
  mounted () {
    this.Risk();
    this.Rest();
    this.Attendance();
    this.Qualification();
    // this.Maps();
    this.Education();
    this.Seniority();
    this.EmployeeVoice();
    this.Category();
    this.Grade();
    // this.Recruitment1();
    // this.Recruitment2();
    this.Level3();
    this.Level_sum();
    this.Level_dc();
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

    // 调用接口
    // this.getRest();
  },
  methods: {
    onSubmit () {
      console.log("submit!");
    },
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
            center: ["30%", "55%"],
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
    //超六休一人数
    getRest () {
      axios({
        url: "http://localhost:8088/echarts",
        method: "get",
      }).then((res) => {
        console.log(res.data.data);
        this.restdate = res.data.data;
        this.$nextTick(() => {
          this.Rest();
        });
      });
    },
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
              start: 500,
              end: 600,
            },
            {
              start: 400,
              end: 500,
            },
            {
              start: 300,
              end: 400,
            },
            {
              start: 200,
              end: 300,
            },
            {
              start: 100,
              end: 200,
            },
            {
              start: 0,
              end: 100,
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
            data: this.mydata, //数据
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
          source: this.recruitment1_total_data,
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
    },
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
    },
  },
};
</script>

<style lang="scss">
.el-table .warning-row {
  background: #17a9a8;
}

.el-table .success-row {
  background: #95d9ce;
}

.aggregate_one .date[data-v-11fa6cbb] .el-date-editor .el-range-input {
  background-color: #f3f6fd;
}
</style>

<style lang="scss" scoped>
.report {
  min-width: 1280px;
  max-width: 2000px;
  width: 100%;
}

.size_spacing {
  letter-spacing: 6px;
}

// 页头
.header {
  width: 100%;
  height: 60px;
  background-color: #17a9a8;

  span {
    display: inline-block;
    color: #fff;
    font-size: 36px;
    height: 60px;
    line-height: 60px;
    padding: 0 40px;
    font-weight: 600;
    background-color: #22b7b5;
  }
}

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
        padding: 0 0 0 100px;
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

    .box3>div {
      padding: 0 20px;
      text-align: center;
    }

    .box4 {
      // background: url("../assets/images/right_bg4.jpg") no-repeat;
      background-size: 100% 100%;
      font-size: 22px;
    }

    .box4>div {
      padding: 0 20px;
      text-align: center;
    }
  }
}

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
      height: 340px;
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

      .cg_h {}
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

/* 青灰色大背景 */
.shadow3 {
  background-color: #eeeeee;
}
</style>
