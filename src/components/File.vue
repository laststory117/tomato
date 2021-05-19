<template>
  <div>
    <div class="search">
      <el-input placeholder="输入要txt文件内容" v-model="name">
        <el-button slot="append" icon="el-icon-document" @click="createTxt"
          >创建{{ this.name || "可爱" }}.txt</el-button
        >
      </el-input>
    </div>
  </div>
</template>
<script>
import {createTxt} from "@/service/file";

export default {
  data: () => ({
    name: ""
  }),
  methods: {
    async createTxt() {
      const params = {
        name: this.name
      };
      const res = await createTxt(params);
      if (res) {
        this.$message.success(`${res.data.data.name}创建成功`);
      } else {
        this.$message.error("txt创建失败");
      }
    }
  }
};
</script>
