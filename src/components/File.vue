<template>
  <div>
    <div class="search">
      <el-input placeholder="输入要txt文件内容" v-model="content">
        <el-button slot="append" icon="el-icon-document" @click="createTxt"
          >创建txt文件</el-button
        >
      </el-input>
    </div>
  </div>
</template>
<script>
import {createTxt} from "@/service/file";

export default {
  data: () => ({
    content: ""
  }),
  methods: {
    async createTxt() {
      const params = {
        content: this.content
      };
      const res = await createTxt(params);
      if (res) {
        this.$message.success("创建成功");
      } else {
        this.$message.error("创建失败");
      }
    }
  }
};
</script>
