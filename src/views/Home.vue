<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="小说搜索" name="first">
      <Novel></Novel>
    </el-tab-pane>
    <el-tab-pane label="待定功能1" name="second">待定功能1</el-tab-pane>
    <el-tab-pane label="待定功能2" name="third">待定功能2</el-tab-pane>
    <el-tab-pane label="待定功能3" name="fourth">待定功能3</el-tab-pane>
  </el-tabs>
</template>
<script>
import Novel from "@/components/Novel";

export default {
  components: {
    Novel
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
