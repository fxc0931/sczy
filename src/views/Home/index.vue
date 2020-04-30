<template>
  <div class="home">
    <div class="container">
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-2 pt-1">
            <a class="text-muted">关注我们</a>
          </div>
          <div class="col-8 text-center">
            <router-link  to="/home" class="blog-header-logo text-dark" >四川中医平台</router-link>
          </div>
          <div class="col-2 d-flex justify-content-end align-items-center">
            <a class="text-muted" href="#" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="mx-3"
                role="img"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="M21 21l-5.2-5.2" />
              </svg>
            </a>
            <a class="btn btn-sm btn-outline-secondary" href="#">登录</a>
          </div>
        </div>
      </header>

      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
          <router-link to="/news" class="p-2 text-muted">
            <span :class="routerTitle" >中医资讯</span>
          </router-link>
          <router-link to="/health-nurturing" class="p-2 text-muted" >
            <span :class="routerTitle">养生频道</span>
          </router-link>
          <router-link to="/treat" class="p-2 text-muted">
            <span :class="routerTitle">中医看诊</span>
          </router-link>
          <router-link to="/stores" class="p-2 text-muted">
            <span :class="routerTitle">优惠商城</span>
          </router-link>
          <router-link to="/business" class="p-2 text-muted" >
            <span :class="routerTitle">商家自营</span>
          </router-link>
          <router-link to="/medicine" class="p-2 text-muted" >
            <span :class="routerTitle">药材特性</span>
          </router-link>
          <router-link to="/hospital" class="p-2 text-muted" >
            <span :class="routerTitle">中医院馆</span>
          </router-link>
          <router-link to="/agency" class="p-2 text-muted">
            <span :class="routerTitle">养老机构</span>
          </router-link>
        </nav>
      </div>
    </div>

    <main role="main" class="container mb-2">
      <router-view>
      
      </router-view>
    </main>
    <!-- /.container -->

    <footer class="blog-footer">
      <p>
      四川中医平台版权所有
      </p>
      <p>
        <a href="#">返回顶部</a>
      </p>
    </footer>
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
      routerTitle: ""
    };
  },
  methods: {
    goPage() {
      console.log('234');
      
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
