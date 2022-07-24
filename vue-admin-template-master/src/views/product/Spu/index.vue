<template>
  <div>
    <el-card style="margin: 20px 0">
      <!-- 三级联动已经是全局组件了 -->
      <CategorySelect
        @getCategoryId="getCategoryId"
        :show="scene != 0"
      ></CategorySelect>
    </el-card>
    <el-card>
      <!-- 底部这里是有三部分进行切换的 -->
      <div v-show="scene == 0">
        <!-- 展示SPU列表的结构 -->
        <el-button
          type="primary"
          icon="el-icon-plus"
          :disabled="!category3Id"
          @click="addSpu"
          >添加SPU</el-button
        >
        <el-table style="width: 100%" border :data="records">
          <el-table-column type="index" label="序号" width="80" align="center">
          </el-table-column>
          <el-table-column prop="spuName" label="spu名称" width="width">
          </el-table-column>
          <el-table-column prop="description" label="spu描述" width="width">
          </el-table-column>
          <el-table-column prop="prop" label="操作" width="width">
            <template slot-scope="{ row, $index }">
              <!-- @click="addSpu" -->
              <hint-button
                type="success"
                icon="el-icon-plus"
                title="添加sku"
                @click="addSku(row)"
              ></hint-button>
              <hint-button
                type="waring"
                icon="el-icon-edit"
                title="修改spu"
                @click="updateSpu(row)"
              ></hint-button>
              <hint-button
                type="info"
                icon="el-icon-info"
                title="查看当前spu全部sku列表"
                @click="handler(row)"
              ></hint-button>
              <el-popconfirm
                title="确定删除这段内容吗？"
                @onConfirm="deleteSpu(row)"
              >
                <hint-button
                  type="danger"
                  icon="el-icon-delete"
                  title="删除spu"
                  slot="reference"
                ></hint-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <!-- @current-change="getPageList"
          -->
        <el-pagination
          style="margin-top: 20px; text-align: center"
          :current-page="page"
          :total="total"
          :page-size="limit"
          :page-sizes="[3, 5, 10]"
          layout=" prev, pager, next, jumper,->,sizes,total"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        >
        </el-pagination>
      </div>
      <SpuForm
        v-show="scene == 1"
        @changeScene="changeScene"
        ref="spu"
      ></SpuForm>
      <SkuForm
        v-show="scene == 2"
        ref="sku"
        @changeScenes="changeScenes"
      ></SkuForm>
    </el-card>
    <el-dialog
      :title="`${spu.spuName}的sku列表`"
      :visible.sync="dialogTableVisible"
    >
      <!-- table展示sku列表 -->
      <el-table :data="skuList" style="width: 100%" border v-loading="loading">
        <el-table-column prop="skuName" label="名称" width="width">
        </el-table-column>
        <el-table-column prop="price" label="价格" width="120">
        </el-table-column>
        <el-table-column prop="weight" label="重量" width="120">
        </el-table-column>
        <el-table-column label="默认图片" width="width">
          <template slot-scope="{ row, $index }">
            <img :src="row.skuDefaultImg" alt="" style="width: 100px" />
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import SpuForm from "./SpuForm";
import SkuForm from "./SkuForm";

export default {
  name: "Spu",
  components: { SpuForm, SkuForm },
  data() {
    return {
      category1Id: "",
      category2Id: "",
      category3Id: "",
      page: 1, //分页器当前第几页
      limit: 3, //每一页展示多少页
      records: [], //spu列表数据
      total: 0, //分页器一共需要展示数据
      scene: 0, //0：代表展示spu列表数据  1：添加spu|修改spu 2：添加spu
      dialogTableVisible: false,
      spu: {},
      skuList: [], //存储的是SKU列表的数据
      loading: true,
    };
  },
  methods: {
    //三级联动的自定义事件,可以把子组件的相应的id传递给父组件
    getCategoryId({ categoryId, level }) {
      //categoryId：获取到一、二、三级分类的id,level：为了区分是几级Id
      if (level == 1) {
        this.category1Id = categoryId;
        //清除二三级分类的Id
        this.category2Id = "";
        this.category3Id = "";
      } else if (level == 2) {
        this.category2Id = categoryId;
        this.category3Id = "";
      } else {
        this.category3Id = categoryId;
        //获取spu类的方法
        this.getSpuList();
      }
    },
    //获取Spu列表数据的方法
    async getSpuList() {
      //携带三个参数：page 第几页  limit：每一页需要展示多少条数据  三级分类id
      const { page, limit, category3Id } = this;
      let result = await this.$API.spu.reqSpuList(page, limit, category3Id);
      if (result.code == 200) {
        this.total = result.data.total;
        this.records = result.data.records;
      }
    },
    //点击分页器获取不同页数的数据
    handleCurrentChange(page) {
      this.page = page;
      this.getSpuList(); //39集
    },
    //当前分页器的某一个展示数据条数发生变化的回调
    handleSizeChange(limit) {
      this.limit = limit;
      this.getSpuList();
    },
    //添加SPU按钮的回调
    addSpu() {
      this.scene = 1;
      //通知子组件SouForm发请求，----两个
      this.$refs.spu.addSpuData(this.category3Id);
    },
    //修改某一个SPU
    updateSpu(row) {
      this.scene = 1;
      //获取子组件SpuForm子组件的
      //在父组件中可以通过$ref获取子组件、等等
      this.$refs.spu.initSpuData(row);
    },
    //自定义事件回调
    changeScene({ scene, flag }) {
      //flag这个形参为了区分保存按钮是添加还是修改
      //切换场景
      this.scene = scene;
      if (flag == "修改") {
        this.getSpuList(this.page);
      } else {
        this.getSpuList();
      }
    },
    //删除Spu的按钮的回调
    async deleteSpu(row) {
      let result = await this.$API.spu.reqDeleteSpu(row.id);
      if (result.code == 200) {
        this.$message({ type: "success", message: "删除成功" });
        this.getSpuList(this.records.length > 1 ? this.page : this.page - 1);
      }
    },
    //添加SKU按钮的回调
    addSku(row) {
      //切换场景为2
      this.scene = 2;
      //父组件调用子组件的方法，让子组件发三个请求
      this.$refs.sku.getData(this.category1Id, this.category2Id, row);
    },
    //skuform通知父组件修改场景
    changeScenes(scene) {
      this.scene = scene;
    },
    //查看SKU按钮的回调
    async handler(spu) {
      this.dialogTableVisible = true;
      //保存spu信息
      this.spu = spu;
      //获取sku列表的数据进行展示
      this.loading = true;
      let result = await this.$API.spu.reqSkuList(spu.id);
      if (result.code == 200) {
        this.skuList = result.data;
        //loading隐藏
        this.loading = false;
      }
    },
  },
};
</script>

<style>
</style>