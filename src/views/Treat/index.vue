<template>
  <div class="consultation">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="在线看诊" name="first">
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
        </div>
      </el-tab-pane>
      <el-tab-pane label="预约挂号" name="second">
      <div class="row" style="text-align: center;">

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
      </el-tab-pane>
         <el-tab-pane label="付费咨询" name="third">
        <div class="row" style="text-align: center;">
          <div class="col-lg-4">
            <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
            <h2>王五</h2>
            <p>著名医师，1988年毕业于xxxxx，擅长于xxx，现担任xxxx，经验丰富，医术一流。</p>
            <p>
              <b-button variant="success">咨询&raquo;</b-button>
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
            <h2>张三</h2>

            <p>著名医师，1988年毕业于xxxxx，擅长于xxx，现担任xxxx，经验丰富，医术一流。</p>
            <p>
              <b-button variant="success">咨询&raquo;</b-button>
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
            <h2>李四</h2>

            <p>著名医师，1988年毕业于xxxxx，擅长于xxx，现担任xxxx，经验丰富，医术一流。</p>
            <p>
              <b-button variant="success">咨询&raquo;</b-button>
            </p>
          </div>
          <!-- /.col-lg-4 -->
        </div>
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
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 75,
        height: 75,
        class: "m1"
      }
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
