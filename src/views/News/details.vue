<template>
  <div class="details" v-loading="loading">
    <!-- <el-divider></el-divider> -->
    <hr style="margin-top: 0.25rem" />

    <el-row>
      <el-col :span="24">
        <h1 align="center">{{newsData.title}}</h1>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 10px">
      <el-col :span="12">
        <div style="color: #888">
          <span>作者:&nbsp; &nbsp;</span>
          <span>{{ newsData.author}}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div style="float: right; color: #888">
          <span>{{ formatDate(newsData.display_time)}}</span>
        </div>
      </el-col>
    </el-row>
    <!-- <el-divider></el-divider> -->
    <hr style="margin-top: 0.25rem" />
    <el-row>
      <el-col :span="24">
        <div style="font-size: 25px">
          <span>摘要:</span>
          &nbsp; &nbsp; {{newsData.content_short}}
        </div>
      </el-col>
    </el-row>
    <hr style="margin-top: 0.25rem" />
    <el-row>
      <el-col :span="24">
        <div style="margin-top: 30px" v-html="newsData.content"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Consultation",
  data() {
    return {
      newsData: {},
      loading: false
    };
  },
  created() {
    this.loading = true;
    this.fetchData(this.$route.params.id);
  },
  methods: {
    fetchData(id) {
      let url = "/news/" + id;
      this.$api.fetchGet(url).then(response => {
        this.newsData = response.data;
        this.loading = false;
      });
    },
    formatDate(date) {
      return date ? moment(date).format("YYYY-MM-DD") : null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
