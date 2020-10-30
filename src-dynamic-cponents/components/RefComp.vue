<template>
  <div>
    <h3 id="h3el">Ref Example</h3>
    <input type="text" ref="sfield" placeholder="Search..."/>
  </div>
</template>

<script>
export default {
  name: "RefComp",
  created() {
  },
  mounted() {
    this.$refs.sfield.focus();
    console.log(this.$refs);
  }
}
</script>

<style scoped>

</style>