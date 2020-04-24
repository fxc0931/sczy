<template>
  <div class="consultation">
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
</template>

<script>
export default {
  name: "Consultation",
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
