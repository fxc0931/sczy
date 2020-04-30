<template>
  <div class="home">
    <div class="mb-2">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="row">
      <div class="col-md-12 blog-main">
        <div class="blog-post">
          <span class="blog-post-title">中医资讯</span>
          <router-link to="/news" class="p-2 text-muted">
            <b-button size="sm" variant="link" class="readMore">查看更多</b-button>
          </router-link>
          <hr style="margin-top: 0.25rem" />
        </div>
        <div>
          <ul class="list-unstyled" v-loading="loadingNews" style="min-height: 250px">
            <b-media
              tag="li"
              v-for="(item, index) in newsData"
              :key="index"
              @click="goDetails(item._id)"
            >
              <template v-slot:aside>
                <b-img :src="item.image_uri" width="64" alt="placeholder"></b-img>
              </template>
              <h5 class="mt-0 mb-2">{{item.title}}</h5>
              <p class="mb-0">{{item.content_short}}</p>
            </b-media>
          </ul>
        </div>
      </div>
    </div>
    <!-- 中医咨询-->

    <div class="row">
      <div class="col-md-12 blog-main">
        <div class="blog-post">
          <span class="blog-post-title">养生频道</span>
          <b-button size="sm" variant="link" class="readMore">查看更多</b-button>
          <hr style="margin-top: 0.25rem" />
        </div>
        <div>
          <ul class="list-unstyled">
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
          </ul>
        </div>
      </div>
    </div>
    <!-- /.row -->

    <div class="row">
      <div class="col-md-12 blog-main">
        <div class="blog-post">
          <span class="blog-post-title">中医看诊</span>
          <b-button size="sm" variant="link" class="readMore">查看更多</b-button>
          <hr style="margin-top: 0.25rem" />
        </div>
        <div class="row" style="text-align: center;">
          <div class="col-lg-4">
            <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
            <h2>王五</h2>
            <p>著名医师，1988年毕业于xxxxx，擅长于xxx，现担任xxxx，经验丰富，医术一流。</p>
            <p>
              <b-button variant="success">在线看诊&raquo;</b-button>
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
            <h2>张三</h2>

            <p>著名医师，1988年毕业于xxxxx，擅长于xxx，现担任xxxx，经验丰富，医术一流。</p>
            <p>
              <b-button variant="success">在线看诊&raquo;</b-button>
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
            <h2>李四</h2>

            <p>著名医师，1988年毕业于xxxxx，擅长于xxx，现担任xxxx，经验丰富，医术一流。</p>
            <p>
              <b-button variant="success">在线看诊&raquo;</b-button>
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
            <h2>胡医生</h2>

            <p>著名医师，1988年毕业于xxxxx，擅长于xxx，现担任xxxx，经验丰富，医术一流。</p>
            <p>
              <b-button variant="success">预约挂号&raquo;</b-button>
            </p>
          </div>
          <div class="col-lg-4">
            <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
            <h2>何医生</h2>

            <p>著名医师，1988年毕业于xxxxx，擅长于xxx，现担任xxxx，经验丰富，医术一流。</p>
            <p>
              <b-button variant="success">预约挂号&raquo;</b-button>
            </p>
          </div>
          <div class="col-lg-4">
            <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
            <h2>朱医生</h2>

            <p>著名医师，1988年毕业于xxxxx，擅长于xxx，现担任xxxx，经验丰富，医术一流。</p>
            <p>
              <b-button variant="success">预约挂号&raquo;</b-button>
            </p>
          </div>
        </div>
        <!-- /.row -->
      </div>
    </div>
    <!-- /.row -->

    <div class="row">
      <div class="col-md-12 blog-main">
        <div class="blog-post">
          <span class="blog-post-title">优惠商城</span>
          <b-button size="sm" variant="link" class="readMore">查看更多</b-button>
          <hr style="margin-top: 0.25rem" />
        </div>
        <div class="row">
          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/300/300/?image=41"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="card-title">麦冬白菊花桑叶陈皮</p>
              <p class="card-price">
                <span class="price-rmb">￥</span>89
                <b-button size="sm" variant="success" style="float: right; margin-top: 0.6rem">查看详情</b-button>
              </p>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->

          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/300/300/?image=41"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="card-title">麦冬白菊花桑叶陈皮</p>
              <p class="card-price">
                <span class="price-rmb">￥</span>89
                <b-button size="sm" variant="success" style="float: right; margin-top: 0.6rem">查看详情</b-button>
              </p>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/300/300/?image=41"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="card-title">麦冬白菊花桑叶陈皮</p>
              <p class="card-price">
                <span class="price-rmb">￥</span>89
                <b-button size="sm" variant="success" style="float: right; margin-top: 0.6rem">查看详情</b-button>
              </p>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/300/300/?image=41"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="card-title">麦冬白菊花桑叶陈皮</p>
              <p class="card-price">
                <span class="price-rmb">￥</span>89
                <b-button size="sm" variant="success" style="float: right; margin-top: 0.6rem">查看详情</b-button>
              </p>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/300/300/?image=41"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="card-title">麦冬白菊花桑叶陈皮</p>
              <p class="card-price">
                <span class="price-rmb">￥</span>89
                <b-button size="sm" variant="success" style="float: right; margin-top: 0.6rem">查看详情</b-button>
              </p>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/300/300/?image=41"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="card-title">麦冬白菊花桑叶陈皮</p>
              <p class="card-price">
                <span class="price-rmb">￥</span>89
                <b-button size="sm" variant="success" style="float: right; margin-top: 0.6rem">查看详情</b-button>
              </p>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/300/300/?image=41"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="card-title">麦冬白菊花桑叶陈皮</p>
              <p class="card-price">
                <span class="price-rmb">￥</span>89
                <b-button size="sm" variant="success" style="float: right; margin-top: 0.6rem">查看详情</b-button>
              </p>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/300/300/?image=41"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="card-title">麦冬白菊花桑叶陈皮</p>
              <p class="card-price">
                <span class="price-rmb">￥</span>89
                <b-button size="sm" variant="success" style="float: right; margin-top: 0.6rem">查看详情</b-button>
              </p>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->
      </div>
    </div>
    <!-- /.row -->

    <div class="row">
      <div class="col-md-12 blog-main">
        <div class="blog-post">
          <span class="blog-post-title">商家自营</span>
          <b-button size="sm" variant="link" class="readMore">查看更多</b-button>
          <hr style="margin-top: 0.25rem" />
        </div>
        <div class="row">
          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/400/400/?image=20"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="shop-title">商家1</p>
              <b-card-text>主营中草药，各种医疗器械，养生器皿</b-card-text>
              <b-button size="sm" variant="success" style="float: right">进入店铺</b-button>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/400/400/?image=20"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="shop-title">商家2</p>
              <b-card-text>主营中草药，各种医疗器械，养生器皿</b-card-text>
              <b-button size="sm" variant="success" style="float: right">进入店铺</b-button>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/400/400/?image=20"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="shop-title">商家3</p>
              <b-card-text>主营中草药，各种医疗器械，养生器皿</b-card-text>
              <b-button size="sm" variant="success" style="float: right">进入店铺</b-button>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/400/400/?image=20"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="shop-title">商家4</p>
              <b-card-text>主营中草药，各种医疗器械，养生器皿</b-card-text>
              <b-button size="sm" variant="success" style="float: right">进入店铺</b-button>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/400/400/?image=20"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="shop-title">商家5</p>
              <b-card-text>主营中草药，各种医疗器械，养生器皿</b-card-text>
              <b-button size="sm" variant="success" style="float: right">进入店铺</b-button>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/400/400/?image=20"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="shop-title">商家6</p>
              <b-card-text>主营中草药，各种医疗器械，养生器皿</b-card-text>
              <b-button size="sm" variant="success" style="float: right">进入店铺</b-button>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/400/400/?image=20"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="shop-title">商家7</p>
              <b-card-text>主营中草药，各种医疗器械，养生器皿</b-card-text>
              <b-button size="sm" variant="success" style="float: right">进入店铺</b-button>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-6 col-lg-3">
            <b-card
              img-src="https://picsum.photos/400/400/?image=20"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <p class="shop-title">商家8</p>
              <b-card-text>主营中草药，各种医疗器械，养生器皿</b-card-text>
              <b-button size="sm" variant="success" style="float: right">进入店铺</b-button>
            </b-card>
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->
      </div>
    </div>
    <!-- /.row -->

    <div class="row">
      <div class="col-md-12 blog-main">
        <div class="blog-post">
          <span class="blog-post-title">药材特性</span>
          <b-button size="sm" variant="link" class="readMore">查看更多</b-button>
          <hr style="margin-top: 0.25rem" />
        </div>
        <div>
          <ul class="list-unstyled">
            <b-media tag="li">
              <template v-slot:aside>
                <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
              </template>
              <h5 class="mt-0 mb-2">陈皮</h5>
              <p class="mb-0">特性介绍</p>
            </b-media>

            <b-media tag="li" class="my-4">
              <template v-slot:aside>
                <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
              </template>

              <h5 class="mt-0 mb-2">药草</h5>
              <p class="mb-0">特性介绍</p>
            </b-media>

            <b-media tag="li">
              <template v-slot:aside>
                <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
              </template>

              <h5 class="mt-0 mb-2">金银花</h5>
              <p class="mb-0">特性介绍</p>
            </b-media>
          </ul>
        </div>
      </div>
    </div>
    <!-- /.row -->

    <div class="row">
      <div class="col-md-12 blog-main">
        <div class="blog-post">
          <span class="blog-post-title">中医医馆</span>
          <b-button size="sm" variant="link" class="readMore">查看更多</b-button>
          <hr style="margin-top: 0.25rem" />
        </div>
        <div>
          <ul class="list-unstyled">
            <b-media tag="li">
              <template v-slot:aside>
                <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
              </template>
              <h5 class="mt-0 mb-2">xxx医馆</h5>
              <p class="mb-1">
                <span>医馆简介:</span> &nbsp;&nbsp;&nbsp;&nbsp;主治风湿病，颈椎病，腰腿疼痛
              </p>
              <p class="mb-1">
                <span>联系电话:</span>&nbsp;&nbsp;&nbsp;&nbsp;0931-29292929
              </p>
              <p class="mb-1">
                <span>医馆网址:</span>&nbsp;&nbsp;&nbsp;&nbsp;www.baidu.com
              </p>
            </b-media>

            <b-media tag="li">
              <template v-slot:aside>
                <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
              </template>
              <h5 class="mt-0 mb-2">xxx医馆</h5>
              <p class="mb-1">
                <span>医馆简介:</span> &nbsp;&nbsp;&nbsp;&nbsp;主治风湿病，颈椎病，腰腿疼痛
              </p>
              <p class="mb-1">
                <span>联系电话:</span>&nbsp;&nbsp;&nbsp;&nbsp;0931-29292929
              </p>
              <p class="mb-1">
                <span>医馆网址:</span>&nbsp;&nbsp;&nbsp;&nbsp;www.baidu.com
              </p>
            </b-media>

            <b-media tag="li">
              <template v-slot:aside>
                <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
              </template>
              <h5 class="mt-0 mb-2">xxx医馆</h5>
              <p class="mb-1">
                <span>医馆简介:</span> &nbsp;&nbsp;&nbsp;&nbsp;主治风湿病，颈椎病，腰腿疼痛
              </p>
              <p class="mb-1">
                <span>联系电话:</span>&nbsp;&nbsp;&nbsp;&nbsp;0931-29292929
              </p>
              <p class="mb-1">
                <span>医馆网址:</span>&nbsp;&nbsp;&nbsp;&nbsp;www.baidu.com
              </p>
            </b-media>
          </ul>
        </div>
      </div>
    </div>
    <!-- /.row -->

    <div class="row">
      <div class="col-md-12 blog-main">
        <div class="blog-post">
          <span class="blog-post-title">养老机构</span>
          <b-button size="sm" variant="link" class="readMore">查看更多</b-button>
          <hr style="margin-top: 0.25rem" />
        </div>
        <div>
          <ul class="list-unstyled">
            <b-media tag="li">
              <template v-slot:aside>
                <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
              </template>
              <h5 class="mt-0 mb-2">xxx养老院</h5>
              <p class="mb-1">
                <span>机构简介:</span> &nbsp;&nbsp;&nbsp;&nbsp;提供优质的养老服务
              </p>
              <p class="mb-1">
                <span>联系电话:</span>&nbsp;&nbsp;&nbsp;&nbsp;0931-29292929
              </p>
              <p class="mb-1">
                <span>机构网址:</span>&nbsp;&nbsp;&nbsp;&nbsp;www.baidu.com
              </p>
            </b-media>

            <b-media tag="li">
              <template v-slot:aside>
                <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
              </template>
              <h5 class="mt-0 mb-2">xxx养老院</h5>
              <p class="mb-1">
                <span>机构简介:</span> &nbsp;&nbsp;&nbsp;&nbsp;提供优质的养老服务
              </p>
              <p class="mb-1">
                <span>联系电话:</span>&nbsp;&nbsp;&nbsp;&nbsp;0931-29292929
              </p>
              <p class="mb-1">
                <span>机构网址:</span>&nbsp;&nbsp;&nbsp;&nbsp;www.baidu.com
              </p>
            </b-media>

            <b-media tag="li">
              <template v-slot:aside>
                <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
              </template>
              <h5 class="mt-0 mb-2">xxx养老院</h5>
              <p class="mb-1">
                <span>机构简介:</span> &nbsp;&nbsp;&nbsp;&nbsp;提供优质的养老服务
              </p>
              <p class="mb-1">
                <span>联系电话:</span>&nbsp;&nbsp;&nbsp;&nbsp;0931-29292929
              </p>
              <p class="mb-1">
                <span>机构网址:</span>&nbsp;&nbsp;&nbsp;&nbsp;www.baidu.com
              </p>
            </b-media>
          </ul>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      slide: 0,
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 75,
        height: 75,
        class: "m1"
      },
      routerTitle: "",
      newsData: [],
      loadingNews: false
    };
  },
  created() {
    this.loadingNews = true;
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$api.fetchGet("/news/firstPage").then(response => {
        this.newsData = response.data.items;
        this.loadingNews = false;
      });
    },
    goDetails(id) {
      this.$router.push(`/news/${id}`);
    },
    goPage() {
      this.routerTitle = "router-title";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* stylelint-disable selector-list-comma-newline-after */

.blog-header {
  line-height: 1;
  border-bottom: 1px solid #e5e5e5;
}

.blog-header-logo {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
  font-size: 2.25rem;
}

@media (max-width: 768px) {
  .blog-header-logo {
    font-family: "Playfair Display", Georgia, "Times New Roman", serif;
    font-size: 1.25rem;
  }
}

.blog-header-logo:hover {
  text-decoration: none;
}

.display-4 {
  font-size: 2.5rem;
}
@media (min-width: 300px) {
  .display-4 {
    font-size: 3rem;
  }
  .col-6 {
    padding-left: 5px;
    padding-right: 5px;
  }
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.nav-scroller .nav-link {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 0.875rem;
}

.card-img-right {
  height: 100%;
  border-radius: 0 3px 3px 0;
}

.flex-auto {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.h-250 {
  height: 250px;
}
@media (min-width: 768px) {
  .h-md-250 {
    height: 250px;
  }
}

/* Pagination */
.blog-pagination {
  margin-bottom: 4rem;
}
.blog-pagination > .btn {
  border-radius: 2rem;
}

/*
 * Blog posts
 */
.blog-post {
  margin-bottom: 1rem;
}
.blog-post-title {
  font-size: 1.75rem;
}
.blog-post-meta {
  margin-bottom: 1.25rem;
  color: #999;
}

/*
 * Footer
 */
.blog-footer {
  padding: 2.5rem 0;
  color: #999;
  text-align: center;
  background-color: #f9f9f9;
  border-top: 0.05rem solid #e5e5e5;
}
.blog-footer p:last-child {
  margin-bottom: 0;
}

.readMore {
  float: right;
  margin-top: 0.4rem;
}
.card-body {
  padding: 0.5rem;
}
.card-price {
  font-size: 2rem;
  color: red;
  margin-bottom: 0.25rem;
}
.price-rmb {
  font-size: 0.25rem;
}
.shop-title {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}
.router-title {
  color: #007bff;
}
</style>
