<template>
  <div>
    <BaseLayout>
      <template v-slot:header>
        <Header/>
      </template>
      <template v-slot:default>
        <router-view></router-view>
      </template>
      <template v-slot:footer>
        <span>
          Copyright SEDC Code Academy &copy; {{ currYear }}
        </span>
      </template>
    </BaseLayout>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import BaseLayout from "./components/BaseLayout.vue";

export default {
  name: 'App',
  data() {
    return {
      currYear: new Date().getFullYear()
    };
  },
  components: {
    Header,
    BaseLayout
  }
}
</script>
