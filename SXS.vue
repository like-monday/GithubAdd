<template>
  <!-- 校招生专区-工作日志 -->
  <div id="JobWill">
    <div class="SubMenu"><SubMenu /></div>
    <div>
      <div class="userInfo">
        <div class="empno">
          <span>工号:</span>
          <span>F1339411</span>
        </div>
        <div class="name">
          <span>姓名:</span>
          <span>彭于晏</span>
        </div>
        <div class="name">
          <span>实习部门:</span>
          <span>咨询管理处</span>
        </div>
        <div class="name">
          <span>组织定位:</span>
          <span>不是很清楚</span>
        </div>
      </div>
      <div class="table">
        <el-table
          :data="tableData"
          :span-method="objectSpanMethod"
          :header-cell-style="headerStyle"
          border
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column
            prop="id"
            label="培养阶段"
            align="center"
            width="100"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="培养计划"
            width="300"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="amount1" label="课表" align="center">
          </el-table-column>
          <el-table-column prop="amount2" label="课表" align="center">
          </el-table-column>
          <el-table-column prop="amount3" label="课表" align="center">
          </el-table-column>
          <el-table-column prop="amount4" label="课表" align="center">
          </el-table-column>
          <el-table-column prop="amount5" label="课表" align="center">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import SubMenu from './SubMenu.vue'
export default {
  name: 'JobWill',
  components: { SubMenu },
  data () {
    return {
      tableData: [{
        id: '新人训',
        name: '培训计划因为展示,不做定时开启',
        amount1: '',
        amount2: '',
        amount3: '',
        amount4: '',
        amount5: ''
      }, {
        id: '产线历练',
        name: 'SMT实习（12/16-12/30）',
        amount1: '5G介绍 12/21 晚',
        amount2: '半导体技术 12/30 晚',
        amount3: '防疫 1/15 晚',
        amount4: '8S 2/14 晚',
        amount5: 'Fii产品 介绍 3/5 晚'
      }, {
        id: '产线历练',
        name: 'PTH实习（12/16-12/30）',
        amount1: '5G介绍 12/21 晚',
        amount2: '半导体技术 12/30 晚',
        amount3: '防疫 1/15 晚',
        amount4: '8S 2/14 晚',
        amount5: 'Fii产品 介绍 3/5 晚'
      }, {
        id: '产线历练',
        name: 'SI实习（12/16-12/30）',
        amount1: '5G介绍 12/21 晚',
        amount2: '半导体技术 12/30 晚',
        amount3: '防疫 1/15 晚',
        amount4: '8S 2/14 晚',
        amount5: 'Fii产品 介绍 3/5 晚'
      }, {
        id: '部门历练',
        name: '部门培训计划'
      }]
    }
  },
  methods: {
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      //   console.log('当前行号', rowIndex, '当前列号', columnIndex)
      switch (columnIndex) {
        case 0:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          if (rowIndex === 1) {
            return {
              rowspan: 3,
              colspan: 1
            }
          } else if (rowIndex === 2 || rowIndex === 3) {
            return {
              rowspan: 0,
              colspan: 0
            }
          } else {
            return {
              rowspan: 1,
              colspan: 1
            }
          }
      }
    },
    headerStyle ({ row, columnIndex }) {
      row[2].colSpan = 5
      row[3].colSpan = 0
      row[4].colSpan = 0
      row[5].colSpan = 0
      row[6].colSpan = 0
      return 'font-weight: 600;color:black;font-size:17px;'
    }
  }
}
</script>

<style lang="scss" scoped>
#JobWill {
  display: flex;
  .SubMenu {
  }
  .userInfo {
    display: flex;
    div {
      padding: 10px 20px;
      font-size: 20px;
    }
  }
  .table {
    .table_header {
      font-weight: 600;
    }
  }
}
</style>
