<template>
  <div>
    <van-uploader
      v-model="fileList"
      multiple
      @click-preview="onpreview"
      accept="file"
    />
    <!-- <iframe v-if="url" :src="url" width="100%" height="500px"></iframe> -->
    <!-- <embed :src="url" type="application/pdf" width="100%" height="100%" /> -->

    <!-- <div id="pdf_viewer"></div> -->
    <div id="myPDF" style="height: 100%; width: 95%; margin: auto"></div>

    <a :href="url">点击试试</a>
  </div>
</template>

<script>
// import "../assets/js/jquery.min.js";
import $ from "jquery";
import "../assets/js/jquery.mousewheel";
import "../assets/js/jquery.panzoom";
import "../assets/js/jquery.touchPDF";
import "../assets/js/jquery.touchSwipe";
import "../assets/js/pdf.compatibility";
import "../assets/js/pdf";
export default {
  data() {
    return {
      url: "",
      fileList: [
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ],
    };
  },
  methods: {
    onpreview(file) {
      $("#myPDF").pdf({
        source: file,
        tabs: [
          { title: "第2页", page: 2, color: "orange" },
          { title: "第5页", page: 5, color: "green" },
          { title: "第10页", page: 10, color: "blue" },
        ],
      });
      //   console.log(file);
      //   let base = file.content;
      //   let blob = this.dataURLtoBlob(base);
      //   //   console.log(blob);
      //   //   let files = this.blobToFile(blob, "优秀简历");
      //   //   console.log(files);
      //   //   this.url = files;
      //   console.log(window.URL.createObjectURL(blob));
      //   this.url = window.URL.createObjectURL(blob);
      //   //  blob:http://localhost:8080/caa3bc9c-ddbd-4cb1-a336-019bde900857
      //   if (PDFObject.supportsPDFs) {
      //     // PDF嵌入到网页
      //     PDFObject.embed(file, "#pdf_viewer");
      //   } else {
      //     location.href = "/canvas";
      //   }
    },
    //将base64转换为blob
    dataURLtoBlob: function (dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },
    //将blob转换为file
    blobToFile: function (theBlob, fileName) {
      theBlob.lastModifiedDate = new Date();
      theBlob.name = fileName;
      return theBlob;
    },
  },
};
</script>
<style scoped>
#pdf_viewer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>