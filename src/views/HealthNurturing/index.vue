<template>
  <div class="consultation">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="养生视频" name="first">
        <b-media tag="li">
          <template v-slot:aside>
            <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
          </template>
          <h5 class="mt-0 mb-2">经常半夜突然醒？睡前按摩1个穴位</h5>
          <p class="mb-0">观看视频</p>
        </b-media>
        <b-media tag="li" class="my-4">
          <template v-slot:aside>
            <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
          </template>

          <h5 class="mt-0 mb-2">睡觉姿势会诱发心脏病？专家揪出错误的习惯，千万别再犯了</h5>
          <p class="mb-0">观看视频</p>
        </b-media>

        <b-media tag="li">
          <template v-slot:aside>
            <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
          </template>

          <h5 class="mt-0 mb-2">85岁国家级名老中医的养生法，后脑勺一个穴位，补肾健脑延年益寿</h5>
          <p class="mb-0">观看视频</p>
        </b-media>
      </el-tab-pane>
      <el-tab-pane label="养生小贴士" name="second">
        <b-media tag="li">
          <template v-slot:aside>
            <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
          </template>

          <h5 class="mt-0 mb-2">睡觉姿势会诱发心脏病？专家揪出错误的习惯，千万别再犯了</h5>
          <p class="mb-0">观看视频</p>
        </b-media>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Consultation",
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick() {
      console.log("23");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
