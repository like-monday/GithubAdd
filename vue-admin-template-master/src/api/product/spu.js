import request from '@/utils/request';

//获取spu列表数据的接口
//URL:/admin/product/{page}/{limit}   get  page limit category3Id
export const reqSpuList = (page, limit, category3Id) => request({
  url: `admin/product/${page}/${limit}`,
  method: 'get',
  params: {
    category3Id
  }
})

//获取spu信息
//URL:/admin/product/getSpuById{spuId} get  
export const reqSpu = (spuId) => request({
  url: `/admin/product/getSpuById/${spuId}`,
  method: 'get'
})

//获取品牌的信息
//URL:/admin/product/baseTrademark/getTrademarkList  get
export const reqTradeMarkList = () => request({
  url: `/admin/product/baseTrademark/getTrademarkList`,
  method: 'get'
})

//获spu图标的接口
//URL:/admin/product/spuImageList/{spuId} get 
export const reqSpuImageList = (spuId) => request({
  url: `/admin/product/spuImageList/${spuId}`,
  method: 'get'
})

//获取平台全部销售属性---整个平台销售属性一共三个
//URL:/admin/product/baseSaleAttrList  get
export const reqBaseSaleAttrList = () => request({
  url: '/admin/product/baseSaleAttrList',
  method: 'get'
})

//修改SPU或者是添加SPU：对于修改或者添加，携带给服务器参数大致是一样的，唯一的区别是携带的参数是否带ID
export const reqAddOrUpdateSpu = (spuInfo) => {
  //携带的参数带有ID
  if (spuInfo.id) {
    return request({
      url: '/admin/product/updateSpuInfo',
      method: 'post',
      data: spuInfo
    });
  } else {
    //携带的参数是不带ID的
    return request({
      url: '/admin/product/saveSpuInfo',
      method: 'post',
      data: spuInfo
    });
  }
}

//删除SPU
//URL:/admin/product/deleteSpu/{spuId}
export const reqDeleteSpu = (spuId) => request({
  url: `/admin/product/deleteSpu/${spuId}`,
  method: 'delete'
})

//********************************接着sku.js里面的内容*************************************
//URL:/admin/product/saveSkuInfo  post
export const reqAddSku = (skuInfo) => request({
  url: `/admin/product/saveSkuInfo`,
  method: 'post',
  data: skuInfo
})

//获取SKU列表数据的接口
//URL:/admin/product/findBySpuId/{spuId}  get
export const reqSkuList = (spuId) => request({
  url: `/admin/product/findBySpuId/${spuId}`,
  method: 'get'
})
