<template>
  <div class="consultation">
     <hr style="margin-top: 0.25rem" />
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="中医类新用" name="first">
        <ul class="list-unstyled" v-loading="loading" style="min-height: 500px">
          <b-media tag="li" v-for="(item, index) in newsData" :key="index" @click="goDetails(item._id)" >
            <template v-slot:aside>
              <b-img :src="item.image_uri" width="64" alt="placeholder"></b-img>
            </template>
            <h5 class="mt-0 mb-2">{{item.title}}</h5>
                 <p
                class="mb-0"
              >{{item.content_short}}</p>
          </b-media>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="中医知识" name="second">
        <ul class="list-unstyled">
          <b-media tag="li">
            <template v-slot:aside>
              <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
            </template>
            <h5 class="mt-0 mb-2">中医中药中国行”文化主题活动在上海大世界开幕</h5>
            <p
              class="mb-0"
            >开幕式上，以世界非物质文化遗产“绛州鼓乐”开场，通过国家非物质文化遗产石氏伤科为题材的主题短剧，展现了海派中医人百年的坚守；黄浦区的医务人员和居民们向来宾们展示了刚柔并济的中医功法；名中医代表还向居民代表赠送了中医药健康养生系列丛书；来自黄浦区吾馨艺术中心的孩子们献唱了自编的中草药四季歌；国家级非物质文化遗产“海门山歌”歌唱了海门百姓迎来上海市非物质文化遗产 “施氏伤科”重回海门的喜悦之情。</p>
          </b-media>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="中医文化" name="third">
        <ul class="list-unstyled">
          <b-media tag="li">
            <template v-slot:aside>
              <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
            </template>

            <h5 class="mt-0 mb-2">夏季肝火旺该怎么办</h5>
            <p
              class="mb-0"
            >夏天是一年四季中人体肝火最为旺盛的一个季节。随着气温的逐渐转热，很多爱美MM们的脸上都长出了让自己很头疼的痘痘，那么为什么会长痘痘呢？其实长痘痘就是一种肝火旺的表现，同时，肝脏是身体最大的解毒器官，肝火过旺会导致身体排毒不畅。因此想要祛痘，首要把肝脏调理好。在初夏如何做好养肝护肝的工作是非常重要的，那么初夏季节肝火旺怎么调理好呢？下面就让我们一起来了解下吧</p>
          </b-media>

          <b-media tag="li" class="my-4">
            <template v-slot:aside>
              <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
            </template>

            <h5 class="mt-0 mb-2">冬季养生 要养成五个生活好习惯</h5>
            <p
              class="mb-0"
            >传统中医有「冬病夏治」的观念，意思是说，冬天容易发生的疾病或冬天会症状加重的疾病，例如循环、呼吸、消化等这些「阳气不足」的病症，在病情比较缓解的夏季，就先养成良好的生活习惯或进行调治补养，可以增强身体机能，等到冬天天气变冷时，身体自然可以有足够的抵抗力，对抗病毒或是细菌的侵袭。</p>
          </b-media>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Consultation",
  data() {
    return {
      activeName: "first",
      newsData: [],
      loading: false
    };
  },
  created() {
    this.loading = true
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$api.fetchGet("/news/published").then(response => {
        this.newsData = response.data.items;
        this.loading = false
      });
    },
    handleClick() {
      console.log("23");
    },
    goDetails(id) {
      this.$router.push(`/news/${id}`) ;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
