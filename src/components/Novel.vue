<template>
  <div class="novel">
    <div class="search">
      <el-input placeholder="输入要搜索的小说名称">
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="search"
        ></el-button>
      </el-input>
    </div>
    <div class="content">
      <div class="item">{{ msg }}</div>
    </div>
  </div>
</template>

<script>
import { testApi } from "@/service/novel";

export default {
  name: "Novel",
  data() {
    return {
      msg: ""
    };
  },
  async created() {},
  methods: {
    async search() {
      const res = await testApi();
      this.msg = res.data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
