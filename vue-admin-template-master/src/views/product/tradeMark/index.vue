<template>
  <div>
    <!-- 按钮 -->
    <el-button
      type="primary"
      icon="el-icon-plus"
      style="margin: 10px 0"
      @click="showDialog"
      >添加</el-button
    >
    <!-- 表格组件
    data:表格组件，将来需要展示的数据.....数组类型
    border:表格添加边框
    label:显示的标题
    width:对应列的宽度
    align:标题的对齐方式
    prop：对应列的字段名
    注意1：elementUI当中的table组件，展示的数据是以一列一列进行展示数据 -->
    <el-table style="width: 100%" border :data="list">
      <el-table-column
        label="序号"
        prop="prop"
        width="80px"
        align="center"
        type="index"
      ></el-table-column>
      <el-table-column
        label="品牌名称"
        prop="tmName"
        width="width"
        align="center"
      ></el-table-column>
      <el-table-column
        label="品牌LOGO"
        prop="prop"
        width="width"
        align="center"
      >
        <template slot-scope="{ row, $index }">
          <img
            :src="row.logoUrl"
            v-show="row.logoUrl != '/static/default.jpg'"
            style="width: 100px"
          />
          <span v-show="row.logoUrl == '/static/default.jpg'"
            >此数据暂无图片......</span
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" prop="prop" width="width" align="center">
        <template slot-scope="{ row, $index }">
          <el-button
            type="warning"
            icon="el-icon-edit"
            @click="updateTradeMark(row)"
            >修改</el-button
          >
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="deleteTradeMark(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器
    当前第几页、数据总条数、每一页展示条数、连续页码数
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
    current-page:代表的是当前第几页
    total:代表分页器一共需要展示数据条数
    page-size:代表的是每一页需要展示多少条数组
    page-sizes:代表可以设置每一页展示多少条数据
    layout:可以实现分页器布局
    pager-count：页码按钮的数量，当总页数超过该值时会折叠
    注意： -->
    <el-pagination
      style="margin-top: 20px; text-align: center"
      :current-page="6"
      :total="total"
      :page-size="3"
      :pager-count="9"
      :page-sizes="[3, 5, 10]"
      @current-change="getPageList"
      @size-change="handleSizeChange"
      layout=" prev, pager, next, jumper,->,sizes,total"
    >
    </el-pagination>
    <!-- 对话框
    :visible.sync：控制对话框显示与隐藏用的
    Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，
    并将 Form-Item 的 prop 属性设置为需校验的字段名即可
     -->
    <el-dialog
      :title="tmForm.id ? '修改品牌' : '添加品牌'"
      :visible.sync="dialogFormVisible"
    >
      <!-- form表单 model属性：收集表单的数据到哪个对象身上-->
      <el-form style="width: 80%" :model="tmForm" :rules="rules" ref="ruleForm">
        <el-form-item label="品牌名称" label-width="100px" prop="tmName">
          <el-input autocomplete="off" v-model="tmForm.tmName"></el-input>
        </el-form-item>
        <el-form-item label="品牌LOGO" label-width="100px" prop="logoUrl">
          <!--这里收集数据：不能使用v-model，因为不是表单元素
           action:设置图片上传的地址
           :on-success：可以检测到图片上传成功，当图片上传成功，会执行一次
           :before-upload：可以在上传图片之前，会执行一次-->
          <el-upload
            class="avatar-uploader"
            action="/dev-api/admin/product/fileUpload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="tmForm.logoUrl" :src="tmForm.logoUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addOrUpdateTradeMark"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { Row } from "element-ui";
export default {
  name: "tradeMark",
  data() {
    //自定义校验规则
    var validateTmName = (rule, value, callback) => {
      if (value.length < 2 || value.length > 10) {
        callback(new Error("品牌名称2-10位"));
      } else {
        callback();
      }
    };
    return {
      //代表分页器第几页
      page: 1,
      //当前页数展示数据条数
      limit: 3,
      //总条数
      total: 0,
      //列表展示的数据
      list: [],
      //对话框显示隐藏控制的属性
      dialogFormVisible: false,
      //上传图片使用的
      imageUrl: "",
      //收集品牌信息,需要看文档来写
      tmForm: {
        tmName: "",
        logoUrl: "",
      },
      //表单验证规则
      rules: {
        //品牌名称的验证规则
        //用户行为设置 trigger:(blur:)
        tmName: [
          { required: true, message: "请输入品牌名称", trigger: "blur" },
          //自定义校验规则
          { validator: validateTmName, trigger: "change" },
        ],
        //品牌logo的验证规则
        logoUrl: [
          { required: true, message: "请选择品牌图片", trigger: "change" },
        ],
      },
    };
  },
  mounted() {
    //获取列表数据方法
    this.getPageList();
  },
  methods: {
    //获取品牌列表的数据
    async getPageList(pager = 1) {
      this.page = pager;
      //解构出参数
      const { page, limit } = this;
      //获取品牌列表的接口 发请求的时候，这个函数需要带参,所以初始化连个字段
      let result = await this.$API.trademark.reqTradeMarkList(page, limit);
      if (result.code == 200) {
        this.total = result.data.total;
        this.list = result.data.records;
      }
    },
    //当分页器某一页需要展示数据的条数发生变化的时候会触发
    handleSizeChange(limit) {
      //整理参数
      this.limit = limit;
      this.getPageList();
    },
    //点击添加品牌按钮
    showDialog() {
      //显示对话框
      this.dialogFormVisible = true;
      //清楚数据
      this.tmForm = { tmName: "", logoUrl: "" };
    },
    //修改某一个品牌
    updateTradeMark(row) {
      //row:当前用户选中这个品牌信息
      this.dialogFormVisible = true;
      //将服务器返回的信息，直接赋值给了tmForm进行展示
      //也就是说tmForm存储的即为服务器返回的品牌信息
      this.tmForm = { ...row };
    },
    //上传图片成功
    handleAvatarSuccess(res, file) {
      //res：上传成功之后返回前端数据
      //file：上传成功之后服务器返回前端数据
      this.tmForm.logoUrl = res.data;
    },
    //图片上传之前
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    //添加按钮（添加品牌|修改品牌）
    addOrUpdateTradeMark() {
      //当全部验证字段通过，再去书写业务逻辑
      this.$refs.ruleForm.validate(async (success) => {
        //如果全部字段符合条件
        if (success) {
          this.dialogFormVisible = false;
          //发请求（添加品牌|修改品牌）
          let result = await this.$API.trademark.reqAddOrUpdateTradeMark(
            this.tmForm
          );
          if (result.code == 200) {
            //弹出信息:添加、修改成功
            this.$message({
              type: "success",
              message: this.tmForm.id ? "修改成功" : "添加品牌成功",
            });
            //添加或者修改品牌成功之后，需要再次获取品牌列表
            //如果添加品牌，停留在第一页，修改品牌应该留在当前页
            this.getPageList(this.tmForm.id ? this.page : 1);
          }
        } else {
          console.log("error");
          return false;
        }
      });
    },
    //删除品牌的操作
    deleteTradeMark(row) {
      this.$confirm(
        `此操作将永久删除《${row.tmName}》品牌, 是否继续?`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(async () => {
          //当用户点击确定按钮的时候触发
          //向服务器发请求
          let result = await this.$API.trademark.reqDeleteTradeMark(row.id);
          if (result.code == 200) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            //再次获取品牌列表数据
            this.getPageList(this.list.length > 1 ? this.page : this.page - 1);
          }
        })
        .catch(() => {
          //点击取消的时候触发
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style>
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