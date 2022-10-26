<template>
  <div id="ShowPdf">
    <!-- <router-view /> -->
    <PDFJSViewer :path="`${path}`" :fileName="`${name}`" />
  </div>
</template>
<script>
import PDFJSViewer from "@/components/PDFJSViewer";

export default {
  name: "ShowPdf",
  components: {
    PDFJSViewer,
  },
  data() {
    return {
      name: "优秀简历1.pdf", // 这里是需要预览的 PDF 文件名
      path: "lib/web/viewer.html",
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      this.name = file.file.name;
      console.log(file.file.name);
    },
  },
};
</script>
<style>
</style>
