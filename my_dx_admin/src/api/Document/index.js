// 该模块为技术文档
import request from "../../utils/request";

// 获取全部网站信息
export const reqDocument = (data) =>
  request({
    url: `document_type`,
    method: "post",
    data
  });

// 修改网站信息
export const updateDocument = (data) =>
  request({
    url: `document`,
    method: "put",
    data: data,
  });

// 增加网站信息
export const addDocument = (data) =>
  request({
    url: `document`,
    method: "post",
    data,
  });

// 删除网站信息
export const deleteDocument = (id) =>
  request({
    url: `document?id=${id}`,
    method: "delete",
  });
