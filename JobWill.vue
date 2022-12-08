<template>
  <div id="ScholarshipIssuanceInquiry">
    <!-- 标题 Start -->
    <div class="academicEducaton-title">奖学金发放查询</div>
    <el-divider></el-divider>
    <!-- 标题 End -->

    <!-- 查询条件 Start -->
    <ul class="condition">
      <li class="condition-item">
        <div class="condition-key">工号:</div>
        <div class="condition-value">
          <el-input
            class="condition-input"
            v-model="condition.empno"
            size="mini"
            placeholder="请输入"
            clearable
          />
        </div>
      </li>
      <li class="condition-item">
        <div class="condition-key">姓名:</div>
        <div class="condition-value">
          <el-input
            class="condition-input"
            v-model="condition.name"
            size="mini"
            placeholder="请输入"
            clearable
          />
        </div>
      </li>
      <li class="condition-item">
        <div class="condition-key">事业群:</div>
        <div class="condition-value">
          <el-input
            class="condition-input"
            v-model="condition.group"
            size="mini"
            placeholder="请输入"
            clearable
          />
        </div>
      </li>
      <li class="condition-item">
        <div class="condition-key">厂区:</div>
        <div class="condition-value">
          <el-select
            class="condition-input"
            v-model="condition.site"
            size="mini"
            placeholder="请选择"
            clearable
          >
            <el-option
              v-for="item in dropDownList.site"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </li>
      <li class="condition-item">
        <div class="condition-key">就读年份:</div>
        <div class="condition-value">
          <el-date-picker
            class="condition-input"
            v-model="condition.year"
            type="year"
            size="mini"
            value-format="yyyy"
            placeholder="请选择"
            clearable
          >
          </el-date-picker>
        </div>
      </li>
      <li class="condition-item">
        <div class="condition-key">事业处:</div>
        <div class="condition-value">
          <el-select
            class="condition-input"
            v-model="condition.office"
            size="mini"
            placeholder="请选择"
            clearable
          >
            <el-option
              v-for="item in dropDownList.office"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </li>
      <li class="condition-item">
        <div class="condition-key">批次:</div>
        <div class="condition-value">
          <el-select
            class="condition-input"
            v-model="condition.batch"
            size="mini"
            placeholder="请选择"
            clearable
          >
            <el-option
              v-for="item in dropDownList.batch"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </li>
      <li class="condition-item">
        <div class="condition-key">就读层次:</div>
        <div class="condition-value">
          <el-select
            class="condition-input"
            v-model="condition.studyLevel"
            size="mini"
            placeholder="请选择"
            clearable
          >
            <el-option
              v-for="item in dropDownList.studyLevel"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </li>
      <li class="condition-item">
        <div class="condition-key">就读学校:</div>
        <div class="condition-value">
          <el-select
            class="condition-input"
            v-model="condition.school"
            size="mini"
            placeholder="请选择"
            clearable
          >
            <el-option
              v-for="item in dropDownList.school"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </li>
      <li class="condition-item condition-double">
        <div class="condition-key">发放起止时间:</div>
        <div class="condition-value">
          <el-date-picker
            v-model="condition.startEndTime"
            type="daterange"
            size="mini"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </div>
      </li>
    </ul>
    <!-- 查询条件 End -->

    <!-- 操作按钮 Start -->
    <div class="operate">
      <el-button
        type="primary"
        class="el-icon-search"
        size="mini"
        :loading="loading"
      >
        高级查询
      </el-button>
      <el-button
        type="success"
        class="el-icon-download"
        size="mini"
        :loading="exportLoading"
      >
        Excel导出
      </el-button>
    </div>
    <!-- 操作按钮 End -->

    <!-- 表格数据 Start -->
    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column type="index" label="序号" width="50px" align="center" />
      <el-table-column
        v-for="(item, index) in tableHeader"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        align="center"
      />
      <el-table-column label="操作" align="center">
        <template>
          <el-link
            type="primary"
            icon="el-icon-document"
            title="查看"
            :underline="false"
            @click="showInfo"
          />
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格数据 End -->

    <!-- 彈窗 start -->
    <el-dialog
      class="dialog_info"
      :visible.sync="dialogVisible"
      :show-close="showClo"
      :close-on-click-modal="showModal"
      width="70%"
    >
      <div slot="title" class="dialog_title">
        <div>【2022年集团学历教育 "委培奖学金" 】签核确认</div>
        <i class="el-icon-close" @click="dialogVisible = false"></i>
      </div>
      <div class="main">
        <ul class="ul-one">
          <li>
            <span>工號 :</span>
            <span>F1334211</span>
          </li>
          <li>
            <span>姓名 :</span>
            <span>歐陽子望</span>
          </li>
          <li>
            <span>廠區 :</span>
            <span>龍華</span>
          </li>
          <li>
            <span>事業群 :</span>
            <span>CNSBG</span>
          </li>
          <li>
            <span>部門 :</span>
            <span>MIS</span>
          </li>

          <li>
            <span>就讀班級 :</span>
            <span>20軟件15班</span>
          </li>
          <li>
            <span>就讀學校 :</span>
            <span>富士康大學</span>
          </li>
          <li>
            <span>就讀層次 :</span>
            <span>本科</span>
          </li>
          <li>
            <span>就讀專業 :</span>
            <span>計算機科學與技術</span>
          </li>
          <li>
            <span>是否申請委培獎學金 :</span>
            <el-select
              v-model="options_value"
              placeholder="请选择"
              class="apply"
              size="mini"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </li>
        </ul>

        <ul class="ul-one">
          <li>
            <span>獎學金應發放次數 :</span>
            <span>2</span>
          </li>
          <li>
            <span>獎學金已發放次數 :</span>
            <span>2</span>
          </li>
          <li>
            <span>獎學金確認未發放次數 :</span>
            <span>0</span>
          </li>
          <li>
            <span>獎學金待發放次數 :</span>
            <span>0</span>
          </li>
        </ul>
        <ul class="ul-one">
          <li>
            <span>獎學金應發放金額 :</span>
            <span>2</span>
          </li>
          <li>
            <span>獎學金已發放金額 :</span>
            <span>2</span>
          </li>
          <li>
            <span>獎學金確認未發放金額 :</span>
            <span>0</span>
          </li>
          <li>
            <span>獎學金待發放金額 :</span>
            <span>0</span>
          </li>
        </ul>
      </div>
      <div class="footer">
        <div class="title">簽核信息</div>
        <div>
          <el-table
            height="190"
            size="mini"
            :data="dialog_table"
            style="width: 100%"
          >
            <el-table-column
              align="center"
              type="index"
              label="編號"
              width="80"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="grant_num"
              label="第N次發放"
              width="180"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="grant_date"
              label="第N次發放時間"
              width="180"
            >
            </el-table-column>
            <el-table-column align="center" prop="invoice" label="學員上傳發票">
              <template slot-scope="props">
                <span class="invoice_span">{{
                  dialog_table[props.$index].invoice
                }}</span>
                <i class="el-icon-upload" @click="upload"></i>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="confirm"
              label="其他審核及確認"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="confirm_date"
              label="確認時間"
            >
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-dialog>
    <!-- 彈窗 end -->

    <!-- 分页 Start -->
    <el-pagination
      class="pagination"
      :current-page.sync="pagination.current"
      :page-size="pagination.pageSize"
      :page-sizes="pagination.pageSizes"
      :total="pagination.total"
      layout="total, sizes, prev, pager, next, jumper"
      @current-change="changePage"
      @size-change="changeSize"
    >
    </el-pagination>
    <!-- 分页 End -->
  </div>
</template>

<script>
import tableAutoWidth from '@/tools/tableAutoWidth'
export default {
  name: 'CommissioningAgreement',
  data () {
    return {
      condition: { // 查询条件
        empno: '', // 工号
        name: '', // 姓名
        group: '', // 事业群
        site: '', // 厂区
        office: '', // 事业处
        year: '', // 就读年份
        school: '', // 就读学校
        studyLevel: '', // 就读层次
        startEndTime: '', // 发放奖学金起止时间
        batch: '' // 批次
      },
      dropDownList: { // 下拉列表集合
        site: [],
        office: [],
        school: [],
        studyLevel: [],
        batch: []
      },
      loading: false, // 是否正在加载数据
      exportLoading: false, // 是否正在导出数据
      tableData: [
        {
          empno: 'F155555',
          name: '胖虎',
          site: '龍華',
          group: 'CNSBG',
          division: 'MIS',
          class: '',
          category: '',
          batch: '2',
          awards: '一等獎',
          shouldmoney: '5000',
          shouldnum: '1'
        },
        {
          empno: 'F155555',
          name: '小青蛙',
          site: '龍華',
          group: 'CNSBG',
          division: 'MIS',
          class: '20计算机应用10班',
          category: '學院獎學金',
          batch: '2',
          awards: '一等獎',
          shouldmoney: '5000',
          shouldnum: '1'
        },
        {
          empno: 'F155555',
          name: '小青蛙',
          site: '龍華',
          group: 'CNSBG',
          division: 'MIS',
          class: '20计算机应用10班',
          category: '學院獎學金',
          batch: '2',
          awards: '一等獎',
          shouldmoney: '5000',
          shouldnum: '1'
        },
        {
          empno: 'F155555',
          name: '小青蛙',
          site: '龍華',
          group: 'CNSBG',
          division: 'MIS',
          class: '20计算机应用10班',
          category: '學院獎學金',
          batch: '2',
          awards: '一等獎',
          shouldmoney: '5000',
          shouldnum: '1'
        }
      ], // 表格数据
      tableHeader: [ // 表格表头
        { prop: 'empno', label: '工号', width: '80' },
        { prop: 'name', label: '姓名', width: '80' },
        { prop: 'site', label: '厂区', width: '80' },
        { prop: 'group', label: '事业群', width: '80' },
        { prop: 'division', label: '部门', width: '80' },
        { prop: 'class', label: '就读班级', width: '80' },
        { prop: 'category', label: '奖学金类别', width: '80' },
        { prop: 'batch', label: '批次', width: '80' },
        { prop: 'awards', label: '奖项', width: '80' },
        { prop: 'shouldmoney', label: '应发金额', width: '80' },
        { prop: 'shouldnum', label: '应发次数', width: '80' }
      ],
      pagination: { // 分页
        current: 1,
        pageSize: 10,
        pageSizes: [10, 15, 20, 30, 50],
        total: 0
      },
      // 信息窗
      dialogVisible: false,
      showClo: false, // 关闭自带的按钮
      showModal: false, // 点击其他地方不能关闭页面
      // 信息窗口表格
      dialog_table: [{
        grant_num: 2,
        grant_date: '2022/08/09',
        invoice: '已上傳',
        confirm: '已確認發放',
        confirm_date: '2022/10/15'
      },
      {
        grant_num: 2,
        grant_date: '2022/08/09',
        invoice: '已上傳',
        confirm: '已確認發放',
        confirm_date: '2022/10/15'
      },
      {
        grant_num: 2,
        grant_date: '2022/08/09',
        invoice: '已上傳',
        confirm: '已確認發放',
        confirm_date: '2022/10/15'
      },
      {
        grant_num: 2,
        grant_date: '2022/08/09',
        invoice: '已上傳',
        confirm: '已確認發放',
        confirm_date: '2022/10/15'
      }],
      options: [{
        value: 'Y',
        label: '是'
      }, {
        value: 'N',
        label: '否'
      }],
      options_value: ''
    }
  },
  mounted () {
    this.setTableWidth()
  },
  methods: {
    // 动态设置宽度
    setTableWidth () {
      let width = tableAutoWidth(this.tableData, 14)
      let index = -1
      for (let key in this.tableHeader) {
        index++
        this.tableHeader[key].width = width[index]
      }
    },
    // 翻页
    changePage (val) {
      this.pagination.current = val
    },
    // 每页条数变更
    changeSize (val) {
      this.pagination.current = 1
      this.pagination.pageSize = val
    },
    showInfo () {
      console.log(11111111)
      this.dialogVisible = true
    },
    handleClose () {
      console.log('窗口關閉了')
    },
    // 上传
    upload () {
      console.log('点击了上传')
    }
  }
}
</script>

<style>
/*标题背景色*/
.dialog_info .el-dialog__header {
  background-color: #409eff;
  padding: 10px 0;
}
</style>
<style lang="scss" scoped>
.condition {
  &-item {
    display: inline-flex;
    width: 33%;
    height: 40px;
    margin-bottom: 5px;
  }

  &-double {
    width: 66%;
  }

  &-key {
    flex-grow: 0;
    flex-shrink: 0;
    width: 120px;
    height: 40px;
    padding-left: 20px;
    padding-right: 10px;
    line-height: 40px;
    text-align: right;
    box-sizing: border-box;
  }

  &-value {
    display: flex;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    height: 40px;
  }

  &-input {
    width: 100%;
  }
}

.operate {
  margin-bottom: 15px;
  text-align: right;
}

.table-operate {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pagination {
  margin-top: 10px;
  text-align: center;
}

.dialog_info {
  min-width: 800px;

  .dialog_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    color: #fff;

    i {
      margin-right: 15px;
      cursor: pointer;
    }

    @keyframes turn {
      0% {
        transform: rotateZ(0deg);
      }
      0% {
        transform: rotateZ(180deg);
      }
    }

    i:hover {
      font-size: 25px;
      animation-name: turn;
      animation-duration: 1s;
      animation-iteration-count: 1;
    }
  }

  .main {
    .ul-one {
      border-bottom: 1px solid rgba(147, 173, 200, 0.2);
      //   display: flex;
      overflow: hidden;
      li {
        float: left;
        // margin: 10px 20px 10px 20px;
        margin: 10px 0;
        width: 25%;

        span:nth-child(2) {
          color: #409eff;
        }

        .apply {
          width: 60px;
        }
      }
    }
  }

  .footer {
    box-sizing: border-box;
    width: 100%;
    padding: 30px 20px 20px 20px;

    .title {
      font-size: 20px;
      margin-bottom: 10px;
    }

    .invoice_span {
      padding: 3px 5px;
      color: #fff;
      background-color: #409eff;
      margin-right: 3px;
    }

    i {
      font-size: 20px;
      cursor: pointer;
      color: #6b91cc;
    }
  }
}
</style>
