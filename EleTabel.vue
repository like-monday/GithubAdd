<template>
  <div>
    <el-table :data="tableData" :span-method="objectSpanMethod" :header-cell-style="headerStyle" border
      style="width: 100%; margin-top: 20px">
      <el-table-column prop="id" label="ID" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="amount1" label="课表">
      </el-table-column>
      <el-table-column prop="amount2" label="课表">
      </el-table-column>
      <el-table-column prop="amount3" label="课表">
      </el-table-column>
      <el-table-column prop="amount4" label="课表">
      </el-table-column>
      <el-table-column prop="amount5" label="课表">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Test",
  data () {
    return {
      tableData: [{
        id: '新人训',
        name: '培训计划因为展示,不做定时开启',
        amount1: '5G介绍 12/21 晚',
        amount2: '半导体技术 12/30 晚',
        amount3: '防疫 1/15 晚',
        amount4: '8S 2/14 晚',
        amount5: 'Fii产品 介绍 3/5 晚'
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
        name: '部门培训计划',
        amount1: '5G介绍 12/21 晚',
        amount2: '半导体技术 12/30 晚',
        amount3: '防疫 1/15 晚',
        amount4: '8S 2/14 晚',
        amount5: 'Fii产品 介绍 3/5 晚'
      }]
    };
  },
  mounted () {
    this.$store.dispatch("reqUserInfo");
  },
  methods: {
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      console.log('当前行号', rowIndex, '当前列号', columnIndex);
      if (columnIndex === 0) {
        if (rowIndex === 1) {
          return {
            rowspan: 3,
            colspan: 1
          };
        } else if (rowIndex === 2 || rowIndex === 3) {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
        else {
          return {
            rowspan: 1,
            colspan: 1
          };
        }
      }
    },
    headerStyle ({ row, columnIndex }) {
      row[2].colSpan = 5;
      row[3].colSpan = 0;
      row[4].colSpan = 0;
      row[5].colSpan = 0;
      row[6].colSpan = 0;
    }
  },
};
</script>

<style>

</style>
