<template>
  <div>
    <h3>Contact Page</h3>
    <button @click="goForward">Go Forward</button>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    goForward() {
      this.$router.go(1);
    }
  }
}
</script>

<style scoped>

</style>