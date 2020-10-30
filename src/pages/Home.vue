<template>
  <div class="row">
    <div class="col-12">
      <h3 class="clearfix">Home Page</h3>
    </div>
    <div class="col">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae urna nec diam luctus fermentum. Mauris
      ac
      accumsan nisl. Nullam pulvinar leo mauris, non maximus mi suscipit vitae. Integer faucibus placerat sodales.
      Proin
      ut augue arcu. Vestibulum mollis diam id lorem commodo mollis. In convallis pretium quam vitae pharetra.
      Curabitur
      vulputate fermentum nulla. Phasellus sodales, ligula condimentum aliquam bibendum, risus arcu luctus urna, vel
      consectetur arcu diam vel orci. Duis dictum, sapien quis accumsan blandit, risus sapien feugiat mauris, mattis
      suscipit tortor ex et enim.
    </div>
    <div class="col">
      Suspendisse potenti. Aliquam pulvinar velit eu lacus cursus euismod. Nulla sit amet ligula at neque varius
      dapibus
      ut et lorem. Aenean placerat interdum lectus, gravida ornare nibh. Phasellus nisi nisl, mollis posuere augue eu,
      hendrerit vehicula ex. Curabitur mattis pharetra erat, eu auctor diam sagittis et. Aenean nec tincidunt nisl.
      Praesent at orci vel lorem condimentum blandit. Aliquam commodo interdum diam eget varius. Sed iaculis euismod
      felis, vel porta tortor iaculis nec. In sed metus non nibh tristique semper. Cras dapibus nunc in metus
      condimentum volutpat.
    </div>
    <div class="clearfix"></div>
    <div class="col-12">
      <button @click="goBack">Go Back</button>
      <button @click="goForward">Go Forward</button>

      <button @click="navigate">Go to About</button>
      <button @click="navigate2">Replace me with Contact</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    navigate() {
      this.$router.push({ name: 'about' });
    },
    navigate2() {
      this.$router.replace({ name: 'contact' });
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    }
  }
}
</script>

<style scoped>

</style>