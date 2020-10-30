<template>
  <div class="container-fluid">
    <header>
      <div class="row">
        <div class="col-12">
          <slot name="header"></slot>
        </div>
      </div>
    </header>
    <main>
      <div class="row main-row">
        <div class="col-12">
          <slot></slot>
        </div>
      </div>
    </main>
    <footer>
      <div class="row">
        <div class="col-12 footer-area">
          <slot name="footer"></slot>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BaseLayout"
}
</script>

<style scoped>
div.main-row{
  margin: 18px 0 18px 0;
}
div.footer-area{
  text-align: center;
  padding: 12px;
  background: #007BFF;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>