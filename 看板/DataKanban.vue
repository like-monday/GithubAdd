<template>
  <div class="report shadow3">
    <!-- 页头start -->
    <Header></Header>
    <!-- 页头end -->

    <!-- 数据、出勤看板start -->
    <Attendance></Attendance>
    <!-- 数据、出勤看板end -->

    <!-- 年资、籍贯、资位start -->
    <Qualification></Qualification>
    <!-- 年资、籍贯、资位end -->

    <!-- 学历、员工之声start -->
    <Education></Education>
    <!-- 学历、员工之声end -->

    <!-- 奖惩、招聘、培训start -->
    <Category></Category>
    <!-- 奖惩、招聘、培训end -->

    <!-- 离职看板start -->
    <Resign></Resign>
    <!-- 离职看板end -->
  </div>
</template>

<script>
import Header from './Datakanbans/components/Header.vue'
import Resign from './Datakanbans/components/Resign.vue'
import Attendance from './Datakanbans/components/Attendance.vue'
import Qualification from './Datakanbans/components/Qualification.vue'
import Education from './Datakanbans/components/Education.vue'
import Category from './Datakanbans/components/Category.vue'
import "echarts/map/js/china.js";
export default {
  name: "DataKanban",
  data () {
    return {
      permissions: { // 权限管理
        attendance_information: true, // 风险预警、出勤看板权限
        information: true, // 在职人数、平均年龄、员工类别、性别比例权限
        qualification_map: true, // 年资、资位、籍贯分布权限
        education_employeevoice: true, // 学历分布、员工之声权限
        category_train: true, // 奖惩看板、培训看板权限
        recruitment: false, // 招聘看板权限
        resign: true // 离职看板权限
      },
      information: [{ // 在职、年龄、员工、性别
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
      ]
    };
  },
  components:{
    Resign,
    Header,
    Attendance,
    Qualification,
    Education,
    Category
  },
  mounted () {
    // 调用接口
    // this.getno()
    // this.getSite()
    // this.getRest();
  },
  methods: {
    onSubmit () {
      console.log("submit!");
    }
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
