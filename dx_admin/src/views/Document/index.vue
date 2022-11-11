<template>
  <div id="Document">
    <el-row>
      <el-button type="primary" icon="el-icon-plus" @click="showDialog">添加</el-button>
    </el-row>
    <el-table :data="documentData" style="width: 100%" fit border>
      <el-table-column align="center" prop="prop" label="序号" type="index" width="60">
      </el-table-column>
      <el-table-column prop="name" label="网站名称" width="120">
      </el-table-column>
      <el-table-column prop="describes" label="网站描述" width="200">
      </el-table-column>
      <el-table-column prop="https" label="网站地址"> </el-table-column>
      <el-table-column align="center" prop="prop" label="网站Logo">
        <template slot-scope="{ row }">
          <img :src="row.icon" v-show="row.icon != ''" style="width: 50px" />
          <span v-show="row.icon == ''">此数据暂无图片......</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="lastdate" label="添加日期" width="180"></el-table-column>
      <el-table-column align="center" prop="https" label="操作">
        <template slot-scope="{ row, $index }">
          <el-button size="mini" type="warning" icon="el-icon-edit" @click="updateTradeMark(row)">修改</el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete" @click="deleteDocuments(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="search_form.page" :page-sizes="[5, 10, 15, 20]" :page-size="search_form.pagesize"
      layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>

    <!-- 弹出框 -->
    <el-dialog :title="tmForm.id ? '修改文档资源' : '添加文档资源'" :visible.sync="dialogFormVisible">
      <!-- form表单 model属性：收集表单的数据到哪个对象身上-->
      <el-form style="width: 80%" :model="tmForm" ref="ruleForm">
        <el-form-item label="网站名称" label-width="120px">
          <el-input autocomplete="off" v-model="tmForm.name"></el-input>
        </el-form-item>
        <el-form-item label="网站描述" label-width="120px">
          <el-input autocomplete="off" v-model="tmForm.describes"></el-input>
        </el-form-item>
        <el-form-item label="网站LOGO" label-width="120px">
          <!--这里收集数据：不能使用v-model，因为不是表单元素
           action:设置图片上传的地址
           :on-success：可以检测到图片上传成功，当图片上传成功，会执行一次
           :before-upload：可以在上传图片之前，会执行一次-->
          <el-image style="width: 100px; height: 100px" :src="tmForm.icon" fit="cover"></el-image>
        </el-form-item>
        <el-form-item label="网站Logo地址" label-width="120px">
          <el-input autocomplete="off" v-model="tmForm.icon"></el-input>
        </el-form-item>
        <el-form-item label="网站地址" label-width="120px">
          <el-input autocomplete="off" v-model="tmForm.https"></el-input>
        </el-form-item>
        <el-form-item label="修改时间" label-width="120px">
          <el-input autocomplete="off" v-model="tmForm.lastdate"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button v-if="tmForm.id" type="primary" @click="addOrUpdateDocument">修 改</el-button>
        <el-button v-else type="primary" @click="addDocuments">添 加</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  reqDocument,
  updateDocument,
  addDocument,
  deleteDocument,
} from "@/api/Document";
import axios from 'axios'
export default {
  data () {
    return {
      total: 100, // 总条数
      search_form: {
        pagesize: 5, // 每页展示条数
        page: 1, // 当前页数
        type: 'document'
      },
      documentData: [],
      // 弹出对话框收集的内容
      tmForm: {
        name: "",
        describes:'',
        https: "",
        icon: "",
        lastdate: "",
        id: ""
      },
      //对话框显示隐藏控制的属性
      dialogFormVisible: false,
    };
  },
  mounted () {
    this.getDocument();
  },
  methods: {
    handleSizeChange (val) {
      this.search_form.pagesize = val
      this.getDocument()
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      this.search_form.page = val
      this.getDocument()
      // console.log(`当前页: ${val}`);
    },
    //获取信息列表
    getDocument () {
      // console.log('发送的数据：',JSON.stringify(this.search_form))
      reqDocument(this.search_form).then((result) => {
        console.log("修改后的获取信息列表", result);
        this.total = result.data.total
        this.documentData = result.data.data;
      })
    },
    // 点击添加按钮
    showDialog () {
      this.dialogFormVisible = true;
      this.tmForm = {
        name: "",
        describes:'',
        https: "",
        icon: "",
        lastdate: this.$formateDate("YYYY-mm-dd HH:MM", new Date()),
        id: "",
        type: "document"
      }
    },
    // 修改按钮
    updateTradeMark (row) {
      this.tmForm = {
        ...row
      };
      this.tmForm.lastdate = this.$formateDate("YYYY-mm-dd HH:MM", new Date());
      this.dialogFormVisible = true;
      // console.log("@修改", row);
    },
    // 删除按钮
    deleteDocuments (row) {
      this.$confirm('此操作将永久删除该网站, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const result = await deleteDocument(row.id);
        if (result.data.status === 0) {
          this.$message({
            message: result.data.message,
            type: "success",
          });
          this.dialogFormVisible = false;
          this.getDocument();
        } else {
          this.$message.error("删除失败");
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // 修改信息
    addOrUpdateDocument () {
      updateDocument(this.tmForm).then((result) => {
        this.dialogFormVisible = false;
        if (result.data.status === 0) {
          this.$message({
            message: result.data.message,
            type: "success",
          });
          this.getDocument();
        } else {
          this.$message.error("修改失败");
        }
      })
    },
    // 添加数据
    addDocuments () {
      addDocument(this.tmForm).then((result) => {
        this.dialogFormVisible = false;
        if (result.data.status === 0) {
          this.$message({
            message: result.data.message,
            type: "success",
          });
          this.getDocument();
        }else{
          this.$message.error(result.data.message);
        }
      })
    }
  },
};
</script>

<style scoped lang='less'>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

#Document {
  padding: 20px;
}

.el-row {
  margin-bottom: 10px;
}

.el-pagination {
  text-align: center;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
